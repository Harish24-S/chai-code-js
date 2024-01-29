const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// -----USING MAP METHOD

// const newNums = myNumbers.map((num) => num + 10)

// CHAINING OF MULTIPLE METHODS

const newNums = myNumbers
                .map((num) => { return num * 10})
                .map((num) => { return num/2})
                .filter((num) => { return num >= 25})


console.log(newNums);


