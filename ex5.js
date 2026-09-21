const fruits = ["apple", "banana", "pineapple", "strawberry"]

// adicionar o item kiwi
fruits.push("Kiwi")
// tirar o primeiro item
fruits.shift()

fruits.map((fruit) => {
    console.log(fruit)
})

for(fruit in fruits){
    console.log(fruit)
}