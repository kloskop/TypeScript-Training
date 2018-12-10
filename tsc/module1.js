"use strict";
var myNameSpace;
(function (myNameSpace) {
    myNameSpace.name = "Piotr";
    function displayData() {
        return "Hi, my name is Paweł.";
    }
    myNameSpace.displayData = displayData;
})(myNameSpace || (myNameSpace = {}));
