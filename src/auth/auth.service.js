_authService.$inject = ['$transitions', "$q", "$http", "API_ENDPOINT"];

function _authService($transitions, $q, $http, API_ENDPOINT) {

  let token;
  function saveToken(token) {
    localStorage.setItem('mtoken', token);
    token = token;
  }

  function getToken() {
    if (!token) {
      token = localStorage.getItem('mtoken');
    }
    return token;
  }

  function logout() {
    console.log("Logout")
    token = '';
    window.localStorage.removeItem('mtoken');
  }

  function getUserDetails() {
    const token = getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  function isLoggedIn() {
    const user = getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  async function request(credentials){
    try {
      let auth = await login(credentials);
      console.log("Auth", auth.data)
      if(auth.data.success === true){
        saveToken(auth.data.token);
      } else {
        console.log("Njt")
      }
    } catch (err) {
      console.log(err);
    };
  }

  function login(user) {
    return $http.post(
      "http://" + API_ENDPOINT.url + "/api/authenticate",
      user
    );
  }

  return {
    request: request,
    login: login,
    logout: logout,
    isLoggedIn: isLoggedIn
  };

  /*
  return {
    login: (credentials) => {
      return $http.post(
        "http://" + API_ENDPOINT.url + "/api/authenticate",
        credentials
      );
    }
  };
 */

};

export default _authService
  
