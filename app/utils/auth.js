export function setAuth(authData) {
  localStorage.setItem('auth', JSON.stringify(authData));
}

export function getAuth() {
  try {
    return JSON.parse(localStorage.getItem('auth'));
  } catch (error) {
    // nothings
  }
  return null;
}

export default {
  getAuth,
  setAuth,
};
