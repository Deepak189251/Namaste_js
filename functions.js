// function statement
/*

function outer (){
    console.log(`function statement`);
}
outer();


// function expression 


let b = function ()
      { console.log(`function expression`); }
b();
 


let arr = [`Deepak`, `Behera`]

function happy (){
    console.log("happy");
}
 
const vay = arr.prototype
console.log(vay); English */


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

