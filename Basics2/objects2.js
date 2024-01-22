// const tinderUser = new Object()     // singleton object
// console.log(tinderUser);

const tinderUser = {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(`${regularUser.fullname.userfullname.firstname} ${regularUser.fullname.userfullname.lastname}`);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {...obj1, ...obj2, ...obj4}
const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "g@gmail.com"
    },
    {
        id: 3,
        email: "j@gmail.com"
    },
]

// console.log(users[0].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // gives an array of all the keys
// console.log(Object.values(tinderUser)); // gives an array of all the values

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// OBJECT DE-STRUCTURING
const {courseInstructor, price, coursename} = course;
console.log(courseInstructor, coursename, price);

// in react while using props we use destructuring
// example
// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")


// JSON format
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]