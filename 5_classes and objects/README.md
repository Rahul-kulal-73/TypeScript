## 1. Class 
A class defines properties and methods that objects can use.
```ts
class Person {
  name: string;
  age: number;

  // 🔷 Constructor is a special method that runs when the object is created
  constructor(name: string, age: number=0) {  //here I made age default value as 0
    this.name = name;
    this.age = age;
  }

  // 🔷 Method
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
```
## 🔷 2. Object 
You create an object using the new keyword:

```ts
const person1 = new Person("Rahul", 20);
person1.greet();  // Output: Hello, my name is Rahul
```

`You can also write the above code in short`
```ts
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
```

In TypeScript, when you write:
```ts
constructor(public name: string, public age: number)
```
- TypeScript automatically declares and assigns this.name and this.age,
- so there's no need to manually write:

```ts
this.name = name;
this.age = age;
```
## In TypeScript, you can call another method from within a method using `this`:
```ts
class Person {
  constructor(public name: string) {}

  greet() {
    console.log(`Hello, I am ${this.name}`);
    this.sayBye(); // 🔸 calling another method using 'this'
  }

  sayBye() {
    console.log("Goodbye!");
  }
} ```
✅ Use this.methodName() to call another method inside the same class.




