let rawName = "   amit makwana   ";
let cleanName = rawName.trim().toUpperCase();
let firstName = cleanName.slice(0, cleanName.indexOf(" "));

console.log(firstName);


let rawEmail = "Amit.Dev@GMAIL.com ";
let cleanEmail = rawEmail.trim().toLowerCase();
let isValidEmail = cleanEmail.includes("@") && cleanEmail.endsWith(".com");

console.log(isValidEmail);

let orderAmount = 2500; 
let couponCode = "  save20  "; 
let cleanCoupon = couponCode.trim().toUpperCase(); // "SAVE20"
let discount = (cleanCoupon === "SAVE20" && orderAmount >= 2000) 
  ? (orderAmount * 20) / 100 
  : 0;

console.log(discount);


let extraGift = null;                 // Null (હાલમાં ખાલી)
let deliveryNote;                     // Undefined (હજુ નક્કી નથી)

// Nullish Coalescing (??): null કે undefined હોય તો default કિંમત લે
let giftMessage = extraGift ?? "No Free Gift";
let noteMessage = deliveryNote ?? "Standard Delivery";

console.log(giftMessage);
console.log(noteMessage);