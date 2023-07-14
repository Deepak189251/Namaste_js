function BankAccount (customerName, balance) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
}

BankAccount.prototype.withdraw = function (amount){
    this.balance -= amount;
}

// Opening form

const createForm = document.getElementById(`create`);
const customerName = document.getElementById(`name`);
const balance = document.getElementById(`balance`);

// Deposite form

const depositForm = document.getElementById(`deposit`);
const dpAccountNumber = document.getElementById(`D-accountnumber`);
const depositAmount = document.getElementById(`D-amount`);

// Withdraw form 

const withdrawFrom = document.getElementById(`withdraw`);
const wdAccountNumber = document.getElementById(`W-accountnumber`);
const withdrawAmount = document.getElementById(`W-amount`);


const customers = [];


createForm.addEventListener(`submit`,(e) => {
    e.preventDefault();
    const customer = new BankAccount (customerName.value, +balance.value)
    customers.push(customer)
     console.log(customers);
})


depositForm.addEventListener(`submit`, (e) => {
    e.preventDefault();
   const found = customers.find((name) => name.accountNumber === +dpAccountNumber.value);
   found.deposit( +depositAmount.value);
   console.log(found)
})

withdrawFrom.addEventListener(`submit`, (e) =>{
    e.preventDefault();
    const found = customers.find((name) => name.accountNumber === +wdAccountNumber.value);
    found.withdraw(+withdrawAmount.value);
    console.log(found)
})


