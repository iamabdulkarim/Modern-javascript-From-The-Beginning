//Function Declaration
// function greet1() {
//   console.log('Hello');
// }
// greet();
function greet(firstName ='john', lastName='Doe') {
  return 'Hello ' + firstName + ' ' + lastName
}
console.log(greet());

//Imediately Invokable Function Expressions - IIFEs
(function (name) {
  console.log('Hello '+ name)
})('Abdul karim');

//Property Methods

const todo = {
  add: function() {
    console.log('Add todo');
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`);
  }
}
todo.add();
todo.edit(2);