import request from 'utils/request';

export function getPlaylistsApi() {
  const config = {
    method: 'get',
    url: '/playlist',
  };

  return request(config);
}

export function addPlaylistApi(title) {
  const config = {
    method: 'post',
    url: '/playlist',
    data: { title },
  };

  return request(config);
}
