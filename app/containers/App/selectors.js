import { createSelector } from 'reselect';

const selectApp = state => state.app;
const selectRouter = state => state.router;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectApp = () =>
  createSelector(
    selectApp,
    appState => appState,
  );

const makeSelectError = () =>
  createSelector(
    selectApp,
    appState => appState && appState.error,
  );

const makeSelectDrawerIsOpen = () =>
  createSelector(
    selectApp,
    appState => appState && appState.drawerIsOpen,
  );

const makeSelectFileUpload = () =>
  createSelector(
    selectApp,
    appState => appState.fileUpload,
  );

const makeSelectFileUploadPercentage = () =>
  createSelector(
    selectApp,
    appState => appState.fileUpload.percent,
  );

const makeSelectTags = () =>
  createSelector(
    selectApp,
    appState => appState.tags,
  );

const makeSelectAddTag = () =>
  createSelector(
    selectApp,
    appState => appState.addTag.data,
  );

const makeSelectCategories = () =>
  createSelector(
    selectApp,
    appState => appState.categories.data,
  );

const makeSelectAddCategory = () =>
  createSelector(
    selectApp,
    appState => appState.addCategory.data,
  );

const makeSelectPlaylists = () =>
  createSelector(
    selectApp,
    appState => appState.playlists.data,
  );

const makeSelectAddPlaylist = () =>
  createSelector(
    selectApp,
    appState => appState.addPlaylist.data,
  );

export {
  makeSelectLocation,
  makeSelectApp,
  makeSelectError,
  makeSelectDrawerIsOpen,
  makeSelectFileUpload,
  makeSelectFileUploadPercentage,
  makeSelectTags,
  makeSelectAddTag,
  makeSelectCategories,
  makeSelectAddCategory,
  makeSelectPlaylists,
  makeSelectAddPlaylist,
};
