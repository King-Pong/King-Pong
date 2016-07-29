export default function Tournament (MatchService, BackendService, UserService, $state){

    let vm = this;
    vm.logOff = logOff;
    vm.addPlayer = addPlayer;
    vm.createPlayer = createPlayer;
    vm.start = start;
    vm.players = [];
    vm.playerList = getPlayerList() || [];

    function createPlayer(player){
        if (player.nickname = prompt("Please provide a player nickname:"))
            BackendService.createNewPlayer(player).then(resp => {
                console.log(resp, resp.data);
                vm.addPlayer(resp.data);
            }, err => { console.log(err); });
    }

    function validatePlayer(player){
        if (vm.playerList){
            vm.playerResults = [];
            vm.playerList.forEach(p => {
                if (p.fullname.toLowerCase().includes(player.fullname.toLowerCase()) ||
                p.nickname.toLowerCase().includes(player.fullname.toLowerCase()))
                    vm.playerResults.push(p);
            });
        }
    }

    function addPlayer(player){
        vm.players.push(player);
    }

     function start(){
         MatchService.newMatch(vm.players);
     }

     function logOff() {
       UserService.logOut();
       $state.go('root.login');
     }

     function getPlayerList(){
         return BackendService.getPlayers();
     }
}
Tournament.$inject = ['MatchService', 'BackendService', 'UserService', '$state'];
