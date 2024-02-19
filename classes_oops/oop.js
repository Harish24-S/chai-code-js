const user = {
    username: "harish",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("get user datils from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
user.getUserDetails();

// creating constructor function to create new users using a single function

function User(username, loginCount, signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }


    return this;     //-> even if we dont return it will return implicitly
}

const userOne = new User("harish", 7, true);
const userTwo = new User("akash", 8, false);
const userThree = new User("rakesh", 9, true);

console.log(userOne);
console.log(userTwo);

