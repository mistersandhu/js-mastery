// 📌 Type Conversion in JavaScript
// Type conversion means changing a value from one data type to another.
// We can convert numbers to strings, strings to numbers, and more.

// Example 1: Converting a Number to a String
let data = 4325; // A number type variable

console.log(data); // Output: 4325
console.log(typeof data); // Output: number

// 🔄 Converting the number to a string using String()
let changedData = String(data);

console.log(typeof changedData); // Output: string (data type changed)

// Example 2: Converting a String to a Number
let name = "Muneeb"; // A string type variable

console.log(name); // Output: Muneeb
console.log(typeof name); // Output: string

// 🔄 Converting the string to a number using Number()
let nameChanged = Number(name);

console.log(nameChanged); // Output: NaN (Not a Number)
// NaN means the conversion failed because "Muneeb" is not a valid number.

console.log(typeof nameChanged); // Output: number (Even though it's NaN, its type is still number)

// 📌 New Concepts Introduced:
// 1️⃣ **Type Conversion** → Changing data from one type to another.
// 2️⃣ **String()** → Converts a value into a string.
// 3️⃣ **Number()** → Converts a value into a number (if possible).
// 4️⃣ **NaN (Not a Number)** → Appears when a value cannot be converted into a valid number.
