/**
 *
 * DashboardLayout
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import {
  getTagsAction,
  getCategoriesAction,
  getPlayListsAction,
} from 'containers/App/actions';
import NavBar from './NavBar';
import SidebarDrawer from './SidebarDrawer';
import Sidebar from './Sidebar';

const StyledDashboardWrapper = styled.div`
  background: #fefefe;
  color: #6f7285;

  & .sidebarWrapper {
    z-index: 0;
    padding-bottom: 0px !important;
  }

  & .contentWrapper {
    padding: 15px;
    flex: 1;
  }
`;

function DashboardLayout({
  children,
  showSidebar,
  getTagsFromServer,
  getCategoriesFromServer,
  getPlaylistssFromServer,
}) {
  getTagsFromServer();
  getCategoriesFromServer();
  getPlaylistssFromServer();

  return (
    <StyledDashboardWrapper>
      <NavBar />
      <SidebarDrawer />

      <Grid container>
        {showSidebar && (
          <Grid item className="sidebarWrapper">
            <Sidebar />
          </Grid>
        )}
        <Grid item className="contentWrapper">
          {children}
        </Grid>
      </Grid>
    </StyledDashboardWrapper>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
  showSidebar: PropTypes.bool,
  getTagsFromServer: PropTypes.func.isRequired,
  getCategoriesFromServer: PropTypes.func.isRequired,
  getPlaylistssFromServer: PropTypes.func.isRequired,
};

DashboardLayout.defaultProps = {
  showSidebar: true,
};

function mapDispatchToProps(dispatch) {
  return {
    getTagsFromServer: () => dispatch(getTagsAction()),
    getCategoriesFromServer: () => dispatch(getCategoriesAction()),
    getPlaylistssFromServer: () => dispatch(getPlayListsAction()),
  };
}
const withStore = connect(
  undefined,
  mapDispatchToProps,
);
export default compose(
  memo,
  withStore,
)(DashboardLayout);
