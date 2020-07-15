// var declarations are globally scoped or function scoped
// let and const are block scoped.
var a=10;
const n=30;
{
    
    let a=15;
    //let a=25;  let variables can be updated but not re-declared
    console.log(a);
    a=20;
    console.log(a);
    const n=50;
    console.log(n);
}
var a=60; //var variables can be updated and re-declared within its scope
console.log(a);
console.log(n);

var b;
let d;
console.log(typeof d); //var & let variables are initialized with undefined 
                       //  declared without being initialized

// const c; const must be initialized during declaration.