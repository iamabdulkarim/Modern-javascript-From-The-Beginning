// const id =3;
if (typeof id !== 'undefined') {
  console.log(`the Id is ${id}`); 
} else {
  console.log('No Id');
}
//result No Id

const color = 'yellow';

if (color === 'red') {
  console.log('Color is red');  
} else if(color === 'blue') {
  console.log('Color is Blue');
}else{
  console.log('Color is not red and blue');
}

//Logical Operators
const lastName = 'Karim';
const age = 20;
if (age > 0 && age <12) {
  console.log(`${lastName} is a child`);
}else if(age >= 13 && age <= 19){
  console.log(`${lastName} is a teenager`);
} else {
  console.log(`${lastName} is a adult` );
}

const number = '100';

console.log(number === 100 ? 'Correct' : 'Incorrect');