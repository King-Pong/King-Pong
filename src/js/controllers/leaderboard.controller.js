export default function Leaderboard(UserService, $state){

    init();
    function init(){
        if (UserService.isLoggedIn()){

        } else $state.go('root.login');
    }

}
Leaderboard.$inject = ['UserService', '$state'];
