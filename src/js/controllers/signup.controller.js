export default function SignUp (UserService, $state, $cookies) {

  let vm = this;
  vm.createUser = createUser;
  vm.loginUser = loginUser;
  vm.show_login = true;
  vm.toggleSignUpScreen = toggleSignUpScreen;

  function createUser (user) {
      UserService.signup(user).then(resp => {
          vm.show_login = true;
          user.username = resp.data.username;
      });
  }

    function loginUser (user) {
        UserService.login(user).then(
            // Successful Response
            resp => {
                $cookies.put('access_token', resp.data.access_token);
                $cookies.put('username', resp.data.username);
                $state.go('root.home');
            },
            // Error Response (Client Error)
            error => {
                console.log(error.data.errors);
            }
        );
    }

    function toggleSignUpScreen(){
        vm.show_login = !vm.show_login;
    }

}

SignUp.$inject = ['UserService', '$state'];
