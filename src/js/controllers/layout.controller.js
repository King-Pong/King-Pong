export default function Layout (UserService, $rootScope) {

  let vm = this;
  vm.logOut = logOut;
  vm.loggedIn = false;
  vm.cartCount = 0;
  vm.cartTotal = 0;

  init();

  $rootScope.$on('loginChange', (event, status) => {
     vm.loggedIn = status;
  });

  function init () {
    vm.loggedIn = UserService.isLoggedIn();
  }

  function logOut () {
    UserService.logOut();
    vm.loggedIn = false;
  }

}

Layout.$inject = ['UserService', '$rootScope'];
