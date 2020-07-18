function isPrime(num) {
    for (let index = 2; index <= (num/2); index++) {
        if(num %index==0){
            return false;
        }
    }
    return true;
}

let n=+prompt("Enter Number")

for (let index = 2; index <= n; index++) {
    if(isPrime(index)){
        console.log(index);
    }
}