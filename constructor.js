function BankAccount (customerName, balance) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = (amount) => {
        this.balance += amount;
    }

    this.withdraw = (amount) => {
        this.balance -= amount;
    }
}
/*
const deepak = new BankAccount(`Deepak`, 2000);
const kartik = new BankAccount(`Kartik`, 1000);

kartik.deposite(500);

console.log(deepak, kartik);
deepak.withdraw(300);
console.log(deepak)  */

const createForm = document.getElementById(`create`);
const customerName = document.getElementById(`name`);
const balance = document.getElementById(`balance`);

const depositForm = document.getElementById(`deposit`);
const accountNumber = document.getElementById(`accountnumber`);
const depositAmount = document.getElementById(`amount`);

let btn 
document.querySelectorAll(`button`).forEach((occur) => {
   let id = occur.getAttribute(`id`);
    occur.addEventListener(`click`, ()=>{
       btn = id;
    })
})

console.log(btn);


const customers = [];


createForm.addEventListener(`submit`,(e) => {
    e.preventDefault();
    const customer = new BankAccount (customerName.value, +balance.value)
    customers.push(customer)
     console.log(customers);
})


depositForm.addEventListener(`submit`, (e) => {
    e.preventDefault();
   const found = customers.find((cu) => cu.accountNumber === +accountNumber.value);
   found.deposit( +depositAmount.value);
   console.log(found)
})

