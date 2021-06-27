import request from 'utils/request';

export function loginApi({ username, password }) {
  const config = {
    method: 'post',
    url: '/login',
    data: {
      username,
      password,
      grant_type: 'password',
      client_id: 2,
      client_secret: 'ONOiIZ9CDuET0WskxWMvTT6Blam1KnvMVgAlfB7C',
    },
  };

  return request(config);
}
