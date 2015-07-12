angular.module('test', []).controller('testController', function() {

   this.fruit = "test";

   this.setFruit = function(_fruit) {
      this.fruit = _fruit;
   }

});