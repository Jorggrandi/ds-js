function findBiggest(numbersList){
    let maior = numbersList[0]
    
    for(let i = 0;i < numbersList.length ;i++){
        if(numbersList[i] > maior){
            maior = numbersList[i]
        }
    }

    return maior
}

const list = [1,2,3,4,5,6]

console.log(findBiggest(list))