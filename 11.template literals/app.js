const firstName = 'Abdul';
const lastName =  'Karim';
const age = 26;
const job = 'Web Developer';
const city = 'Chittagong'

let html;

//Without template strings (es5)

// html = '<ul><li>Name: ' + lastName +' </li><li>Age: ' + age +' </li><li>job: ' + job +' </li><li>city: ' + city +' </li></ul>';

// html = '<ul>'+
//      '<li>Name: ' + lastName +' </li>'+
//      '<li>Age: ' + age +' </li>'+
//      '<li>job: ' + job +' </li>'+
//      '<li>city: ' + city +' </li>'+
//      '</ul>'

html = `
        <ul>
          <li>Name:${lastName}</li>
          <li>Age:${age}</li>
          <li>Job:${job}</li>
          <li>City${city}</li>
        </ul>

      `;
document.body.innerHTML = html;

