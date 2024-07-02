function mySet(){
    this.collection = []

    //checking if the element if in the collection
    this.has = function(element){
        return this.collection.indexOf(element) !== -1
    }

    this.values = function(){
        return this.collection
    }

    this.add = function(element){
        //if the element is already in the collection return false
        if(this.has(element)){
            return false
        }
        this.collection.push(element)
        return true
    }

    this.remove = function(element){
        if(this.has(element)){
            let index = this.collection.indexOf(element)
            this.collection.splice(index,1)
            return true

        }
        return false
    }

    this.size = function(){
        return this.collection.length
    }

    this.union = function(otherSet){
        let unionSet = new mySet()
        let first_set = this.values()
        let second_set = otherSet.values()

        first_set.forEach(element => unionSet.add(element))
        second_set.forEach(element=> unionSet.add(element))
        return unionSet
    }

    this.intersect = function(otherSet){
        let intersectionSet = new mySet()
        let first_set = this.values()

        first_set.forEach(element=>{
            if(otherSet.has(element)){
                intersectionSet.add(element)
            }
        })

        return intersectionSet
    }


    this.difference = function(otherSet){
        let difference_set = new mySet()
        let first_set = this.values()

        first_set.forEach((element)=>{
            if(!otherSet.has(element)){
                difference_set.add(element)
            }
        })
        return difference_set
    }

    this.symmetric_difference = function(otherSet){
        let symmetric_difference_set = new mySet()
        let first_set = this.values()
        let second_set = otherSet.values()

        first_set.forEach((element)=>{
            if(this.has(element) && !otherSet.has(element)){
                symmetric_difference_set.add(element)
            }
        })

        second_set.forEach((element)=>{
            if(!this.has(element) && otherSet.has(element)){
                symmetric_difference_set.add(element)
            }
        })

        return symmetric_difference_set
    }

    this.subset = function(otherSet){
        let first_set = this.values()
        //checking if all the items in the first set are in the second set
        return first_set.every((value)=>{
            return otherSet.has(value)
        })
    }


}

let setA = new mySet()
let setB = new mySet()

setA.add('data')
setA.add('structure')
setB.add('python')
setB.add('java')
setB.add('c')
setB.add('data')

console.log(setA.union(setB).values())
console.log(setA.intersect(setB).values())
console.log(setA.difference(setB).values())
console.log(setA.symmetric_difference(setB).values())
console.log(setA.subset(setB))