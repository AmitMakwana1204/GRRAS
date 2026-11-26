let text = "  Hello JavaScript  ";

// 1. length: String ની કુલ લંબાઈ (અક્ષરો અને space ની સંખ્યા) આપે છે
console.log(text.length); // 20

// 2. trim(): આગળ અને પાછળની વધારાની space કાઢી નાખે છે
let cleanText = text.trim();
console.log(cleanText); // "Hello JavaScript"

// 3. toUpperCase(): બધા અક્ષરોને Capital (મોટા) કરે છે
console.log(cleanText.toUpperCase()); // "HELLO JAVASCRIPT"

// 4. toLowerCase(): બધા અક્ષરોને Small (નાના) કરે છે
console.log(cleanText.toLowerCase()); // "hello javascript"

// 5. includes(): આપેલ શબ્દ String માં છે કે નહીં તે તપાસે છે (true / false)
console.log(cleanText.includes("Java")); // true

// 6. indexOf(): આપેલ શબ્દ પહેલી વાર કયા index નંબર પર છે તે આપે છે
console.log(cleanText.indexOf("Script")); // 10

// 7. startsWith(): String ચોક્કસ શબ્દથી શરૂ થાય છે કે નહીં તે તપાસે છે
console.log(cleanText.startsWith("Hello")); // true

// 8. endsWith(): String ચોક્કસ શબ્દથી પૂરી થાય છે કે નહીં તે તપાસે છે
console.log(cleanText.endsWith("Script")); // true

// 9. slice(): આપેલા index વચ્ચેનો ભાગ કાપીને નવી String આપે છે
console.log(cleanText.slice(0, 5)); // "Hello"

// 10. at(): આપેલા index પરનો અક્ષર આપે છે (-1 થી છેલ્લો અક્ષર મળે)
console.log(cleanText.at(-1)); // "t"

// 11. replace(): પહેલો મળતો શબ્દ બદલીને નવો શબ્દ મૂકે છે
console.log(cleanText.replace("JavaScript", "World")); // "Hello World"

// 12. replaceAll(): બધા જ સરખા શબ્દો બદલી નાખે છે
let msg = "Hi Amit, Hi Rahul";
console.log(msg.replaceAll("Hi", "Hello")); // "Hello Amit, Hello Rahul"

// 13. split(): String ને તોડીને Array બનાવે છે
let skills = "HTML,CSS,JS";
console.log(skills.split(",")); // ["HTML", "CSS", "JS"]

// 14. concat(): બે કે વધુ Strings ને જોડે છે
console.log("Hello".concat(" ", "Amit")); // "Hello Amit"

// 15. repeat(): String ને આપેલી સંખ્યા જેટલી વાર રિપીટ કરે છે
console.log("JS ".repeat(3)); // "JS JS JS "

// 16. padStart(): આગળ ચોક્કસ અક્ષર ઉમેરીને લંબાઈ પૂરી કરે છે
console.log("5".padStart(3, "0")); // "005"