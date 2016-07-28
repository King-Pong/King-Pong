function UserService (SERVER, $http, $cookies) {

  this.signup     = signup;
  this.login      = login;
  this.headers    = headers;
  this.getUser    = getUser;
  this.logOut     = logOut;
  this.isLoggedIn = isLoggedIn;

  function signup (user) {
    return $http.post(SERVER.URL + 'signup', user);
  }

  function login (user) {
    return $http.post(SERVER.URL + 'login', user);
  }

  function headers () {
    let authToken = $cookies.get('access_token');
    return { headers: { 'Access-Token': authToken }};
  }

  function getUser () {
    return $cookies.get('username');
  }

  function logOut () {
    $cookies.remove('access_token');
    $cookies.remove('username');
    console.log('Logged out!');
  }

  function isLoggedIn () {
    return (this.getUser()) ? true : false;
  }

}

UserService.$inject = ['SERVER', '$http', '$cookies'];
export { UserService };