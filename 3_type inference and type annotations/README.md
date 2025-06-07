# Type Inference
TypeScript automatically figures out the type of a variable based on the value you assign.
```ts
let age = 25; // TypeScript infers 'age' is a number
```
Here, TypeScript knows age is a number because of the assigned value 25.

# Type Annotation
You explicitly tell TypeScript the type of a variable by writing it yourself.
```ts
let name: string;  // Here 'name' is explicitly annotated as a string
name = "Rahul";
```
```ts 
let a: string | boolean | number;
a = "hello";   // valid (string)
a = 42;        // valid (number)
a = true;      // valid (boolean)
a = null;      // error, null not allowed here
```
- This means variable a can hold a value that is either a string, a boolean, or a number.
- You can assign any of these types to a, but only those three.

