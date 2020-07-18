let sales=+prompt("Enter the sales");
let commission;
if(sales>=0 && sales<=5000)
{
    commission=2;
}
else if(sales>=5001 && sales<=10000)
{
    commission=5;
}
else if(sales>=10001 && sales<=20000)
{
    commission=7;
}
else if(sales>20000)
{
    commission=10;
}
console.log(sales*commission);