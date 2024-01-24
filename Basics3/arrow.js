const user = {
    username: "Harish",
    price: 999,

    welcomeMessage: function(){
        console.log(`Welcome ${this.username}! price is ${this.price}`)
        console.log(this);
    }
}
user.welcomeMessage(); // Welcome Harish! price is 999
// console.log(this);  {} empty context
user.username = "sam"
user.welcomeMessage();  // Welcome sam! price is 999


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai() // global object

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "hitesh"
    console.log(this.username);
}
chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  -> implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})   // to return an object u have to wrap it in round bracket


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(() => {})




