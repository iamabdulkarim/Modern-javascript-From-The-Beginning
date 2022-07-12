const firstName = 'Abdul';
const lastName =  'Karim';
const age = 26;

let val;
//Concatenation
val = firstName + ' '+ lastName;

//Append
val = 'Brad ';
val += 'Traversy'
console.log(val);

val = 'Hello, my name is ' + firstName + ' and I am ' + age;
console.log(val);

//Escaping
val = 'that\'s awesome, I can\'t wait';
console.log(val);
// Second way
val = "that's awesome, I can't wait";
console.log(val);

//Change case
val = firstName.toLowerCase();
console.log(val);
val = firstName.toUpperCase();
console.log(val);

//Index of
val = firstName.indexOf('l');
console.log(val);

//charAt()
val = firstName.charAt(2);
console.log(val);

//Get last char
val = firstName.charAt(firstName.length - 1);
console.log(val);

//Substring
val = firstName.substring(0,4);
console.log(val);

//Slice
val = firstName.slice(0,4);
console.log(val);
val = firstName.slice(-3);
console.log(val);

//split()
const str = 'Hello there my name is Brad';
const tag = 'web design,web development,programming ';
val = str.split(' ');
console.log(val);

val = tag.split(',');
console.log(val);

//Replace()
val = str.replace('Brad', 'Jack');
console.log(val);