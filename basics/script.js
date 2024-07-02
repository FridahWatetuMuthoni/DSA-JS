class Animal{
    constructor(name,weight,color,breed){
        this.name = name
        this.weight = weight
        this.color = color 
        this.breed = breed
    }

    description(){
        let desc = `Name:${this.name}\nBreed:${this.breed}\nWeight:${this.weight}\nColor:${this.color}`
        return desc
    }
}

const cow = new Animal('cow',500,'black','fresha')
console.log(cow.description())


class Person{
    #firstname
    #lastname

    constructor(firstname,lastname){
        this.#firstname = firstname
        this.#lastname = lastname
    }

    get firstname(){
        return this.#firstname
    }

    get lastname(){
        return this.#lastname
    }

    set firstname(name){
        this.#firstname  = name
    }

    set lastname(name){
        this.#lastname = name
    }
}

const person_one = new Person('fridah','watetu')
person_one.firstname = 'jane'
console.log(person_one.firstname)
