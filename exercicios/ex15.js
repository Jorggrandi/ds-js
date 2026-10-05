const users = [{
    name: "Jorge",
    age: 18
},{
    name: "Willa",
    age: 14
},{
    name: "Adrianes",
    age: 18
}]

function ageFilter(array){
    return array.filter((user) => {
        return user.age < 18
    })
} 

console.log(ageFilter(users))