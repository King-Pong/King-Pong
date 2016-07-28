export default function Layout (UserService, $rootScope, CartService) {

  let vm = this;
  vm.logOut = logOut;
  vm.loggedIn = false;
  vm.cartCount = 0;
  vm.cartTotal = 0;

  init();

  $rootScope.$on('loginChange', (event, status) => {
    vm.loggedIn = status;
  });

  $rootScope.$on('cartChange', (event, product) => {
    vm.cartCount ++;
    vm.cartTotal += Number(product.data.price);
  });

  function init () {

    vm.loggedIn = UserService.isLoggedIn();

    let products = CartService.getProducts();
    if (products) {
      products.forEach( product => {
        vm.cartCount ++;
        vm.cartTotal += Number(product.price);
      });
    }

  }

  function logOut () {
    UserService.logOut();
    vm.loggedIn = false;
  }

}

Layout.$inject = ['UserService', '$rootScope', 'CartService'];
