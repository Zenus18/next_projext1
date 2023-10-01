export default class AuthModel {
  constructor() {
    this.access_token = null;
    this.token_type = null;
  }

  setAuthTokens(access_token, token_type) {
    this.access_token = access_token;
    this.token_type = token_type;
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("token_type", token_type);
  }

  isAuthenticated() {
    return !!localStorage.getItem("access_token");
  }

  clearAuthTokens() {
    this.access_token = null;
    this.token_type = null;
    localStorage.removeItem("access_token");
    localStorage.removeItem("token_type");
  }
}
