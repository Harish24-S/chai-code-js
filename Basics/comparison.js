// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); //(1)
console.log(null == 0); //(2)
console.log(null >= 0); //(3)

// the reason here is that equality check (==) and comparisons (>, <, >=, <=) work differently
// comparisons convert ull to a number traeting it as 0
// so thats y, in (1) it gives false as 0 is not greater than 0 and in (3) it gives true as 0 is equal to 0

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);