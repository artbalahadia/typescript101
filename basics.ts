// console.log('Hello!!');

// function add(n1: number, n2: number){
//     return n1 + n2;
// }

// const num1 = 234;
// const num2 = 876;

// const result = add(num1,  num2);

// console.log(result);

function foobar(count: number){
    for(var i = 0; i < count; i++){
        if(i % 2 == 0){
            console.log('foo');
        } else {
            console.log('bar');
        }
    }
}

console.log(foobar(12));
