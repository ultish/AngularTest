module test {
   export class Test {
   
      public fruit: string = "apple";
   
      
      
      public debug(msg: String): void {
         console.log("Test: " + msg);
      }

      public test(): void {
         this.debug("1234");
         if (true) {
            this.debug("hello");
         } 
     }
  }
}
