var controller;
(function (controller) {
    var MainController = (function () {
        function MainController() {
        }
        MainController.prototype.checkUser = function (user) {
            if (this.user == user) {
                return true;
            }
            else {
                return false;
            }
        };
        return MainController;
    })();
    controller.MainController = MainController;
})(controller || (controller = {}));
angular.module('test')
    .controller('MainController', controller.MainController);
