class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(data){
        this.root = new Node(data)
        this.count = 1
    }

    size(){
        return this.count
    }

    insert(data){
        this.count++
        let new_node = new Node(data)
        const searchTree = node =>{
            //if data < node.data go left
            if(data < node.data){
                // if node.left is empty you add the new node there
                if(node.left == null){
                    node.left = new_node
                }
                // if node.left is not empty you call searchTree function with node.left
                else{
                    searchTree(node.left)
                }
            }
            
            //if data > node.data go right
            else if(data > node.data){
                //if node.right is empty you append the node
                if(node.right == null){
                    node.right = new_node
                }
                //if node.right is not empty you call searchTree function with node.right
                else{
                    searchTree(node.right)
                }
            }
        }
        searchTree(this.root)
    }

    min(){
        let current = this.root
        while(current.left !== null){
            current = current.left
        }
        return current.data
    }
    
    max(){
        let current = this.root
        while(current.right != null){
            current  = current.right
        }
        return current.data
    }

    contains(data){
        let current = this.root
        while(current){
            if(data === current.data){
                return true
            }
            if(data > current.data){
                current = current.right
            }
            else{
                current = current.left
            }
        }
        return false
    }

    //DEPTH FIRST SEARCH => branch by branch

    // in-order: left->root->left ---> 2,3,12,15,28,36,39
    dfsinorder(){
        let results = []

        const traverse = node =>{
            //if a left node exists go left again
            if(node.left){
                traverse(node.left)
            }
            //capture root node value
            results.push(node.data)
            if(node.right){
                traverse(node.right)
            }
        }

        traverse(this.root)

        return results
    }

    // pre-order:root->left->right ---> 15,3,2,12,36,28,39
    dfspreorder(){
        let results = []
        const traverse = node =>{
            //capture the root value
            results.push(node.data)
            //if left go left again
            if(node.left){
                traverse(node.left)
            }
            //if right go right again
            if(node.right){
                traverse(node.right)
            }
        }
        traverse(this.root)
        return results
    }

    // post-order:left->right->root ---> 2,12,3,28,39,36,15
    dfspostOrder(){
        let results = []

        const traverse = node=>{
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }
            results.push(node.data)
        }
        traverse(this.root)
        return results
    }

    //BREADTH FIRST SEARCH => level by level => use a queue
    
    bf(){
        let results = []
        let queue = []
        queue.push(this.root)

        while(queue.length > 0){
            let currentNode = queue.shift()
            results.push(currentNode.data)
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
        return results
    }

}


const bst = new BST(15) // intializing the bst with a root of 15
bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

//console.log(bst)
console.log(bst.size())
console.log(bst.min())
console.log(bst.max())
console.log(bst.contains(2))
// in-order: left->root->left ---> 2,3,12,15,28,36,39
console.log(bst.dfsinorder())
// post-order:left->right->root ---> 2,12,3,28,39,36,15
console.log(bst.dfspostOrder())
// pre-order:root->left->right ---> 15,3,2,12,36,28,39
console.log(bst.dfspreorder())
console.log(bst.bf())
