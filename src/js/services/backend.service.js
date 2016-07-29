export default function Backend (SERVER, $http, UserService) {

    this.createNewPlayer = createPlayer;
    this.getPlayers      = getPlayers;
    this.newTournament = newTournament;
    this.getTournament = getTournament;
    this.addContender = addContender;
    this.getMatches = getMatches;
    this.addPlayers = addPlayers;

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

    function addContender(tourneyID, playerID){
        return $http.post(SERVER.URL + 'tournaments/' + tourneyID + '/add-player', { player_id: playerID },
              UserService.headers());
    };

    function addPlayers(tourneyID, players){
        let promises = players.map(function (p) { addContender(tourneyID, p.id) });
        return Promise.all(promises);
    }

    function getMatches(tourneyID){
        return $http.post(SERVER.URL + 'tournaments/' + tourneyID + '/seed', {}, UserService.headers())
    }

}

Backend.$inject = ['SERVER', '$http', 'UserService'];
