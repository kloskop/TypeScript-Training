class Tree {

    constructor(private leaf:string){

            this.leaf = leaf;

}

public moveLeaf(){

    this.leaf = "green leaf";
    console.log(`The ${this.leaf} is moving to the right`);

}

}

let tree1 = new Tree("Green leaf");

tree1.moveLeaf();