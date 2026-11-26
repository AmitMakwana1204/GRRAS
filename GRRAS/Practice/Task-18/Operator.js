// ==========================================
// 1. ARITHMETIC OPERATORS (ગણિતની ગણતરી માટે)
// ==========================================
let a = 10, b = 3;

console.log(a + b);  // 13 (સરવાળો)
console.log(a - b);  // 7  (બાદબાકી)
console.log(a * b);  // 30 (ગુણાકાર)
console.log(a / b);  // 3.33 (ભાગાકાર)
console.log(a % b);  // 1  (Modulus - શેષ વધે તે)
console.log(a ** b); // 1000 (Exponentiation - 10 નો 3 ઘાત)


// ==========================================
// 2. ASSIGNMENT OPERATORS (કિંમત આપવા અને ઉમેરવા માટે)
// ==========================================
let x = 10;

x += 5; // x = x + 5 -> 15
x -= 3; // x = x - 3 -> 12
x *= 2; // x = x * 2 -> 24
console.log(x); // 24


// ==========================================
// 3. COMPARISON OPERATORS (સરખામણી કરવા માટે - true/false આપે)
// ==========================================
console.log(5 == "5");   // true  (માત્ર કિંમત તપાસે, data type નહીં)
console.log(5 === "5");  // false (Strict: કિંમત અને data type બંને તપાસે)
console.log(5 !== "5");  // true  (સરખા નથી)
console.log(10 > 5);     // true  (મોટું છે)
console.log(10 <= 10);   // true  (નાનું અથવા સરખું છે)


// ==========================================
// 4. LOGICAL OPERATORS (એકથી વધુ શરતો જોડવા માટે)
// ==========================================
let age = 21;
let hasId = true;

// && (AND): બંને શરતો સાચી હોય તો જ true
console.log(age >= 18 && hasId); // true

// || (OR): કોઈ પણ એક શરત સાચી હોય તો true
console.log(age < 18 || hasId);  // true

// ! (NOT): જવાબ ઊંધો કરે (true ને false અને false ને true)
console.log(!hasId);             // false


// ==========================================
// 5. TERNARY OPERATOR (Short if-else)
// ==========================================
let marks = 75;
let result = (marks >= 35) ? "Pass" : "Fail";
console.log(result); // "Pass"


// ==========================================
// 6. MODERN ES6+ OPERATORS
// ==========================================

// Nullish Coalescing (??): જો કિંમત null કે undefined હોય તો જ બીજી કિંમત લે
let userCity;
console.log(userCity ?? "Anand"); // "Anand"

// Optional Chaining (?.): Property ન હોય તો Error આપવાને બદલે undefined આપે
let user = { name: "Amit" };
console.log(user.address?.pin);   // undefined

// Spread Operator (...): Array કે Object ને ખોલીને ભેગા કરવા માટે
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]