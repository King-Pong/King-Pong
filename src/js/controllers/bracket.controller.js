export default function Bracket (UserService, $state){

  let vm = this;
  vm.logOut = logOut;

  function logOut ( ) {
    UserService.logOut();
    $state.go('root.login');
  }
}
Bracket.$inject = ['UserService', '$state'];
