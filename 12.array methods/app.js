//Create some arrays
const numbers = [43,56,435,65,76,49];
const numbers2 = new Array(22,45,33,76,43);
const fruits = ['Apple','Banana','Orange','Pear'];
const mixed = [22,'Hello',true,undefined,null,{a:1, b:1}, new Date()];

let val;

//Get array length
val = numbers.length;

//check if is array
val = Array.isArray(numbers);

//Get single value
val = numbers[3];
val = numbers[0];

// insert into array
numbers[2] = 100;

//Find index of value
val = numbers.indexOf(49);

//MUTATING ARRAYS
//Add on to end
// numbers.push(250);
// //Add on to front
// numbers.unshift(11);
// //Take off from end
// numbers.pop();
// //Take of from front
// numbers.shift();


// //Splice values
// numbers.splice(1,3);

// //Reverse
// numbers.reverse();

//Concatenate array
val = numbers.concat(numbers2);

//Sorting arrays
val = fruits.sort();
//not perfect one
// val = numbers.sort();

//Use the "compare function"
val = numbers.sort(function(x,y){
  return x-y;
});

// // Reverse sort
val = numbers.sort(function(x,y){
  return y-x;
});


//Find
// function under50(num){
//   return num <50;
// }
// val = numbers.find(under50);
console.log(numbers);
console.log(val);