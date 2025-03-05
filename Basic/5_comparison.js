// 📌 Comparison Operators in JavaScript
// Comparison operators compare values and return a boolean (true or false).

console.log(2 > 1);  // true
console.log(3 < 2);  // false
console.log(4 <= 6); // true
// Other similar comparisons like >= (greater than or equal to) and == (equal to) are also used.

// ✅ Industry Standard: These basic comparison operators are widely used in coding.

// ⚠️ JavaScript Limitations (Type Coercion in Comparisons)
console.log("2" >= 4); // false (String is converted to a number, then compared)
console.log(5 == "8"); // false (String "8" is converted to a number)

// 📌 New Concept: Type Coercion in Comparisons
// Type coercion happens when JavaScript converts one data type into another automatically before comparison.

// ❌ **Not Used in Industry (Bad Practice):** Avoid using `==` (loose equality) because it does type coercion.
// ✅ **Industry Standard (Good Practice):** Always use `===` (strict equality) to compare both value and data type.

// Example of Loose Equality (==)
let num1 = null;
let num2;

console.log(num1 == num2); // true (Both null and undefined are treated as equal)

// 📌 New Concept: Null vs. Undefined
// - **null** → Represents an intentional absence of a value.
// - **undefined** → Means a variable has been declared but not assigned a value.

// ✅ **Best Practice:** Avoid using `==` for comparisons where data types can be different.

// 🔥 Strict Comparison (Best Practice in Industry)
// Inequality

console.log("Hello" !== 43); // true (Data types are different, so it returns true)

// Equality

console.log("Muneeb" === "Sandhu"); // true (Data types are same, so it returns true)


// 📌 New Concept: Strict Comparison (`===` and `!==`)
// - **`===` (strict equality)** → Compares both value and data type.
// - **`!==` (strict inequality)** → Checks if value and data type are different.

// ✅ **Industry Standard (Good Practice):** Always use strict comparison (`===` or `!==`) instead of loose comparison (`==` or `!=`).

