  const person = {
    firstName: 'Abdul',
    lastName: 'Karim',
    age: 26,
    email: 'abdul.karim@cliqpack.com',
    hobbies: ['sports','travelling'],
    address: {
      city:'Chittagong',
      Upzilla: 'Hathazari',
      Country: 'Bangladesh',
    },
    getBirthYear: function () {
      //return age;
      return 2022 - this.age;
    }
  }

  let val;
  val = person;
  //Get Specific Value
  val = person.firstName;   //result: Abdul
  val = person['lastName']; //result: Karim

  val = person.age;         //result: 26 
  val = person.hobbies;     //result: (2) ['sports'),'travellig']
  val = person.hobbies[1];  //result: travelling

  val = person.address;     //result: {city:'Chitagong', Upzilla: 'Hathazari',Country: 'Bangladesh',
  val = person.address.city; //result: Chitagong
  val = person.address['city']; //result: Chitagong
  val = person.getBirthYear();  //result: 1993
  console.log(val);


    const people = [
      {name : 'Abdul Karim', age: 26 },
      {name : 'Thouhid', age: 27 }
    ];
    
    for(let i=0; i < people.length; i++){
      
       console.log(people[i]); //result :{name: 'Abdul Karim', age: 26} {name: 'Thouhid', age: 27}
      console.log(people[i].name); //result : Abdul Karim
                                  //         Thohid   
    }

    let id = 100;
    if (id !== 100) {
      console.log("correct");
      
    } else {
      console.log("incorrect");
    }