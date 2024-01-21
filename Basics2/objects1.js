// singleton
// if object is made thru object literal then it is not singleton and if it is made thru constructor(Object.create) then it is singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Harish",
    "full name": "Harish Sarika",
    [mySym]: "mykey1",
    age: 18,
    location: "Bangalore",
    email: "harish@google.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "Wednesday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);

// create a symbol and put in the object and print it
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);


JsUser.email = "harish.openai.com"
console.log(JsUser.email);

// Object.freeze(JsUser)
JsUser.email = "harish@amazon.com"
console.log(JsUser.email);

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Heloo js user");
}
console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
JsUser.greetingTwo()




