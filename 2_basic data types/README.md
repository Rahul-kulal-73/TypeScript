# Basic data types
-primitiv types (number,string,boolean)
-Arrays
-Tuples
-Enums
-Any,Unknown,Void,Null,Undefined,Never


# ✅ Primitive vs Reference Types in JavaScript
## 🟦 Primitive Types
These store actual values directly.
Examples:
string → "hello"
number → 42
boolean → true or false
undefined, null, bigint, symbol

They are immutable and compared by value.

## 🟩 Reference Types
These store a reference (address) to the actual value in memory.
Examples:
Array → []
Object → {}
Function → () => {}

They are mutable and compared by reference.

example for refernce types:
```js
let a = [1, 2];
let b = a; // here we passing the address of a to b
b.push(3); 
console.log(a); // [1, 2, 3] → because both point to the same reference
```

In modern JavaScript development, use `let` and `const` instead of `var`

# Array
In TypeScript, arrays are used just like in JavaScript, but you can define the type of elements in the array.
`Basic Syntax`
```ts
let numbers: number[] = [1, 2, 3, 4];
let fruits: string[] = ["apple", "banana", "cherry"];
```
`Or using a generic type:`
```ts
let ids: Array<number> = [101, 102, 103];
```
## 📘 Tuples in TypeScript
A tuple is a fixed-length array with known types at each position.

It’s useful when you want to group different types together in a specific order.
 Basic Syntax
```ts
let person: [string, number] = ["Rahul", 25];
```
person[0] must be a string
person[1] must be a number

```ts
let user: [string, number?] = ["Alice"]; // number is optional
```


## enum
enum (short for enumeration) is a special type that lets you define a set of named constants — like fixed values with readable names.
```ts
enum Status {
  Success = "The operation completed successfully.",
  Failure = "The operation failed due to an error.",
  Loading = "The operation is currently in progress."
}

let st: Status = Status.Loading;
console.log(st); // Output: "The operation is currently in progress."
```
## any data type
we should avoid using `any` type whenever possible because it removes all type safety and defeats the purpose of using TypeScript.

```ts
let data: any;
data = "hello";
data = 5;
```
u can assign any value

```ts
let data: any;
data = "hello";        // string
data = 5;              // number
data.toUpperCase();    // ❗No error, but will crash at runtime (toUpperCase() is not on number)
```

#  Safer Way — Use `unknown`:
```ts
let data: unknown;
data = "hello";
data = 5;

// You must check the type before using it
if (typeof data === "string") {
  console.log(data.toUpperCase()); // ✅ Safe
}
```

### 🔍 Difference Between `any` and `unknown` in TypeScript

| Feature                                | `any`                  | `unknown`                                 |
| -------------------------------------- | ---------------------- | ----------------------------------------- |
| **Type safety**                        | ❌ No type safety       | ✅ Type-safe                               |
| **Can assign any value**              | ✅ Yes                  | ✅ Yes                                     |
| **Can access properties/methods directly** | ✅ Yes, no checks       | ❌ No, must do type checking first         |
| **Use case**                           | Quick fix, unsafe code | Safer version of `any`, needs type checks |



## void Data Type in TypeScript
```ts
function abcs(): void {
  console.log("hey");
}
```
When a function does not return any value, its return type should be marked as `void`.
This tells TypeScript that the function does not return anything.

## string,number,boolean
```ts
function getAge(): number {
  return 25;
}
//above will return number
function getName(): string {
  return "Rahul";
}
// above will return string

function isAdult(age: number): boolean {
  return age >= 18;
}
// above will return boolean
```

## null Data Type in TypeScript
`null` represents an intentional absence of any value.
```ts
let data: null = null;
```
Usually, you want a variable to be a type or null:
```ts
let name: string | null = null;
name = "Rahul";  // OK
name = null;     // OK
```

## undefined Data Type in TypeScript
`undefined` means a variable has been declared but not assigned a value yet.
```ts
let data: undefined = undefined;
```
This means data can only be undefined. It cannot have any other value.

Usually, you want a variable to be a type or `undefined`:
```ts
let age: number | undefined;

age = 25;         // OK
age = undefined;  // OK
```


## never Data Type in TypeScript
The `never` type represents values that never occur.
It is used for functions or expressions that never return or always throw an error.
```ts
function infiniteLoop(): never {
  while (true) {}
}
```