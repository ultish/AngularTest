/// <reference path='../../typings/tsd.d.ts' />
var test;
(function (test) {
    var Test = (function () {
        function Test() {
            this.fruit = "apple";
        }
        Test.prototype.debug = function (msg) {
            console.log("Test: " + msg);
        };
        Test.prototype.test = function () {
            this.debug("1234");
            if (true) {
                this.debug("hello");
            }
        };
        return Test;
    })();
    test.Test = Test;
})(test || (test = {}));
angular.module('test', [])
    .controller('testController', test.Test);
