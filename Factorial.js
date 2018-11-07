function Factorial(n){
    return n===0 ? 1: n===1 ? 0: (n-1)*(Factorial(n-1)+Factorial(n-2))    
}

console.log(Factorial(6));