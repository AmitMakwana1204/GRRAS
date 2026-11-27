// ==========================================
// 1. DATA TYPES (અલગ-અલગ પ્રકારનો ડેટા)
// ==========================================
let rawName = "   amit makwana   ";   // String
let rawEmail = "Amit.Dev@GMAIL.com "; // String
let orderAmount = 2500;               // Number
let couponCode = "  save20  ";        // String
let isPrimeMember = true;             // Boolean
let extraGift = null;                 // Null (હાલમાં ખાલી)
let deliveryNote;                     // Undefined (હજુ નક્કી નથી)

// ==========================================
// 2. STRING METHODS (ડેટા સાફ અને તૈયાર કરવો)
// ==========================================
// trim(), toUpperCase(), toLowerCase(), slice(), includes()
let cleanName = rawName.trim().toUpperCase();
let firstName = cleanName.slice(0, cleanName.indexOf(" ")); // "AMIT"

let cleanEmail = rawEmail.trim().toLowerCase();
let isValidEmail = cleanEmail.includes("@") && cleanEmail.endsWith(".com");

let cleanCoupon = couponCode.trim().toUpperCase(); // "SAVE20"

// ==========================================
// 3. OPERATORS (ગણતરી અને શરતો ચેક કરવી)
// ==========================================
// Comparison (===), Logical (&&), Arithmetic (-, *, /), Ternary (? :), Nullish (??)
let discount = (cleanCoupon === "SAVE20" && orderAmount >= 2000) 
  ? (orderAmount * 20) / 100 
  : 0;

let finalAmount = orderAmount - discount;

// Prime Member હોય અને બિલ 1500 થી વધુ હોય તો Free Delivery
let deliveryCharge = (isPrimeMember && finalAmount > 1500) ? 0 : 99;
finalAmount += deliveryCharge; // Assignment Operator (+=)

// Nullish Coalescing (??): null કે undefined હોય તો default કિંમત લે
let giftMessage = extraGift ?? "No Free Gift";
let noteMessage = deliveryNote ?? "Standard Delivery";

// ==========================================
// 4. OUTPUT (Template Literal સાથે)
// ==========================================
console.log(`Customer: ${firstName} (${cleanName})`);     //    ` ` (Backticks)
console.log(`Email Valid: ${isValidEmail} (${cleanEmail})`);
console.log(`Original Price: ₹${orderAmount}`);
console.log(`Discount Applied: -₹${discount}`);
console.log(`Final Payable: ₹${finalAmount}`);
console.log(`Gift: ${giftMessage} | Note: ${noteMessage}`);