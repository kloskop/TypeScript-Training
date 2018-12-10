"use strict";
var myNameSpace;
(function (myNameSpace) {
    myNameSpace.name = "Piotr";
    function displayData(value) {
        return value;
    }
    myNameSpace.displayData = displayData;
})(myNameSpace || (myNameSpace = {}));
