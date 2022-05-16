const _ = require("lodash");


const members = [
    {name: 'Rakesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];
  let dgroup = 
      {
          'young' : [],
          'old' : [],
          'noage': []
      }
  ;
  let arr = [];
  let initalName = [];

_.forEach(members , function(value){
    arr = value.name.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
    initalName.push(arr[0]);
    value.name = arr[0] + " " + arr[1].toLocaleUpperCase();
})

//1. Get array of first names of everyone
// console.log(initalName)
// 2. Make everyone's last names in UPPERCASE in given array of objects
// console.log(members);

// 3. Get entries where age is between 41-60
 let rman = _.filter(members , function(o){
     return o.age > 41 && o < 60
 })
//  console.log(rman);

// 4 . Get average age
let average = _.meanBy(members ,function(o){
    return o.age ;
})

// console.log(average)
// 5. Get Person with maximum age
let max = _.maxBy(members ,function(o){
    return o.age ;
})
// console.log(max);
// 6 Divide persons in three groups
    const grouped = _.groupBy(members , member => 
        if(member.age>35){
            return "old"
        }
        else if (member.age < 35){
            return 'young'
        }
        return "noage"; )
    console.log(grouped)

// 7  add a new member to same members array instance at index 2
members.splice(1, 0 , {name: 'Dhruv', age: 22} )

// 8. extract first and second element using destructing
