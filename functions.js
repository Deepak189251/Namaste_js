// function statement
/*

function outer (){
    console.log(`function statement`);
}
outer();


function expression 


let b = function ()
      { console.log(`function expression`); }  
b();
 


let arr = [`Deepak`, `Behera`]

function happy (){
    console.log("happy");
}
 
const vay = arr.prototype
console.log(vay); English 

class ticket {
    constructor (name, trainNo, date){
        this.name = name;
        this.trainNo = trainNo;
        this.date = date;
    }

    cancalationDeadLine = --this.date;

    preview (){
        console.log(`Your name is: ${this.name} & your train is: ${this.trainNo} on ${this.date}`);
    }
}

const tiket1 = new ticket ("Deepak", 2309, 25);

tiket1.preview();
console.log(tiket1.cancalationDeadLine)

const num = 10;


Playing with setTimeOut in Local Environment.


console.log(`start`)

setTimeout(function cb(){
    console.log(`callback`);
    console.log(new Date().getTime());
}, 4000);

  
Here we want to block the (main thread or call stack) for 10 seconds.


let startDate = new Date().getTime();
console.log(startDate)
let endDate = startDate;

while (endDate < startDate + 10000){
    endDate = new Date().getTime();
}

console.log(`Loop completed`);



    for(var i = 1; i <= 5; i++){
    function timeout (num){
        setTimeout(function st(){
            console.log(num)
         }, num * 1000)
    }
   timeout (i);
  }

for (var i = 1; i <= 5; i++){
    setTimeout(function cb(){
        console.log(i)
    }, i * 1000)
}
  
  below this is an another example.
  

*/



const users = [
    {firstname: "Deepak", lastname: "Behera", age: 26},
    {firstname: "Smruti", lastname: "mallick", age: 75},
    {firstname: "Duryodhan", lastname: "Behera", age: 50},
    {firstname: "Kartik", lastname: "Behera", age: 26}
];


// This is use of map method : It will return an array which contains full name of each object
/*
const output = users.map((user)=>{
    return user.firstname + " "+ user.lastname 
})  */


// This is use of filter method : It will return an array which contains objects who satisfy the given condition.
/*
const output2 = users.filter((user) => {
    return user.lastname === "Behera"
})*/

/* const result = users.filter((res) => {
    return res.age < 30
 })

 console.log(result)*/
 
// This is use of reduce method
/*
const output3 = users.reduce((acc, curr)=>{
   if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age]
   }
   else{
    acc[curr.age] = 1;
   }
   return acc
},{})


// This is called chaining filter and map, here first we use filter to filter objects which age is less than 30 then we use map on it to take the first name out of it.

const output4 = users.filter((x) => {
    return x.age < 30 
}).map((user) => {
    return user.firstname
})

console.log(output)

console.log(output2)


const output5 = users.reduce((acc, curr) => {
   if(curr.age < 30){
    acc.push(curr.firstname);
   }
   return acc
}, []) 

console.log(output5)*/


/*
async function create () {
    return "hello"
}

const result = create()

result.then((res) => console.log(res))*/


/*const api = "https://api.github.com/users/Deepak189251"
fetch(api)
.then((res) => {
   res = res.json()
   return res
})
.then((res) => {
    console.log(res)
})
*/

/*const arr = [{movie:'Raaz', year:'2002'}, {movie:'1920', year:'2008'}, {movie:'Raat', year:'1992'}, {movie:'Bhoot', year:'2003'}, {movie:'Pari', year:'2018'}]
console.log(arr)

arr.map((res, index) => {
    console.log("the movie" + res.movie + "released in year" + res.year)
})*/

const movieString = "[{movie:'Bhoot', year:'2003'}, {movie:'Raaz', year:'2002'}, {movie:'Pari', year:'2018'}, {movie:'1920', year:'2008'}, {movie:'Stree', year:'2018'}]";
const mu = {movieString}
//const movieArray = JSON.parse(movieString, );
const movieArray = JSON.stringify(movieString)
const movieArrrrray = JSON.parse(movieArray)
movieArrrrray.map((res) => {
    console.log(res.movie + res.year)
})
//console.log(mu);
console.log(movieArray)
console.log(movieArrrrray)

