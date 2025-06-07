class Person {
  // 🔷 Constructor automatically creates and assigns properties
  constructor(public name: string, public age: number) {}

  // 🔷 Method: greet the user
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// 🔷 Create an object (instance of the class)
const person1 = new Person("Rahul", 20);

// 🔷 Call the method
person1.greet(); // Output: Hello, my name is Rahul and I am 20 years old.
