// 📌 Topic: Memory in JavaScript

/* 
    🔥 Types of Memory in JavaScript:
    1️⃣ **Stack Memory** - Used for Primitive Data Types.
    2️⃣ **Heap Memory** - Used for Non-Primitive (Reference) Data Types.
*/

console.log("Memory Lesson"); // Just a simple print statement

/* 
    📌 Stack Memory (Used for Primitive Data Types)
    
    ✅ What are Primitive Data Types?
    - String
    - Number
    - Null
    - Undefined
    - Boolean
    - Symbol
    - BigInt

    🔥 How does Stack Memory work?
    - Each variable gets a **copy** of the value.
    - Changes to one variable **do not** affect the original value.
*/

// Example of Stack Memory:
let name = "Muneeb"; // Stored in Stack Memory
console.log(name); 

// 📌 New Concept: Symbol (Introduced in ES6)
// - A unique and immutable primitive value.
let id = Symbol("123"); // Creating a Symbol
console.log(id); 
console.log(typeof id); // "symbol"

/* 
    📌 Heap Memory (Used for Non-Primitive Data Types)
    
    ✅ What are Non-Primitive (Reference) Data Types?
    - Arrays
    - Objects
    - Functions

    🔥 How does Heap Memory work?
    - Values are stored in memory, but **variables store only a reference (address)**.
    - Changes to one variable **affect the original data**.
*/

// Example of Heap Memory (Arrays)
let heros = ["Iron Man", "Thor", "Loki"]; // Stored in Heap Memory
console.log(heros[0]); // Accessing first element

// Example of Heap Memory (Objects)
let data = {
    mail: "userOne@mail.com",
    id: 4385
}; 

console.log(data.id); // Accessing object property

/* 
    📌 New Concept: Function in Heap Memory
    - Functions are also stored in Heap Memory.
*/

// Function stored in Heap Memory
function greet() {
    console.log("Hello, World!");
}

console.log(greet); // Prints the function reference, not execution