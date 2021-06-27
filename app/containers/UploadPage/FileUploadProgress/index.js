import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import videoImage from 'images/icon-512x512.png';
const Wrapper = styled.div`
  background: #fff;
  border: 2px dashed #ddd;
  padding: 8px;

  & .imageContainer {
    width: 80px;

    & .image {
      width: 100%;
      heigth: 100%;
    }
  }

  & .uploadDetail {
    padding-right: 20px;
    width: 100%;

    & b {
      font-size: 1.1rem;
      margin-top: 15px;
    }

    & .progressBar {
      width: 100%;
      margin-top: 25px;
      height: 10px;
      border-radius: 5px;
      border: 1px solid #ddd;
      position: relative;
      overflow: hidden;

      & .progressBarPercentage {
        position: absolute;
        background: #3babd0;
        left: 50%;
        right: 0;
      }
    }
  }
`;

function FileUploadProgress({ value }) {
  return (
    <Wrapper>
      <Grid container wrap="nowrap">
        <Grid className="imageContainer">
          <img src={videoImage} className="image" alt="تصویر ویدیو" />
        </Grid>
        <Grid className="uploadDetail">
          {value <= 99 ? (
            <b>در حال آپلود ویدیو (%{value})</b>
          ) : (
            <b>ویدیو شما با موفقیت بارگزاری شد</b>
          )}
          <div className="progressBar">
            <div
              className="progressBarPercentage"
              style={{ left: `${100 - value}%` }}
            >
              &nbsp;
            </div>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

FileUploadProgress.propTypes = {
  value: PropTypes.number.isRequired,
};

export default memo(FileUploadProgress);
