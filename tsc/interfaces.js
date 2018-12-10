"use strict";
var automobile2 = {
    brand: "Porsche",
    speed: 250,
    speedMethod: function () {
        console.log("this " + this.brand + " is going at " + this.speed + " miles an hour");
    }
};
var automobile = {
    brand: "BMW",
    speed: 200,
    speedMethod: function () {
        console.log("this " + this.brand + " is going at " + this.speed + " miles an hour");
    }
};
function car1(automobile) {
    automobile.speed = 300;
    console.log("this " + automobile.brand + " is going at " + automobile.speed + " miles an hour");
}
//car1(automobile);
var AutoMobileClass = /** @class */ (function () {
    function AutoMobileClass() {
    }
    AutoMobileClass.prototype.speedMethod = function (speed) {
        console.log("My car is going at: " + speed);
    };
    return AutoMobileClass;
}());
var carObject = new AutoMobileClass();
carObject.speedMethod(1000);
