import { takeLatest, call, put, select, fork, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { uploadVideoApi } from 'api/videos';
import { getTagsApi, addTagApi } from 'api/tags';
import { getCategoriesApi, addCategoryApi } from 'api/categories';
import { getPlaylistsApi, addPlaylistApi } from 'api/playlists';

import {
  makeSelectCategories,
  makeSelectTags,
  makeSelectPlaylists,
} from './selectors';

import {
  FILE_UPLOAD,
  GET_TAGS,
  ADD_TAG,
  GET_CATEGORIES,
  ADD_CATEGORY,
  GET_PLAYLISTS,
  ADD_PLAYLIST,
} from './constants';

import {
  fileUploadFailAction,
  getTagsSuccessAction,
  getTagsFailAction,
  addTagSuccessAction,
  addTagFailAction,
  getCategoriesSuccessAction,
  getCategoriesFailAction,
  addCategorySuccessAction,
  addCategoryFailAction,
  getPlayListsSuccessAction,
  getPlayListsFailAction,
  addPlayListSuccessAction,
  fileUploadProgressAction,
  fileUploadSuccessAction,
} from './actions';

const identity = a => a;

const createAsyncUpload = file => {
  let emit;
  const chan = eventChannel(emitter => {
    emit = emitter;
    return () => {};
  });

  const promise = uploadVideoApi(file, function promiseFunction(e) {
    emit((e.loaded * 100) / e.total);
  })
    .then(response => emit({ state: 'ok', response }))
    .catch(error => emit({ state: 'nok', error }));

  return [promise, chan];
};

function* watchOnProgress(chan) {
  while (true) {
    const data = yield take(chan);
    if (typeof data === 'number') {
      yield put(fileUploadProgressAction(data));
    } else if (data.state === 'ok') {
      yield put(fileUploadSuccessAction(data.response.data));
    } else {
      yield put(fileUploadFailAction(data.error.response));
    }
  }
}

function* uploadVideo({ file }) {
  try {
    const [promise, chan] = createAsyncUpload(file);
    yield fork(watchOnProgress, chan);
    yield call(identity(promise));
  } catch (error) {
    yield put(fileUploadFailAction(error.response));
  }
}

function* getTags() {
  try {
    const response = yield call(getTagsApi);
    yield put(getTagsSuccessAction(response.data));
  } catch (error) {
    yield put(getTagsFailAction(error.response));
  }
}

function* addTag({ tag }) {
  if (tag) {
    try {
      const response = yield call(addTagApi, tag);
      yield put(addTagSuccessAction(response.data));
      const { data } = yield select(makeSelectTags());
      data.push({ ...response.data, isNew: true });
      yield put(getTagsSuccessAction(data));
    } catch (error) {
      yield put(addTagFailAction(error.response));
    }
  }
}

function* getCategories() {
  try {
    const response = yield call(getCategoriesApi);
    yield put(getCategoriesSuccessAction(response.data));
  } catch (error) {
    yield put(getCategoriesFailAction(error.response));
  }
}

function* addCategory({ title }) {
  if (title) {
    try {
      const response = yield call(addCategoryApi, title);
      yield put(addCategorySuccessAction(response.data));
      const categories = yield select(makeSelectCategories());
      categories.push(response.data);
      yield put(getCategoriesSuccessAction(categories));
    } catch (error) {
      yield put(addCategoryFailAction(error.response));
    }
  }
}

function* getPlaylists() {
  try {
    const response = yield call(getPlaylistsApi);
    yield put(getPlayListsSuccessAction(response.data));
  } catch (error) {
    yield put(getPlayListsFailAction(error.response));
  }
}

function* addPlaylist({ title }) {
  if (title) {
    try {
      const response = yield call(addPlaylistApi, title);
      yield put(addPlayListSuccessAction(response.data));
      const playlists = yield select(makeSelectPlaylists());
      playlists.push(response.data);
      yield put(getPlayListsSuccessAction(playlists));
    } catch (error) {
      yield put(addCategoryFailAction(error.response));
    }
  }
}

export default function* defaultSaga() {
  yield takeLatest(FILE_UPLOAD, uploadVideo);

  yield takeLatest(GET_TAGS, getTags);
  yield takeLatest(ADD_TAG, addTag);

  yield takeLatest(GET_CATEGORIES, getCategories);
  yield takeLatest(ADD_CATEGORY, addCategory);

  yield takeLatest(GET_PLAYLISTS, getPlaylists);
  yield takeLatest(ADD_PLAYLIST, addPlaylist);
}
