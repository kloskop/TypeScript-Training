class Building {

    windows!: string;
    escalators(){

        console.log("The escalators are moving");
   
    }
}

const building = new Building();

building.escalators();

class Building2 extends Building{

    escalators(){  //Overwriting the method
        console.log("The escalators are moving from building 2");
    }
}

const building2 = new Building2();

building2.escalators()

