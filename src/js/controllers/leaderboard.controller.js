export default function Leaderboard(UserService, $state){
    let vm = this;
    vm.logOut = logOut;

    init();
    function init(){
        if (UserService.isLoggedIn()){
        } else $state.go('root.login');
    }

    function logOut ( ) {
      UserService.logOut();
      $state.go('root.login');
    }
}
Leaderboard.$inject = ['UserService', '$state'];
