// const promiseOne = new Promise(function(res, rej){
//     // do an async task
//     // db calls, cryptography, network
//     setTimeout(function(){
//         console.log("Async task is complete");
//         res();
//     }, 1000)
    
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// ------------------

// new Promise(function(res, rej){
//     setTimeout(function(){
//         console.log("Async task 2");
//         res();
//     }, 1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })

// ---------------

// const promiseThree = new Promise(function(res, rej){
//     setTimeout(function(){
//         res({
//             username: "Harish", email: "harish@example.com"
//         })
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// ----------------

// const promiseFour = new Promise(function(res, rej){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             res({username: "Harish", password: "123"});
//         }else{
//             rej('Error: Something went wrong');
//         }

//     }, 1000);
// })
// promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function(err){
//     console.log(err);
// })
// .finally(() => {
//     console.log("The promise is either resolved or rejected");
// })

// ---------------

// const promiseFive = new Promise((res, rej) => {
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             res({username: "javascript", password: "123"});
//         }else{
//             rej('Error: Javascript went wrong');
//         }

//     }, 1000);
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive();

// ---------------------

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E :", error);
//     }
// }
// getAllUsers();

// ------------------

fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log("Fetch error: ", err);
})
.finally(() => {
    console.log( "Finally");
})