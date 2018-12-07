"use strict";
/*
function stringFunction():string{

    console.log("HELLO I'm a string");
}
*/
function cal(val1, val2) {
    var total = val1 + val2;
    return total;
}
cal(2, 2);
var universal;
universal = cal;
console.log(universal(3, 2));
