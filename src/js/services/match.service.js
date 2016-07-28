function CartService ($cookies) {

  this.pushProducts = pushProducts;
  this.getProducts  = getProducts;


  function pushProducts (product) {
    let products = $cookies.getObject('products');
    if (products) {
      products.push(rebuildObj(product));
    } else {
      products = [rebuildObj(product)];
    }
    $cookies.putObject('products', products);
  }

  function getProducts () {
    return $cookies.getObject('products');
  }

  function rebuildObj (product) {
    return { name: product.data.name, price: product.data.price, id: product.id };
  }

}

CartService.$inject = ['$cookies'];
export { CartService };