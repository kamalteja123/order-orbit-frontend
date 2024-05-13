// TokenStorage.js

class StoreValue {
    constructor() {
      this.token = null;
      this.rid = null;
    }
  
    setRid(newRid) {
      this.rid = newRid;
    }
  
    getRid() {
      return this.rid;
    }
  
    setToken(newToken) {
      console.log("token:"+newToken)
      this.token = newToken;
    }
  
    getToken() {
        console.log("token:"+this.token)
      return "token:"+this.token;
    }
  }
  
  export default new StoreValue();
  