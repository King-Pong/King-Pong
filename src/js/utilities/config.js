export default function config($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.template.htm',
      controller: 'LayoutController as vm'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.template.htm',
      controller: 'LeaderboardController as vm'
    })
    .state('root.login', {
        url: '/login',
        templateUrl: 'templates/login.template.htm',
        controller: 'SignUpController as vm'
    })
    .state('root.tourney', {
      url: '/tourney',
      templateUrl: 'templates/tournament.template.htm',
      controller: 'TournamentController as vm'
    })
    .state('root.bracket', {
      url: '/bracket/:id',
      templateUrl: 'templates/bracket.template.htm',
      controller: 'BracketController as vm'
    })

  $urlRouterProvider.otherwise('/');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
