let exp=prompt ("enter the operation");

let val =+prompt("enter the num1");
if(exp!='sqrt')
{
var val2=+prompt("enter the num2");
}
switch(exp)
{
    case'+': console.log(val + val2); break;
    case'-': console.log(val - val2); break;
    case'*': console.log(val * val2); break;
    case'sqrt':console.log(Math.sqrt(val));break;
    case'%':console.log(val%val2);break;
    default:console.log("invalid operation");
}