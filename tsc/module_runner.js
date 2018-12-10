"use strict";
//import Object = require("./module_external"); //older syntax
Object.defineProperty(exports, "__esModule", { value: true });
//import * as Object from "./module_external"; //newer syntax
var module_external_1 = require("./module_external");
//console.log(Object.displayData("Cool!"))
console.log(module_external_1.displayData("Cool!"));
console.log(module_external_1.name);
