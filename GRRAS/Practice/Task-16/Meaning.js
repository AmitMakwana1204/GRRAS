// ==========================================
// 1. PRIMITIVE DATA TYPES
// ==========================================

// String: લખાણ (Text) સંગ્રહવા માટે વપરાય છે
let name = "Amit";
console.log(name, typeof name); // "Amit" "string"

// Number: સાદા અને પોઈન્ટ વાળા આંકડા સંગ્રહવા માટે વપરાય છે
let age = 21;
console.log(age, typeof age); // 21 "number"

// Boolean: માત્ર સાચું (true) અથવા ખોટું (false) દર્શાવવા માટે
let isActive = true;
console.log(isActive, typeof isActive); // true "boolean"

// Undefined: વેરીએબલ બનાવ્યો હોય પણ કોઈ કિંમત આપી ન હોય
let city;
console.log(city, typeof city); // undefined "undefined"

// Null: જાણીજોઈને ખાલી રાખેલી કિંમત દર્શાવવા માટે
let data = null;
console.log(data, typeof data); // null "object"

// BigInt: ખૂબ જ મોટા આંકડા સંગ્રહવા માટે (પાછળ 'n' લખાય છે)
let bigNum = 900719925474099199n;
console.log(bigNum, typeof bigNum); // 900719925474099199n "bigint"

// Symbol: એકદમ અલગ (Unique) ઓળખ બનાવવા માટે વપરાય છે
let id = Symbol("id");
console.log(id, typeof id); // Symbol(id) "symbol"


// ==========================================
// 2. NON-PRIMITIVE DATA TYPES
// ==========================================

// Object: key-value જોડીમાં એકથી વધુ વિગતો સંગ્રહવા માટે
let user = { name: "Amit", age: 21 };
console.log(user, typeof user); // { name: "Amit", age: 21 } "object"

// Array: એક જ લિસ્ટમાં ક્રમબદ્ધ ડેટા સંગ્રહવા માટે (JS માં આ પણ Object છે)
let skills = ["HTML", "CSS", "JS"];
console.log(skills, typeof skills); // ["HTML", "CSS", "JS"] "object"

// Function: ચોક્કસ કામ કરવા માટેનો ફરીથી વાપરી શકાય તેવો કોડ બ્લોક
function greet() {
  return "Hello";
}
console.log(greet(), typeof greet); // "Hello" "function"