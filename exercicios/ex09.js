function didIPassed(grade1, grade2, grade3){
    const media = Number(grade1 + grade2 + grade3)/3

    if(media >= 7){
        return `Aluno reprovado com média ${media.toFixed(1)}`
    }else if( media >= 5){
        return `Aluno de recuperação com média ${media.toFixed(1)}` 
    }else{
        return `Aluno aprovado com média ${media.toFixed(1)}`
    }
}

console.log(didIPassed(10,10,10))