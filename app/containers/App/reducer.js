/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import {
  ERROR_HAPPEN,
  ERROR_CLEAR,
  DRAWER_OPEN,
  FILE_UPLOAD,
  FILE_UPLOAD_SUCCESS,
  FILE_UPLOAD_FAIL,
  GET_TAGS,
  GET_TAGS_SUCCESS,
  GET_TAGS_FAIL,
  ADD_TAG,
  ADD_TAG_SUCCESS,
  ADD_TAG_FAIL,
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAIL,
  GET_PLAYLISTS,
  GET_PLAYLISTS_SUCCESS,
  GET_PLAYLISTS_FAIL,
  ADD_PLAYLIST,
  ADD_PLAYLIST_SUCCESS,
  ADD_PLAYLIST_FAIL,
  FILE_UPLOAD_PROGRESS,
} from './constants';

export const initialState = {
  error: null,
  drawerIsOpen: false,
  fileUpload: {
    file: null,
    error: null,
    data: null,
    percent: 0,
  },
  tags: {
    data: [],
    error: null,
  },
  addTag: {
    tag: null,
    data: null,
    error: null,
  },
  categories: {
    data: [],
    error: null,
  },
  addCategory: {
    title: null,
    data: null,
    error: null,
  },

  playlists: {
    data: [],
    error: null,
  },
  addPlaylist: {
    title: null,
    data: null,
    error: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ERROR_HAPPEN:
        draft.error = action.error;
        break;
      case ERROR_CLEAR:
        draft.error = null;
        break;
      case DRAWER_OPEN:
        draft.drawerIsOpen =
          action.show === undefined ? !draft.drawerIsOpen : action.show;
        break;

      case FILE_UPLOAD:
        draft.fileUpload.percent = 0;
        draft.fileUpload.file = action.file;
        break;
      case FILE_UPLOAD_PROGRESS:
        draft.fileUpload.percent = action.percent;
        break;
      case FILE_UPLOAD_SUCCESS:
        draft.fileUpload.data = action.data;
        break;
      case FILE_UPLOAD_FAIL:
        draft.fileUpload.percent = 0;
        draft.fileUpload.error = action.error;
        break;

      case GET_TAGS:
        draft.tags.error = null;
        break;
      case GET_TAGS_SUCCESS:
        draft.tags.error = null;
        draft.tags.data = Object.values(action.data);
        break;
      case GET_TAGS_FAIL:
        draft.tags.error = action.error;
        break;

      case ADD_TAG:
        draft.addTag.error = null;
        draft.addTag.data = null;
        draft.addTag.tag = action.tag;
        break;
      case ADD_TAG_SUCCESS:
        draft.addTag.tag = null;
        draft.addTag.error = null;
        draft.addTag.data = action.data;
        break;
      case ADD_TAG_FAIL:
        draft.addTag.data = [];
        draft.addTag.error = action.error;
        break;

      case GET_CATEGORIES:
        draft.categories.error = null;
        break;
      case GET_CATEGORIES_SUCCESS:
        draft.tags.error = null;
        draft.categories.data = Object.values(action.data);
        break;
      case GET_CATEGORIES_FAIL:
        draft.categories.error = action.error;
        break;

      case ADD_CATEGORY:
        draft.addCategory.error = null;
        draft.addCategory.data = null;
        draft.addCategory.title = action.title;
        break;
      case ADD_CATEGORY_SUCCESS:
        draft.addCategory.title = null;
        draft.addCategory.error = null;
        draft.addCategory.data = action.data;
        break;
      case ADD_CATEGORY_FAIL:
        draft.addCategory.data = null;
        draft.addCategory.error = action.error;
        break;

      case GET_PLAYLISTS:
        draft.playlists.error = null;
        break;
      case GET_PLAYLISTS_SUCCESS:
        draft.tags.error = null;
        draft.playlists.data = Object.values(action.data);
        break;
      case GET_PLAYLISTS_FAIL:
        draft.playlists.error = action.error;
        break;

      case ADD_PLAYLIST:
        draft.addPlaylist.error = null;
        draft.addPlaylist.data = null;
        draft.addPlaylist.title = action.title;
        break;
      case ADD_PLAYLIST_SUCCESS:
        draft.addPlaylist.title = null;
        draft.addPlaylist.error = null;
        draft.addPlaylist.data = action.data;
        break;
      case ADD_PLAYLIST_FAIL:
        draft.addPlaylist.data = null;
        draft.addPlaylist.error = action.error;
        break;
    }
  });

export default appReducer;
