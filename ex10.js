function inverter(word){
    // 1 - split: quebra a palavra em um array
    // 2 - reverse: inverte os itens (deixa de trás pra frente)  
    // 3 - join: junta as posições do array em uma única string
    return word.split("").reverse().join("")
}

console.log(inverter("Jorge"))