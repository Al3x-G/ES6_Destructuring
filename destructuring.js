/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

/********************************************** */
// Destructuring arrays
let ages = [30, 26, 27];
//let john = ages[0];
//let mary = ages[1];
//let joe = ages[2];
let [john, mary, joe] = ages;

console.log(john, mary, joe);

/* define an array of variable names, john, mary and joe. 
Set it equal to ages, and through destructuring assignment, 
ES6 automatically assigns the first value in the array to the variable john,
the second to the variable mary, and the third to the variable joe. 
Using ES6 destructuring assignment, we were able to reduce the three variable 
assignments above to just a single line of code.*/ 


/********************************************** */
// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);



/********************************************** */
// Destructuring subsets
let languages = [ "english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);
/*log johnNative and johnSecondary to the console, the values english and french
have been assigned as expected. Further, you can skip values by leaving the commas
in place of the values you want to skip. If Mary speaks spanish and german, you can easily 
assign those two specific values to maryNative and marySecondary. To skip  them, 
just place two commas in front of maryNative, one to skip English and one to  skip French. 
Now, I can console log maryNative and marySecondary and see that they have  
the values spanish and german as expected.  */

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);



let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};
/*Since the values in an object are represented by their property names, I can destructure  
only the things I need, such as firstLanguage and thirdLanguage, just by using their property names. */
let { firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);


/********************************************** */
// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others);

let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegatarian",
    andrea: "steak",
};
let {brian, anna, ...rest} = favouriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);
