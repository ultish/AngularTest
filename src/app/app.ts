
module test {
   export class Test {

      public fruit: string = "apple";

      public debug(msg: String): void {
         console.log("Test: " + msg);
      }

      public test(): void { 
         this.debug("12344676");
         if (true) {
            this.debug("hello");
         }
     }
  }
}

angular.module('test', [])
.controller('testController', test.Test);
