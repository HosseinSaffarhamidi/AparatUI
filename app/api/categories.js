import request from 'utils/request';

export function getCategoriesApi() {
  const config = {
    method: 'get',
    url: '/category',
  };

  return request(config);
}

export function addCategoryApi(title) {
  const config = {
    method: 'post',
    url: '/category',
    data: { title, icon: null, banner_id: null },
  };

  return request(config);
}
