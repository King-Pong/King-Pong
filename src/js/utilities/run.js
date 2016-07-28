function run ($rootScope, UserService) {

  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    $rootScope.$broadcast('loginChange', UserService.isLoggedIn());
  });

}

run.$inject = ['$rootScope', 'UserService'];
export { run };