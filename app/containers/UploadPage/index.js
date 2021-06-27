/**
 *
 * UploadPage
 *
 */

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { Grid, Typography, Button } from '@material-ui/core';
import { CloudUpload as UploadIcon } from '@material-ui/icons';

import { fileUploadAction } from 'containers/App/actions';
import { makeSelectFileUpload } from 'containers/App/selectors';
import DashboardLayout from 'layouts/DashboardLayout';

import FileUploadForm from './FileUploadForm';
import FileUploadProgress from './FileUploadProgress';
import FileUploadInfo from './FileUploadInfo';

const UploadWrapper = styled(Grid)`
  max-width: 700px;
  margin: auto;

  & .topTitleBar {
    border-bottom: 1px solid #ddd;
    height: 30px;
    line-height: 30px;
  }

  & .topTitleBar > span {
    border-bottom: 1px solid #666;
    display: inline-block;
    height: 100%;
    margin-top: 1px;
    padding-left: 35px;
  }

  & .topTitleBar .MuiSvgIcon-root,
  & .topTitleBar .MuiTypography-root {
    height: 100%;
    display: inline-block;
    float: right;
  }

  & .topTitleBar .MuiTypography-root {
    line-height: 30px;
    font-weight: bold;
    font-size: 0.8rem;
  }

  & .topTitleBar .MuiSvgIcon-root {
    margin: 0 5px;
  }

  & .videoUploadInfoWrapper {
    background: #f7f7f7;
    border-radius: 3px;
    box-shadow: 0 0 3px #dadada;
    padding: 1rem;
  }

  & .btn-wrapper {
    text-align: left;

    & .btn {
      margin: 3px;

      &.btn-publish-later {
        background: #bbb;
        color: #fff;

        &:hover {
          background: #f50057;
          color: initial;
        }
      }
    }
  }
`;

export function UploadPage({ fileUpload, onSelectFile, onPublishVideo }) {
  const [videoData, setVideoData] = useState({
    video_id: fileUpload && fileUpload.data ? fileUpload.data.video : null,
    title: 'عنوان ویدیو',
    category: 1,
    info: 'این توضیحان هستش',
    tags: [],
    channel_category: null,
    playlist: null,
  });

  useEffect(() => {
    if (fileUpload && fileUpload.data && !videoData.video_id) {
      setVideoData({ ...videoData, video_id: fileUpload.data.video });
    }
  });

  function handlePublish() {
    onPublishVideo(videoData);
  }

  function handlePublishLater() {
    // TODO این قسمت هنوز انجام نشده
    // eslint-disable-next-line no-alert
    alert('handle publish later');
  }

  return (
    <DashboardLayout showSidebar={false}>
      <Helmet>
        <title>بارگذاری ویدیو</title>
        <meta name="description" content="بارگذاری ویدیو" />
      </Helmet>

      <UploadWrapper container>
        <Grid item xs={12}>
          <div className="topTitleBar">
            <span>
              <UploadIcon />
              <Typography variant="caption">بارگذاری ویدیو</Typography>
            </span>
          </div>
        </Grid>

        {fileUpload.file ? (
          <Grid item xs={12} className="videoUploadInfoWrapper">
            <FileUploadProgress value={fileUpload.percent} />
            <FileUploadInfo
              data={videoData}
              onChange={data => setVideoData(data)}
            />

            <Grid item className="btn-wrapper">
              <Button
                color="primary"
                variant="contained"
                size="large"
                className="btn btn-publish-later"
                onClick={handlePublishLater}
              >
                ذخیره بعدا منتشر میکنم
              </Button>

              <Button
                color="secondary"
                variant="contained"
                size="large"
                className="btn btn-publish"
                onClick={handlePublish}
              >
                انتشار ویدیو
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Grid item xs={12}>
            <FileUploadForm onSelect={onSelectFile} />
          </Grid>
        )}
      </UploadWrapper>
    </DashboardLayout>
  );
}

UploadPage.propTypes = {
  fileUpload: PropTypes.object.isRequired,
  onSelectFile: PropTypes.func.isRequired,
  onPublishVideo: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  fileUpload: makeSelectFileUpload(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSelectFile: file => dispatch(fileUploadAction(file)),
    // eslint-disable-next-line no-console
    onPublishVideo: data => console.log(data), // dispatch(fileUploadAction(file)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(UploadPage);
