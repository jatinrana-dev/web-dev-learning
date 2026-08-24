var person = {
    name: 'Raju',
    age: 19,
    city: 'Noida'
}
console.log(person);
console.log(person.name);

var user = {
    name: 'Rahul',
    age: 23,
    city: 'Noida',
    cllg: 'Jaypee'


}
user.Phoneno = 358359834 //adding new element//

 
user.age = 24.  //updating element//
delete user.cllg
console.log(user)
console.log(Object.keys(user));


var user2 = {
    name: 'Viral Kohli',
    age :36,
    team : 'India',
    isMarried: true,
    skills: ['Batting','Fielding'],
    spouse:{
        name:'Anushka Sharma',
        profession:'Acting',
        age:30,

    }
}
console.log(user2)


var user3 = {
    user:"Raja",
    greet:function(a){
        console.log('good morning...',a);

        
    }
}
user3.greet('Sohit')



