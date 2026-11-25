let arr = [10, 20, 30];

// 1. push() - છેલ્લે નવો ડેટા ઉમેરે છે
arr.push(40);
console.log(arr); // [10, 20, 30, 40]

// 2. pop() - છેલ્લો ડેટા કાઢી નાખે છે
arr.pop();
console.log(arr); // [10, 20, 30]

// 3. length - Array માં કુલ કેટલા elements છે તે સંખ્યા આપે છે (આ property છે, એટલે () ન લાગે)
console.log(arr.length); // 3

// 4. toString() - આખા Array ને comma (,) વાળી String માં ફેરવે છે
console.log(arr.toString()); // "10,20,30"

// 5. at() - આપેલા index પર રહેલો element આપે છે (પાછળથી ગણવા -1 વાપરી શકાય)
console.log(arr.at(1));  // 20 (index 1 પર)
console.log(arr.at(-1)); // 30 (છેલ્લો element)