// using the list data structure to create a stack data structure
function palindrome_checker(word){
    let letters = []
    let rword = ""

    //put the letters into a stack
     for(let i = 0; i < word.length; i++){
        letters.push(word[i])
     }

     //popping of the stack in reverse order
     for(let i = 0; i < word.length; i++){
        rword += letters.pop()
     }

     if(rword === word){
        console.log(`${word} is a palindrome`)
     }
     else{
        console.log(`${word} is not a palindrome`)
     }
}
palindrome_checker('jane') // O(n) time complexity

// using classes to create a stack data structure

class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return 'underflow'
        }
        return this.items.pop()
    }

    peek(){
        if(this.isEmpty()){
            return "No items in the stack"
        }
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.items.length === 0
    }

    printStack(){
        let str = ""
        for(let i = 0; i < this.items.length; i++){
            str += this.items[i] + " "
        }
        return str.trim()
    }
}

let stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
console.log(stack.printStack())
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.printStack())

// Stack implementation using linked lists

