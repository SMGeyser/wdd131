// variables and constants
const PI = 3.14
let r = 3;
let a = r * r * PI; 

console.log(a);

r = 20;
a = r * r * PI
console.log(a);

r = 50
a = r * r * PI
console.log(a);

// type coersion

const one = 1;
const two = '2';

let result = 1 * 2;
console.log(result)

result = one + Number(two)
console.log(result)


let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
                    