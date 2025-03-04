// 📌 JavaScript Data Types
// JavaScript has different types of data that can be stored in variables.  
// These are divided into two categories: Primitive and Non-Primitive (Reference) types.  

// --- 🟢 Primitive Data Types (Stored directly in memory) ---

// 1️⃣ String → Represents text, written inside quotes.
let name = "John Doe"; // Double quotes
let city = 'New York'; // Single quotes
let message = `Hello, ${name}!`; // Template literals (backticks)

// 2️⃣ Number → Represents integers and floating-point numbers.
let age = 30; // Integer
let price = 99.99; // Decimal number

// 3️⃣ Boolean → Represents either true or false.
let isLoggedIn = true;
let hasPermission = false;

// 4️⃣ Undefined → A variable that has been declared but not assigned a value.
let user; // This variable is undefined

// 5️⃣ Null → Represents an intentional absence of value.
let emptyValue = null; // This means "no value"

// 6️⃣ Symbol (ES6) → Represents a unique identifier.
let uniqueId = Symbol('id');

// 7️⃣ BigInt → Used for numbers larger than 2^53-1.
let bigNumber = 123456789012345678901234567890n; // Ends with 'n'

// --- 🔵 Non-Primitive (Reference) Data Types (Stored by reference) ---

// 1️⃣ Object → A collection of key-value pairs.
let userInfo = {
  name: "Alice",
  age: 25,
  city: "Paris"
};

// 2️⃣ Array → A list of values.
let colors = ["red", "green", "blue"];

// 3️⃣ Function → A reusable block of code.
function greet() {
  return "Hello, World!";
}

// --- 🔹 Checking Data Types using typeof() ---
console.log(typeof name); // "string"
console.log(typeof age); // "number"
console.log(typeof isLoggedIn); // "boolean"
console.log(typeof user); // "undefined"
console.log(typeof emptyValue); // "object" (Special case, it's actually null)
console.log(typeof uniqueId); // "symbol"
console.log(typeof bigNumber); // "bigint"
console.log(typeof userInfo); // "object"
console.log(typeof colors); // "object" (Arrays are special objects)
console.log(typeof greet); // "function"
