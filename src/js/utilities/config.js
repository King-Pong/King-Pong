export default function config($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html',
      controller: 'LayoutController as vm'
    })

    // States pertaining to the store
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'ListController as vm'
    })
    .state('root.login', {
        url: '/login',
        templateUrl: 'templates/login.tpl.html',
        controller: 'LoginController as vm'
    })
    .state('root.tourney', {
      url: '/cart',
      templateUrl: 'templates/cart.tpl.html',
      controller: 'CartController as vm'
    })

    // States pertaining to users
    .state('root.bracket', {
      url: '/register',
      templateUrl: 'templates/register.tpl.html',
      controller: 'RegisterController as vm'
    })

  $urlRouterProvider.otherwise('/');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
