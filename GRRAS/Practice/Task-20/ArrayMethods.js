let arr = [10, 20, 30];

// છેલ્લે નવો ડેટા ઉમેરે છે
arr.push(40);
console.log(arr); // [10, 20, 30, 40]

// છેલ્લો ડેટા કાઢી નાખે છે
arr.pop();
console.log(arr); // [10, 20, 30]

// શરૂઆતમાં નવો ડેટા ઉમેરે છે
arr.unshift(5);
console.log(arr); // [5, 10, 20, 30]

// શરૂઆતનો પહેલો ડેટા કાઢી નાખે છે
arr.shift();
console.log(arr); // [10, 20, 30]

let colors = ["Red", "Green", "Blue", "Yellow"];

// Index 1 થી 2 elements કાઢીને "Black" ઉમેરે છે
colors.splice(1, 2, "Black");
console.log(colors); // ["Red", "Black", "Yellow"]

// Index 0 થી 2 (2 સિવાય) સુધીનો ભાગ કાપીને નવો Array આપે છે
let sliced = colors.slice(0, 2);
console.log(sliced); // ["Red", "Black"]

let a = [1, 2];
let b = [3, 4];

// બે Array ને જોડીને નવો Array બનાવે છે
console.log(a.concat(b)); // [1, 2, 3, 4]

let words = ["Hello", "World"];

// Array ના બધા elements જોડીને String બનાવે છે
console.log(words.join(" ")); // "Hello World"

let nums = [10, 25, 40, 25];

// 25 Array માં છે કે નહીં તે ચેક કરે છે
console.log(nums.includes(25)); // true

// 25 પહેલી વાર કયા index પર છે તે આપે છે
console.log(nums.indexOf(25)); // 1

// 25 છેલ્લી વાર કયા index પર છે તે આપે છે
console.log(nums.lastIndexOf(25)); // 3

// શરત મુજબ પહેલો મળતો element આપે છે
let found = nums.find(n => n > 15);
console.log(found); // 25

// શરત મુજબ પહેલા મળતા element નો index આપે છે
let foundIdx = nums.findIndex(n => n > 15);
console.log(foundIdx); // 1

// ઓછામાં ઓછો એક element શરત પાળે તો true આપે છે
console.log(nums.some(n => n > 35)); // true

// બધા જ elements શરત પાળે તો જ true આપે છે
console.log(nums.every(n => n > 5)); // true

// દરેક element ને 2 વડે ગુણીને નવો Array બનાવે છે
let doubled = nums.map(n => n * 2);
console.log(doubled); // [20, 50, 80, 50]

// 20 થી મોટા numbers ચાળીને નવો Array બનાવે છે
let filtered = nums.filter(n => n > 20);
console.log(filtered); // [25, 40, 25]

// બધા numbers નો કુલ સરવાળો કરે છે
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 100

// દરેક element માટે એક-એક વાર loop ચલાવે છે
nums.forEach(n => console.log(n));

let unsorted = [40, 100, 1, 5];

// Numbers ને ચઢતા ક્રમમાં (Ascending) ગોઠવે છે
unsorted.sort((x, y) => x - y);
console.log(unsorted); // [1, 5, 40, 100]

// આખા Array ને ઊંધા ક્રમમાં ફેરવે છે
unsorted.reverse();
console.log(unsorted); // [100, 40, 5, 1]

let nested = [1, [2, [3, 4]]];

// અંદર રહેલા nested Arrays ને 2 લેવલ સુધી સીધા કરે છે
console.log(nested.flat(2)); // [1, 2, 3, 4]

let sentences = ["Hello world", "JavaScript code"];

// પહેલા map કરે છે અને પછી પરિણામને flat (સીધું) કરે છે
console.log(sentences.flatMap(s => s.split(" "))); // ["Hello", "world", "JavaScript", "code"]

// 3 લંબાઈનો Array બનાવી બધી જગ્યાએ 0 ભરે છે
let filled = new Array(3).fill(0);
console.log(filled); // [0, 0, 0]

// આપેલ વેરીએબલ Array છે કે નહીં તે તપાસે છે
console.log(Array.isArray(arr)); // true

// String અથવા iterable માંથી નવો Array બનાવે છે
console.log(Array.from("ABC")); // ["A", "B", "C"]

// Negative index વાપરીને છેલ્લો element આપે છે
console.log(arr.at(-1)); // 30