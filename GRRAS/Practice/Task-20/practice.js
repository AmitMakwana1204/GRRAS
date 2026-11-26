// ==========================================
// 1. MOST IMPORTANT (રોજિંદા કોડિંગ અને React માં સૌથી વધુ વપરાતી)
// ==========================================

let nums = [10, 25, 40, 25];

// map(): દરેક element ને બદલીને નવો Array બનાવે છે
let doubled = nums.map(n => n * 2);
console.log(doubled); // [20, 50, 80, 50]

// filter(): શરત મુજબ ડેટા ચાળીને નવો Array બનાવે છે
let filtered = nums.filter(n => n > 20);
console.log(filtered); // [25, 40, 25]

// reduce(): બધા numbers નો કુલ સરવાળો કરીને એક જ કિંમત આપે છે
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 100

// find(): શરત મુજબ પહેલો મળતો element આપે છે
let found = nums.find(n => n > 15);
console.log(found); // 25

// forEach(): દરેક element માટે એક-એક વાર loop ચલાવે છે
nums.forEach(n => console.log(n));

// includes(): ડેટા Array માં છે કે નહીં તે ચેક કરે છે (true / false)
console.log(nums.includes(25)); // true


// ==========================================
// 2. ADD / REMOVE & SLICE (ડેટા ઉમેરવા, કાઢવા અને કાપવા માટે)
// ==========================================

let arr = [10, 20, 30];

// push(): છેલ્લે નવો ડેટા ઉમેરે છે
arr.push(40);
console.log(arr); // [10, 20, 30, 40]

// pop(): છેલ્લો ડેટા કાઢી નાખે છે
arr.pop();
console.log(arr); // [10, 20, 30]

// unshift(): શરૂઆતમાં નવો ડેટા ઉમેરે છે
arr.unshift(5);
console.log(arr); // [5, 10, 20, 30]

// shift(): શરૂઆતનો પહેલો ડેટા કાઢી નાખે છે
arr.shift();
console.log(arr); // [10, 20, 30]

// slice(): Array નો અમુક ભાગ કાપીને નવો Array આપે છે (મૂળ Array ન બદલાય)
let sliced = arr.slice(0, 2);
console.log(sliced); // [10, 20]

// splice(): વચ્ચેથી elements કાઢવા અથવા નવા ઉમેરવા (મૂળ Array બદલાય)
let colors = ["Red", "Green", "Blue", "Yellow"];
colors.splice(1, 2, "Black");
console.log(colors); // ["Red", "Black", "Yellow"]


// ==========================================
// 3. SORTING, JOINING & SEARCHING (ગોઠવવા અને જોડવા માટે)
// ==========================================

let unsorted = [40, 100, 1, 5];

// sort(): Numbers ને ચઢતા ક્રમમાં (Ascending) ગોઠવે છે
unsorted.sort((x, y) => x - y);
console.log(unsorted); // [1, 5, 40, 100]

// reverse(): આખા Array ને ઊંધા ક્રમમાં ફેરવે છે
unsorted.reverse();
console.log(unsorted); // [100, 40, 5, 1]

// join(): Array ના બધા elements જોડીને String બનાવે છે
let words = ["Hello", "World"];
console.log(words.join(" ")); // "Hello World"

// concat(): બે Array ને જોડીને નવો Array બનાવે છે
let a = [1, 2];
let b = [3, 4];
console.log(a.concat(b)); // [1, 2, 3, 4]

// indexOf() & lastIndexOf(): ડેટા કયા index પર છે તે આપે છે
console.log(nums.indexOf(25)); // 1
console.log(nums.lastIndexOf(25)); // 3

// findIndex(): શરત મુજબ પહેલા મળતા element નો index આપે છે
console.log(nums.findIndex(n => n > 15)); // 1

// some() & every(): શરત મુજબ હા કે ના (true/false) માં જવાબ આપે છે
console.log(nums.some(n => n > 35)); // true (ઓછામાં ઓછો એક)
console.log(nums.every(n => n > 5)); // true (બધા જ)


// ==========================================
// 4. OTHER USEFUL METHODS (અન્ય ઉપયોગી)
// ==========================================

// at(): Negative index વાપરીને છેલ્લો element આપે છે
console.log(arr.at(-1)); // 30

// flat(): અંદર રહેલા nested Arrays ને સીધા કરે છે
let nested = [1, [2, [3, 4]]];
console.log(nested.flat(2)); // [1, 2, 3, 4]

// flatMap(): પહેલા map કરે છે અને પછી પરિણામને flat (સીધું) કરે છે
let sentences = ["Hello world", "JavaScript code"];
console.log(sentences.flatMap(s => s.split(" "))); // ["Hello", "world", "JavaScript", "code"]

// Array.isArray(): આપેલ વેરીએબલ Array છે કે નહીં તે તપાસે છે
console.log(Array.isArray(arr)); // true

// Array.from(): String માંથી નવો Array બનાવે છે
console.log(Array.from("ABC")); // ["A", "B", "C"]

// fill(): 3 લંબાઈનો Array બનાવી બધી જગ્યાએ 0 ભરે છે
let filled = new Array(3).fill(0);
console.log(filled); // [0, 0, 0]