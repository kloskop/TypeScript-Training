//import Object = require("./module_external"); //older syntax

//import * as Object from "./module_external"; //newer syntax

import {name as myName, displayData} from "./module_external";

//console.log(Object.displayData("Cool!"))

console.log(displayData("Cool!"));
console.log(myName);