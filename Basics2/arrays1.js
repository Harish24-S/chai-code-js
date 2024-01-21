// array

const myArr = [1,2,3,4,5]
const myHeros = ["Ironman", "Captain America", "Thor"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);
// console.log(myHeros[1]);


// array methods

myArr.push(6)
myArr.push(7)
// console.log(myArr);
myArr.pop()
// console.log(myArr);

myArr.unshift(7)
// console.log(myArr);
myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(9));

// let arrSorted = myArr.sort((a, b)=> a-b)

const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice and splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3);
console.log("B ", myn1);

const myn2 = myArr.splice(1,3); // splice removes the elements from the original array
console.log("C ", myn2);
console.log(myArr);


