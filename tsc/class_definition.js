"use strict";
var Tree = /** @class */ (function () {
    function Tree(leaf) {
        this.leaf = leaf;
        this.leaf = leaf;
    }
    Tree.prototype.moveLeaf = function () {
        this.leaf = "green leaf";
        console.log("The " + this.leaf + " is moving to the right");
    };
    return Tree;
}());
var tree1 = new Tree("Green leaf");
tree1.moveLeaf();
console.log(tree1.leaf);
