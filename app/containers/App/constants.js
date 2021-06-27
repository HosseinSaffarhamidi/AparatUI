/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const ERROR_HAPPEN = 'app/App/ERROR_HAPPEN';
export const ERROR_CLEAR = 'app/App/ERROR_CLEAR';
export const DRAWER_OPEN = 'app/App/DRAWER_OPEN';

export const FILE_UPLOAD = 'app/App/FILE_UPLOAD';
export const FILE_UPLOAD_PROGRESS = 'app/App/FILE_UPLOAD_PROGRESS';
export const FILE_UPLOAD_SUCCESS = 'app/App/FILE_UPLOAD_SUCCESS';
export const FILE_UPLOAD_FAIL = 'app/App/FILE_UPLOAD_FAIL';

export const GET_TAGS = 'app/App/GET_TAGS';
export const GET_TAGS_SUCCESS = 'app/App/GET_TAGS_SUCCESS';
export const GET_TAGS_FAIL = 'app/App/GET_TAGS_FAIL';

export const ADD_TAG = 'app/App/ADD_TAG';
export const ADD_TAG_SUCCESS = 'app/App/ADD_TAG_SUCCESS';
export const ADD_TAG_FAIL = 'app/App/ADD_TAG_FAIL';

export const GET_CATEGORIES = 'app/App/GET_CATEGORIES';
export const GET_CATEGORIES_SUCCESS = 'app/App/GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAIL = 'app/App/GET_CATEGORIES_FAIL';

export const ADD_CATEGORY = 'app/App/ADD_CATEGORY';
export const ADD_CATEGORY_SUCCESS = 'app/App/ADD_CATEGORY_SUCCESS';
export const ADD_CATEGORY_FAIL = 'app/App/ADD_CATEGORY_FAIL';

export const GET_PLAYLISTS = 'app/App/GET_PLAYLISTS';
export const GET_PLAYLISTS_SUCCESS = 'app/App/GET_PLAYLISTS_SUCCESS';
export const GET_PLAYLISTS_FAIL = 'app/App/GET_PLAYLISTS_FAIL';

export const ADD_PLAYLIST = 'app/App/ADD_PLAYLIST';
export const ADD_PLAYLIST_SUCCESS = 'app/App/ADD_PLAYLIST_SUCCESS';
export const ADD_PLAYLIST_FAIL = 'app/App/ADD_PLAYLIST_FAIL';
