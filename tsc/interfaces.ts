interface AutomobileInterface{

    brand?: string;  //adding ? makes the parameter optional
    speed?: number;
    speedMethod?(predkosc: number): void

}

interface AutomobileInterface2 extends AutomobileInterface{

    brand: string;
    speed: number;

}

const automobile2: AutomobileInterface2 ={


    brand: "Porsche",
    speed: 250,
    speedMethod(){
    console.log(`this ${this.brand} is going at ${this.speed} miles an hour`);
    }
    };



const automobile: AutomobileInterface ={
    brand: "BMW",
    speed: 200,
    speedMethod(){
        console.log(`this ${this.brand} is going at ${this.speed} miles an hour`);
}
};

function car1(automobile: AutomobileInterface){

    automobile.speed = 300;

    console.log(`this ${automobile.brand} is going at ${automobile.speed} miles an hour`);

}

//car1(automobile);

class AutoMobileClass implements AutomobileInterface {

    brand!:string;
    speed!:number;

    speedMethod(speed:any){
        console.log(`My car is going at: ${speed}`);
    }

}

let carObject = new AutoMobileClass();

carObject.speedMethod(1000);