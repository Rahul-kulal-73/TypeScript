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
