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

    is_empty(){
        return this.size === 0
    }

    max(){
        let current = this.root

        while(current.right != null){
            current = current.right
        }
        return current.data
    }

    min(){
        let current = this.root

        while(current.left){
            current = current.left
        }
        return current.data
    }

    contains(data){
        const traverse = node =>{
            console.log(node)
            if(data === node.data){
                return true
            }
            if(data > node.data){
                traverse(node.right)
            }
            else{
                traverse(node.left)
            }
        }

        traverse(this.root)
        return false
    }

    insert(data){
        this.count++
        let new_node = new Node(data)

        const traverse = node=>{
            if(data > node.data){
                if(node.right == null){
                    node.right = new_node
                }
                else{
                    traverse(node.right)
                }
            }
            else if (data < node.data){
                if(node.left == null){
                    node.left = new_node
                }
                else{
                    traverse(node.left)
                }
            }
        }

        traverse(this.root)
    }

    //Breath First
    bf(){
        let queue  = []
        let results = []

        queue.push(this.root)

        while(queue.length){
            let current_node = queue.shift()
            results.push(current_node.data)
            if(current_node.left){
                queue.push(current_node.left)
            }
            if(current_node.right){
                queue.push(current_node.right)
            }
        }
        return results
    }

    // Depth First => 0(n)

    //LROOTR
    inorderDF(){
        let results = []

        let traverse = node=>{
            if(node.left){
                traverse(node.left)
            }
            results.push(node.data)
            if(node.right){
                traverse(node.right)
            }
        }
        traverse(this.root)
        return results
    }

    //ROOTLF
    preorderDF(){
        let results = []

        let traverse = node=>{
            results.push(node.data)

            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }
        }
        traverse(this.root)
        return results
    }

    //LFROOT
    postorderDF(){
        let results = []

        let traverse = node=>{

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
}

const bst = new BST(15) // intializing the bst with a root of 15
bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

console.log(bst)
console.log(bst.size())
console.log(bst.min())
console.log(bst.max())
console.log(bst.contains(2))
// in-order: left->root->left ---> 2,3,12,15,28,36,39
console.log(bst.inorderDF())
// post-order:left->right->root ---> 2,12,3,28,39,36,15
console.log(bst.postorderDF())
// pre-order:root->left->right ---> 15,3,2,12,36,28,39
console.log(bst.preorderDF())
console.log(bst.bf())



function df(root){
    let results = []
    let stack = [] //last in first out add=> push remove=>pop
    if(root === null){
        return []
    }
    stack.push(root)
    while(stack.length > 0){
        let current_node = stack.pop()

        results.push(current_node.data)

        if(current_node.right){
            stack.push(current_node.right)
        }

        if(current_node.left){
            stack.push(current_node.left)
        }

}
return results

}

function df_recur(root){
    if(root === null){
        return []
    }
    const left = df_recur(root.left)
    const right = df_recur(root.right)
    return [root.data, ...left,...right]
}

function bf(root){
    let results = []
    let queue = []
    if(root === null){
        return []
    }
    queue.push(root)
    while(queue.length){
        let current_node = queue.shift()
        results.push(current_node.data)
        if(current_node.left){
            queue.push(current_node.left)
        }
        if(current_node.right){
            queue.push(current_node.right)
        }
    }
    return results
}


const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')
a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

// console.log(df(a))
// console.log(df_recur(a))
console.log(bf(a))
