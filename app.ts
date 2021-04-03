// Typescript Objects
// // Option 1
// const person: {
//     name: string;
//     age: number
// } = {
//     name: 'Art',
//     age: 27
// }

// console.log(person.name);

// // Option 2 (preferred)
// const person =  {
//     name: 'Art',
//     age: 27,
// }

// console.log(person.name);

// // Typescript Arrays
// const phone = {
//     price: 15000,
//     apps: ['Maps', 'Message', 'Media']
// }
// for (const app of phone.apps){
//     console.log(app.toUpperCase());
// }

// let hobbies : string[];
// hobbies = ['Basketball', 'Football', 'Weightlifting'];

// // Typescript Tuples
// const employee: {
//     name: string;
//     address: [string, number]   // city, zipcode format
// } = {
//     name: 'Art',
//     address: ['Chicago, IL', 60666]
// }

// console.log(employee.address);

// // Typescript: Literal & Union Types
// function combine(
//     input1: number | string, 
//     input2: number | string, 
//     resultConversion: 'as-number' | 'as-text'
// ) {
//     let result;
//     if(typeof input1 == 'number' && input2 == 'number' || resultConversion == 'as-number'){
//         result = +input1 + +input2;
//     } else {
//         result = input1.toString() + input2.toString ();
//     }
//     return result;
// }

// const addTotal = combine(24,23,'as-number');
// console.log(addTotal);

// Function Types and Callbacks
function addPassPrint(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
}

addPassPrint(3,5, (result) => {
    console.log(result)
})