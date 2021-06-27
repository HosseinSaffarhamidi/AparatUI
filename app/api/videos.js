import request from 'utils/request';

export function uploadVideoApi(file, onUploadProgress) {
  const data = new FormData();
  data.append('video', file);

  const config = {
    method: 'post',
    url: '/video/upload',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data,
    onUploadProgress,
  };

  return request(config);
}
