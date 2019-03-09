let favMovie = (movie = 'The Room', name = 'world') => {
    console.log(`my name is ${name} and my favorite movie is ${movie}.`)
}

// SAME AS ABOVE
// let favMovie = (movie = 'The Room', name = 'world') => console.log(`my name is ${name} and my favorite movie is ${movie}.`);

// let getFirstName = (fullname) => {
//     let splitfullname = fullname.split(' ');
//     return console.log(splitfullname[0]);
// }; 

// let getFirstName = (fullname) => {
//     let splitfullname = fullname.split(' ');
//     return console.log(splitfullname[0]);
// }; 
let fullname1 = {
    firstname: 'Zishan',
    lastname: 'Ali'
};

let getFirstName = (fullname) => console.log(fullname.firstname);

favMovie('Run with the Wind');

getFirstName(fullname1);

let lastFunc = (num1, num2) => ({
    exp: num1^num2,
    product: num1 * num2
});

let stats = lastFunc(4,12);
console.log(`The expo of the numbers is ${stats.exp} and the product of the numbers is ${stats.product}`);
