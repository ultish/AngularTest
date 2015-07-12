module controller {
  export class MainController {
    public user: string;

    public checkUser(user: string): boolean {
      if (this.user == user) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}

angular.module('test')
.controller('MainController', controller.MainController)
