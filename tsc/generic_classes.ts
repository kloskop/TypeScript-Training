let array1: number[] = [1,21,12431];

let array2: Array<number> = [1,23,134];

class objectGenericClass<TYPE1, TYPE2 extends string>{

    constructor(public value1: TYPE1, public value2: TYPE2){

        }

}

let object1 = new objectGenericClass<string,string>("Hello!","2")
let object2 = new objectGenericClass(2, "Text");
//let object3 = new objectGenericClass<boolean,number>(true,7)
