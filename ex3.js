function isSigle(number){
    const age = number %2

    if(age === 0){
        return "É par!"
    }
    else{
        return "É ímpar"
    }
}

console.log(isSigle(2))