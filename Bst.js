class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
class BinaryTree 
{
    constructor() 
	{
        this.root = null;
    }

    insert(value) {
    insert(value) 
	{
        const newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
@@ -35,6 +38,28 @@ class BinaryTree {
                }
            }
        }
    }
	search(value) 
	{
        let currentNode = this.root;

        while (currentNode) 
		{
            if (currentNode.value == value)
                console.log(currentNode.value);

            if (value < currentNode.value) 
			{
                currentNode = currentNode.left;
            } else 
			{
                currentNode = currentNode.right;
            }


        }


    }
}

@@ -43,8 +68,7 @@ tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(10)
tree.insert(15)
tree.insert(1)

console.log(tree) 
tree.search(6)
