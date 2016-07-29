export default function Tournament (MatchService, BackendService, UserService, $state){

    let vm = this;
    vm.logOff = logOff;
    vm.addPlayer = addPlayer;
    vm.createPlayer = createPlayer;
    vm.start = start;
    vm.players = [];
    vm.playerList = getPlayerList() || [];
    vm.setTourneySize = setSize;
    vm.playerResults = [];
    vm.validate = validatePlayer;

    function createPlayer(player){
        if (player.nickname = prompt("Please provide a player nickname:"))
            BackendService.createNewPlayer(player).then(resp => {
                console.log(resp, resp.data);
                vm.addPlayer(resp.data);
            }, err => { console.log(err); });
    }

    function validatePlayer(name){
        vm.playerResults = [];
        if (name = name.toLowerCase()) vm.playerList.forEach(p => {
            if (p.fullname.toLowerCase().includes(name) ||
            p.nickname.toLowerCase().includes(name))
                vm.playerResults.push(p);
        });
    }

    function addPlayer(player){
        if (typeof player == 'number'){
            player = vm.playerList.filter(p => p.id === player)[0];
        }
        vm.players.push(player);
        console.log(vm.players);
    }

     function start(){
         MatchService.newMatch(vm.players);
     }

     function logOff() {
       UserService.logOut();
       $state.go('root.login');
     }

     function getPlayerList(){
         BackendService.getPlayers().then(resp => {
             vm.playerList = resp.data.players;
             console.log(vm.playerList);
         });;
     }

     function setSize(size){
         vm.size = size;
     }
}
Tournament.$inject = ['MatchService', 'BackendService', 'UserService', '$state'];
