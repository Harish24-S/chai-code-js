// Immediately Invoked Function Expressions (IIFE)

// iife syntax -> (function definition)(function execution)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// yaha pe line 8 mai agr hum semicolon nhi lagayenge toh function immediately execute toh ho jayega but usko stop kab karna hai voh pata nhi chalega, toh isiliye semicolon use karna padega varna doosra iife nhi chalega

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


// global scope ke pollution ke problem ko hatane ke liye hum iife ko use karte hai