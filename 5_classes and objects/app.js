var Person = /** @class */ (function () {
    // 🔷 Constructor automatically creates and assigns properties
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // 🔷 Method: greet the user
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
// 🔷 Create an object (instance of the class)
var person1 = new Person("Rahul", 20);
// 🔷 Call the method
person1.greet(); // Output: Hello, my name is Rahul and I am 20 years old.
