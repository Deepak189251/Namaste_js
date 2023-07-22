/*
const cart = ["shoe", "pants", "kurta"];
 createOrder(cart)
    .then((orderId) => {
        console.log(orderId)
        return orderId
    })
    .then((orderNo) => {
        return proceedToPayment(orderNo)
        
    })
    .then((paymentInfo) => {
        console.log(paymentInfo)
    })

    .catch((err) => console.log(err.message))

function createOrder (prod){
    const promise = new Promise((resolve, reject) => {

        if(cart.length === 3){
            const orderId = 128475 
            resolve(orderId);
        }

        else{
            const err = new Error("Cart is not validated");
            reject(err)
        }
    })

    return promise
}

function proceedToPayment (orderId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Payment Successfull of order no: " + orderId)
        }, 5000)
       // resolve("Payment Successfull of order no: " + orderId)
})
}
*/
/*
const datas = [
    {name: "deepak", profession: "student"}
]

const getData = (data) => {
   setTimeout(() => {
    let output = ""
    data.forEach((no) => {
        output += `<li>${no.name}</li>`
    })
    console.log(output)
    document.getElementById("names").innerHTML = output
   }, 0);
}

const pushData = (res, fun) => {
    setTimeout(() => {
        let newName = {name: "lucky", profession: "student"}
        res.push(newName)
        console.log(res)
        fun(res) 
    }, 4000)
   
}

pushData(datas, getData)



async function weatherData (){

    let cuttackWeather = new Promise((resolve, reject) => {
        setTimeout(() => { resolve("37 Deg.")}, 2000)
    })

    let puriWeather = new Promise((resolve, reject) =>{
        setTimeout(()=> { resolve("33 Deg.")}, 4000)
    })
    

    cuttackWeather.then((res) => {
        alert(res)
    })
    puriWeather.then((res) => {
        alert(res)
    })
}

weatherData()

var x = 5;
 
function num () {
    console.log(x)
    var x 
}

num()


const animal = [1, 2, 3, 4, 5];

function multiply (arr) {
    console.log(arr)
    if(arr.length <= 0){
        return 1;
    }
    else return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1))
}

 console.log(multiply(animal)) 



var a = 1;
function x (){
    if (a) var b = 3;
    console.log(a)
}
x();
*/"https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.462521&lng=85.8829895&page_type=DESKTOP_WEB_LISTING"

const getData = async() => {
    let data = "Hello World";
    return data;

    }

 console.log(1)
 getData()
 .then((data) => {
     console.log(data);
 })
 console.log(3)