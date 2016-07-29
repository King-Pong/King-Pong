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
    vm.gameReady = false;
    vm.start = startTournament;

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
        if (typeof player == 'number')
            player = vm.playerList.filter(p => p.id === player)[0];
        if (vm.players.length < vm.size) vm.players.push(player);
        if (vm.size === vm.players.length){
            vm.gameReady = true;
        }
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

     function startTournament(){
         if (vm.name){
             let options = {
                 title: vm.name,
                 size: vm.size
             };
             console.log(options);
             BackendService.newTournament(options).then(resp => {
                 console.log(resp);
                 $state.go('root.bracket');
             });
         } else alert("Please enter a tournament name.");
     }
}
Tournament.$inject = ['MatchService', 'BackendService', 'UserService', '$state'];
