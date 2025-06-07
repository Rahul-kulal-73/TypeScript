## Interface in TypeScript
- An interface defines a structure (shape) of an object.
- It specifies what properties and methods an object should have, along with their types.
```ts
interface User{
    name:string,
    email:string,
    password:string
}
function getDataOfUser(obj:User):void{
console.log(obj.name+" "+obj.email+" "+obj.password);
}
getDataOfUser({name:"rahul",email:"email@gmail.com",password:"asdsf"})
```
- The User interface defines the structure that the object obj must follow.
- The function getDataOfUser accepts an argument of type User.
- If you call getDataOfUser() `without any argument`, TypeScript will give you an `error` because it expects an object that matches the User interface.


## The ? in TypeScript means optional.
```ts
interface Product {
  name: string;
  price?: number;  // price is optional
}

function showProduct(product: Product) {
  if (product.price !== undefined) {
    console.log(`${product.name} costs $${product.price}`);
  } else {
    console.log(`${product.name} price is not available`);
  }
}

showProduct({ name: "Shoes", price: 50 }); // Shoes costs $50
showProduct({ name: "Hat" });               // Hat price is not available
```

## Extending Interface in TypeScript
- You can create a new interface by extending an existing one.
- The new interface inherits all properties from the original interface and can add new properties.
```ts
interface User {
  name: string;
  email: string;
  password: string;
}

interface Admin extends User {
  admin: boolean;
}

function getDataOfUser(obj: User): void {
  console.log(obj.name + " " + obj.email + " " + obj.password);
}

function abcd(obj: Admin): void {
  console.log(obj.name + " is an admin: " + obj.admin);
}

// Example usage:
const user: User = { name: "Rahul", email: "rahul@example.com", password: "12345" };
const admin: Admin = { name: "Anita", email: "anita@example.com", password: "abcde", admin: true };

getDataOfUser(user);
abcd(admin);
```

In TypeScript, when two interfaces have the same name, they are automatically merged (this is called declaration merging).
They do not overwrite each other — instead, their members are combined into a single interface. So, you can access both `name` and `phoneNumber`.
```ts
interface abcd {
  name: string;
}

interface abcd {
  phoneNumber: string;
}

// Function that accepts the merged interface
function printDetails(person: abcd): void {
  console.log("Name:", person.name);
  console.log("Phone Number:", person.phoneNumber);
}

// Call the function with an object
printDetails({ name: "Rahul", phoneNumber: "1234567890" });
```


## type in TypeScript
- In TypeScript, type is a keyword used to create a custom alias (a shortcut name) for a type or group of types.
- It's similar to an interface, but more flexible.

```ts
// example 1
type sankya = number;
let a: sankya; // 'sankya' is just another name for 'number'


// example 2
type value=string | number | null;
let b: value;
b = "hello";
b = 42;
b = null;


// example 3 (used in function)
type arg=string | null; // here we used union `|`
function abcd(obj:arg){

}
abcd("rahul");

```

## Intersections Types

- Intersection types allow you to combine multiple types into one.
- It means the new type will have all properties from the combined types.

🔷 Example:
```ts
type User = {
    name: string;
    email: string;
};

type Admin = User & {
    getDetails(user: string): void;
};
```
- Now, Admin includes:
- name from User
- email from User
- getDetails() function


## 🔴 Unlike interface, two type declarations cannot have the same name.
```ts
type abcd = number;
type abcd = string; // ❌ Error: Duplicate identifier 'abcd'
```
- This will throw an error because TypeScript does not allow multiple type aliases with the same name.











