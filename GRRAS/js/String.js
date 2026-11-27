// string is a data type 
let xyz = "       Hello world"
console.log(xyz)

console.log(xyz.toUpperCase());
console.log(xyz.toLowerCase());
console.log(xyz.length);
// trim : removing the leading white space and line terminator characters from a string.
console.log(xyz.trimStart());
console.log(xyz.trim());
// charAt : print the character at the specific index
console.log(xyz.charAt(10));

// replace : replace original with a another character (only replace first charcter not all characters)
console.log(xyz.replace('l', 'A'));

// replace ALL : repalce all character of the string 
console.log(xyz.replaceAll ('l', 'A'));

// split : split a string value into substrings using the specified seperator ('')
console.log(xyz.split(""));


// slice : retruns a value of portion of the string starting from the given index value 
console.log(xyz.slice(3));


let date = new Date();
console.log(date);

console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMonth());
console.log(date.getMinutes());

// its use for data storage ()







