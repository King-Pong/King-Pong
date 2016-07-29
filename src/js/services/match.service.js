export default function Match ($cookies) {

    this.setMatches = setMatches;
    this.getMatches = getMatches;

    function setMatches(matches){
        this.matches = matches;
    }

    function getMatches(){
        return this.matches;
    }



  // function pushProducts (product) {
  //   let products = $cookies.getObject('products');
  //   if (products) {
  //     products.push(rebuildObj(product));
  //   } else {
  //     products = [rebuildObj(product)];
  //   }
  //   $cookies.putObject('products', products);
  // }
  //
  // function getProducts () {
  //   return $cookies.getObject('products');
  // }
  //
  // function rebuildObj (product) {
  //   return { name: product.data.name, price: product.data.price, id: product.id };
  // }
  //
  // function pairPlayers(player1, player2){
  //   return { player1: player1, player2: player2 };
  // }

}

Match.$inject = ['$cookies'];
