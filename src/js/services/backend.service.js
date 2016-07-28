function ProductService (SERVER, $http, UserService) {

  this.createProduct = createProduct;
  this.getProducts   = getProducts;

  function shopUrl () {
    let user = UserService.getUser();
    return SERVER.URL + user + '/' + SERVER.SHOP_NAME;
  }

  function createProduct (product) {
    return $http.post(shopUrl(), product, UserService.headers());
  }

  function getProducts () {
    return $http.get(shopUrl(), UserService.headers());
  }

}

ProductService.$inject = ['SERVER', '$http', 'UserService'];
export { ProductService };