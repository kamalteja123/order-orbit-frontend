// TokenStorage.js

class StoreValue {
    constructor() {
      this.token = null;
      this.resttoken = null;
      this.rid = null;
      this.useremail = null;
      this.oid=null;
    }
  
    setOid(newOid)
    {
      this.oid=newOid;
    }
    getOid()
    {
      return this.oid;
    }
    setRestToken(newRestToken) {
      this.resttoken = newRestToken;
    }
  
    getRestToken() {
      return this.resttoken;
    }
  
    setUserEmail(newEmail) {
      this.useremail = newEmail;
    }
  
    getUserEmail() {
      return this.useremail;
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
  