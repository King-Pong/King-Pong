export default function Tournament (MatchService, BackendService, $state){

    let vm = this;
    vm.addPlayer = addPlayer;
    vm.createPlayer = createPlayer;
    vm.start = start;
    vm.players = [];

    function createPlayer(player){
        BackendService.createNewPlayer(player).then(resp => {
            vm.addPlayer(resp.data);
        });
    }

    function addPlayer(player){
        // collect two players for a match
          if (vm.player) { // if we have the first player
              vm.players.push(MatchService.pair(vm.player, player)); // pair the two players
              vm.player = null; // reset for the next pair
          } else vm.player = player; // if we don't have a pair set
    }

     function start(){
         MatchService.newMatch(vm.players);
     }

}
Tournament.$inject = ['MatchService', 'BackendService'];
