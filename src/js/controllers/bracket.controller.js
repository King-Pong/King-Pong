export default function Bracket (BackendService, MatchService, $state, $stateParams){

  let vm = this;
  vm.logOut = logOut;
  vm.matches = [];

  init();
  function init(){
      BackendService.getMatches($stateParams.id).then(resp => {
          vm.matches = resp.data.matches;
          console.log(vm.matches);
      });
  }

  function logOut ( ) {
    UserService.logOut();
    $state.go('root.login');
  }
}
Bracket.$inject = ['BackendService', 'MatchService', '$state', '$stateParams'];
