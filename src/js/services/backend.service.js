export default function Backend (SERVER, $http, UserService) {

  this.createNewPlayer = createPlayer;
  this.getPlayers   = getPlayers;

  function userUrl() {
    let user = UserService.getUser();
    return SERVER.URL + user + '/';
  }

    function createPlayer (player) {
        return $http.post(userUrl() + 'players/', player, UserService.headers());
    }


  function getPlayers () {
    return $http.get(userUrl() + 'players', UserService.headers());
  }

}

Backend.$inject = ['SERVER', '$http', 'UserService'];
