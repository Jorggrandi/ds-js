const list = ["maça","banana", "maça"]

function countOcorrencies(array){
    
    let counter = {}
    
    for(itens in array){
        if(counter[itens]){
            counter[itens] += 1
        }
        else{
            counter[itens] = 1
        }
    }

    return counter
}

console.log(countOcorrencies(list))