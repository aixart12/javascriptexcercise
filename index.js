

const members = [
    {name: 'Rakesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];

  let arr = [];
  let arr2 = []
  let initalName = [];
  let dgroup = 
      {
          'young' : [],
          'old' : [],
          'noage': []
      }
  ;
  const member  = members.map(m => {
    arr = m.name.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
    initalName.push(arr[0]);
    m.name = arr[0] + ' ' + arr[1].toUpperCase();
    arr2.push(m.age);
    if(m.age > 35){
        dgroup.old.push(m)
    }
    else if(m.age < 35){
        dgroup.young.push(m)
    }else{
        dgroup.noage.push(m)
    }

})
//1. Get array of first names of everyone
// console.log(initalName);
// 2. Make everyone's last names in UPPERCASE in given array of objects
// console.log(members)

// 3. Get entries where age is between 41-60
    const ageb = arr2.filter((value) =>  value> 41 && value <60);
    // console.log(ageb)
// 4 . Get average age
    let sum = arr2.reduce((total , value) => total + (value || 0),0)
    // console.log(sum/arr2.length)
// 5. Get Person with maximum age
    let max = Math.max.apply(null,arr2.filter(function (x) {
        return isFinite(x);
    }))
    // console.log(max)
// 6 Divide persons in three groups
    // console.log(dgroup)
//  add a new member to same members array instance at index 2
    members.splice(1, 0 , {name: 'Dhruv', age: 22} )
    // console.log(members)

// 8. extract first and second element using destructing
    const [ a , b] = members;
    // console.log(a);
    // console.log(b);

// 9. Create a new array instance adding a new member at index 0, and keeping existing afterwards
    const arr3 = members.slice(0);
    arr3.unshift({name: 'Abc', age:23})
    // console.log(arr3)

// 10. Extract properties of object using destructuring
    for (const {name} of members){
        // console.log(name);
    }


//  11. Rename extracted property of object while destructing
    for (const {name : name1} of members){
        console.log(name1);
    }
//  12. Destructure any property of an object and use spread operator to get remaining properties in an object
    const m = {name: 'Rakesh Gupta', age: 20} ;
    const {name , ...rest} = m ;
    console.log(rest)

// 13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
    const c = {...m};
    c.name = "Dhruv"
    console.log(c.name);

//  14. Use reduce function on array and object
    // const numbers =[45, 4 , 9 , 16, 25];
    // let sum2 = numbers.reduce(fun);
    // function fun(total , value){
    //     return total + value;
    // } 
    let intitalValue = "Dklol";
    let allmembers = members.reduce(function(previousValue , currentValue){
        return [...previousValue , currentValue.name]

    },[intitalValue])
    // console.log(allmembers)


