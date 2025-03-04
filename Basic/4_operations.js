// 📌 Arithmetic Operations in JavaScript  
// JavaScript supports basic arithmetic operations like addition, subtraction, multiplication, division, exponentiation, and modulus.

// Practice 1: Basic Arithmetic Operations
let num1 = 32;
let num2 = 16;

console.log(num1 + num2); // Addition ➝ 32 + 16 = 48
console.log(num1 - num2); // Subtraction ➝ 32 - 16 = 16
console.log(num1 * num2); // Multiplication ➝ 32 * 16 = 512
console.log(num1 / num2); // Division ➝ 32 / 16 = 2
console.log(num1 ** num2); // Exponentiation ➝ 32^16 (32 raised to the power 16)
console.log(num1 % num2); // Modulus ➝ Remainder of 32 / 16 = 0

// 📌 New Concept: Exponentiation (**)
// Exponentiation (`**`) is used to calculate the power of a number.
// Example: `2 ** 3` means "2 raised to the power of 3" (2 * 2 * 2 = 8).

// Practice 2: Type Coercion in JavaScript  
console.log(1 + "2"); // Output: "12" ➝ Number + String → String
console.log("1" + 2); // Output: "12" ➝ String + Number → String
console.log("1" + 2 + 2); // Output: "122" ➝ ("1" + 2) → "12", then "12" + 2 → "122"
console.log(1 + 2 + "2"); // Output: "32" ➝ (1 + 2) = 3, then 3 + "2" → "32"

// 📌 New Concept: Type Coercion  
// When using `+` with a **string and a number**, JavaScript **converts the number into a string** and performs string concatenation instead of addition.

// Practice 3: String Concatenation  
let data1 = "Hey";
let data2 = " Muneeb";
console.log(data1 + data2); // Output: "Hey Muneeb" (Strings are combined)

// Practice 4: Increment Operators  
let x = 7;
let gameChanger;

// Post-Increment (`x++`) ➝ Returns the current value, then increases by 1  
gameChanger = x++;  
console.log(gameChanger); // Output: 7 (x was returned first, then increased)

// x is now 8

// Pre-Increment (`++x`) ➝ Increases the value first, then returns it  
gameChanger = ++x;
console.log(gameChanger); // Output: 9 (x was increased first, then returned)

// 📌 New Concept: Increment Operators  
// 1️⃣ **Post-Increment (`x++`)** → Returns the current value first, then increases it.  
// 2️⃣ **Pre-Increment (`++x`)** → Increases the value first, then returns it.

