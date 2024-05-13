// TokenStorage.js

class StoreToken {
    constructor() {
      this.value = null;
    }
  
    setToken(newToken) {
      this.value = newToken;
    }
  
    getToken() {
      return this.value;
    }
  }
  
  export default new StoreToken();
  