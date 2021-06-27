/*
 *
 * App actions
 *
 */

import {
  ERROR_HAPPEN,
  ERROR_CLEAR,
  DRAWER_OPEN,
  FILE_UPLOAD,
  FILE_UPLOAD_PROGRESS,
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
} from './constants';

export function errorHappenAction(error) {
  return {
    type: ERROR_HAPPEN,
    error,
  };
}
export function errorClearAction() {
  return {
    type: ERROR_CLEAR,
  };
}
export function drawerToggleAction(show) {
  return {
    type: DRAWER_OPEN,
    show,
  };
}

export function fileUploadAction(file) {
  return {
    type: FILE_UPLOAD,
    file,
  };
}
export function fileUploadProgressAction(percent) {
  return {
    type: FILE_UPLOAD_PROGRESS,
    percent,
  };
}
export function fileUploadSuccessAction(data) {
  return {
    type: FILE_UPLOAD_SUCCESS,
    data,
  };
}
export function fileUploadFailAction(error) {
  return {
    type: FILE_UPLOAD_FAIL,
    error,
  };
}

export function getTagsAction() {
  return {
    type: GET_TAGS,
  };
}
export function getTagsSuccessAction(data) {
  return {
    type: GET_TAGS_SUCCESS,
    data,
  };
}
export function getTagsFailAction(error) {
  return {
    type: GET_TAGS_FAIL,
    error,
  };
}

export function addTagAction(tag) {
  return {
    type: ADD_TAG,
    tag,
  };
}
export function addTagSuccessAction(data) {
  return {
    type: ADD_TAG_SUCCESS,
    data,
  };
}
export function addTagFailAction(error) {
  return {
    type: ADD_TAG_FAIL,
    error,
  };
}

export function getCategoriesAction() {
  return {
    type: GET_CATEGORIES,
  };
}
export function getCategoriesSuccessAction(data) {
  return {
    type: GET_CATEGORIES_SUCCESS,
    data,
  };
}
export function getCategoriesFailAction(error) {
  return {
    type: GET_CATEGORIES_FAIL,
    error,
  };
}

export function addCategoryAction(title) {
  return {
    type: ADD_CATEGORY,
    title,
  };
}
export function addCategorySuccessAction(data) {
  return {
    type: ADD_CATEGORY_SUCCESS,
    data,
  };
}
export function addCategoryFailAction(error) {
  return {
    type: ADD_CATEGORY_FAIL,
    error,
  };
}

export function getPlayListsAction() {
  return {
    type: GET_PLAYLISTS,
  };
}
export function getPlayListsSuccessAction(data) {
  return {
    type: GET_PLAYLISTS_SUCCESS,
    data,
  };
}
export function getPlayListsFailAction(error) {
  return {
    type: GET_PLAYLISTS_FAIL,
    error,
  };
}

export function addPlayListAction(title) {
  return {
    type: ADD_PLAYLIST,
    title,
  };
}
export function addPlayListSuccessAction(data) {
  return {
    type: ADD_PLAYLIST_SUCCESS,
    data,
  };
}
export function addPlayListFailAction(error) {
  return {
    type: ADD_PLAYLIST_FAIL,
    error,
  };
}
