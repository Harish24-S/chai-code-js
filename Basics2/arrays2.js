const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

console.log(marvel_heros.concat(dc_heros));

const all_heros = [...marvel_heros, ...dc_heros]
console.log(all_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
console.log(another_array);

const usable_array = another_array.flat(Infinity);
console.log(usable_array);


console.log(Array.isArray("Harish")); // checks if array or not
console.log(Array.from("Harish")); // converts it into array


console.log(Array.from({name: "harish"})); // does not convert the object directly to array


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));