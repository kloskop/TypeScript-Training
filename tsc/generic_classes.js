"use strict";
var array1 = [1, 21, 12431];
var array2 = [1, 23, 134];
var objectGenericClass = /** @class */ (function () {
    function objectGenericClass(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }
    return objectGenericClass;
}());
var object1 = new objectGenericClass("Hello!", "2");
var object2 = new objectGenericClass(2, "Text");
//let object3 = new objectGenericClass<boolean,number>(true,7)
