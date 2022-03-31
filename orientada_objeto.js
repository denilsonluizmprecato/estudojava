
class Person {
    constructor (firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // metodo dentro da classe
    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }

    // metodo estatico
    // usado chamando a classe e nao o objeto
    // nao depende dos parametros do objeto
    static speak(){
        console.log('Speak');
    }
}

const person = new Person('Fulano', 'ciclano', 23);
//console.log(person);

//person.getFullName();
// chamando o metodo estatico
//Person.speak();

// HERANCA
// classe mae
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} made some noise!`);
    }
}

// classe filha
class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    // assim o metodo eh sobre-escrito
    speak() {
        console.log(`Dog ${this.name} barked!`);
    }   
}

const animal = new Animal("Simba");
const dog = new Dog("Rex");

animal.speak();
dog.speak();