export default function Backend (SERVER, $http, UserService) {

    this.createNewPlayer = createPlayer;
    this.getPlayers      = getPlayers;
    this.newTournament = newTournament;
    this.getTournament = getTournament;

    function userUrl() {
        let user = UserService.getUser();
        return SERVER.URL + user + '/';
    }

    function createPlayer(player) {
        return $http.post(SERVER.URL + 'players', player, UserService.headers());
    }

    function getPlayers(){
        return $http.get(SERVER.URL + 'players', UserService.headers());
    }

    function newTournament(options){
        return $http.post(SERVER.URL + 'tournaments', options, UserService.headers());
    }

    function getTournament(options){
        return $http.post(SERVER.URL + 'tournaments', options, UserService.headers());
    }

}

Backend.$inject = ['SERVER', '$http', 'UserService'];
