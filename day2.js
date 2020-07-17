//Question 1
let input = prompt("What is your name ? ", "E.g. Shubham Deepak Kamble");
console.log(input);

let name = "shubham deepak kamble ";
let name2 = " asmita deepak kamble";

//String :
//concat
let a = name.concat(name2);
console.log(a);

//includes
console.log(a.includes("kamble"));

//repeat 
console.log(name.repeat(2));

//replace 
let b = a.replace("deepak", "dipak");
console.log(b);
let c = a.replace(/deepak/g, "dipak");
console.log(c);

//search
console.log(a.search("kamble"));
console.log(a.search(/Kamble/i));//case-insensitive search


//slice
console.log(name.slice(0, 5));

//substring
console.log(name2.substring(5, 1));//substring(5, 1)==substring(1, 5)

//Array
let fruits = ["banana","mango","apple","orange"];
let cars = ["honda","maruti","porsche","skoda"];
//concat
let x = fruits.concat(cars);
console.log(x);

//copyWithin
console.log(x.copyWithin(3,0,2));

//fill
console.log(x.fill("kiwi",2,4));

//includes
console.log(x.includes("kiwi"));

//join
console.log(fruits.join(" and "));

//length
console.log(x.length);

//map
var numbers = [4, 9, 16, 25];
var y = numbers.map(Math.sqrt);
console.log(y);

//slice
console.log(x.slice(3,7));

//splice
console.log(x.splice(3,2,"dragonfruit", "watermelon"));