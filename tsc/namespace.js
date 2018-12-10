var myNameSpace;
(function (myNameSpace) {
    myNameSpace.name = "Piotr";
    function displayData() {
        return "Hi, my name is Paweł.";
    }
    myNameSpace.displayData = displayData;
})(myNameSpace || (myNameSpace = {}));
///<reference path="module1.ts"/>
console.log(myNameSpace.displayData());
console.log(myNameSpace.name);
