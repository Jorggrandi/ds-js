function conversorHot(celsius){
    const fahrenheit = (celsius * 9) / 5 + 32;
    return `${celsius} celsius equivalem a ${fahrenheit.toFixed(1)} em fahtrenheit`
}

console.log(conversorHot(2))