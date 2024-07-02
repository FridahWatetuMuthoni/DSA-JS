class Queue{
    constructor(){
        this.collection = []
    }

    print(){
        console.log(this.collection)
    }

    is_empty(){
        return this.collection.length === 0
    }

    enqueue(element){
        this.collection.push(element)
    }

    dequeue(){
        if(this.is_empty()){
            return 'The Queue is Empty'
        }
        return this.collection.shift()
    }

    front(){
        return this.collection[0]
    }

    size(){
        return this.collection.length
    }
}

// let queque = new Queue()
// queque.enqueue(1)
// queque.enqueue(2)
// queque.enqueue(3)
// queque.enqueue(4)
// queque.enqueue(5)
// queque.enqueue(6)

// queque.print()
// console.log(queque.dequeue())
// queque.print()
// console.log(queque.front())
// console.log(queque.size())


class PriolityQueue{
    constructor(){
        this.collection = []
    }

    print(){
        console.log(this.collection)
    }

    is_empty(){
        return this.collection.length === 0
    }

    enqueue(element){
        if(this.is_empty()){
            this.collection.push(element)
        }
        else{
            let added = false
            for(let i=0; i < this.collection.length; i++){
                if(element[1] < this.collection[i][1]){
                    this.collection.splice(i,0,element)
                    added = true
                    break
                }
            }
            if(!added){
                this.collection.push(element)
            }
        }
    }

    dequeue(){
        if(this.is_empty()){
            return 'The Queue is Empty'
        }
        return this.collection.shift()
    }

    front(){
        return this.collection[0]
    }

    size(){
        return this.collection.length
    }
}

let pq = new PriolityQueue()
pq.enqueue(['Beau Carnes',2])
pq.enqueue(['Quincy Larson',3])
pq.enqueue(['Ewa Sandy',1])
pq.enqueue(['Briana Swift',2])
pq.print()
console.log(pq.front())
pq.dequeue()
pq.print()