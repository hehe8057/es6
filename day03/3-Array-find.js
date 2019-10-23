let arr = [
    {name:"terry",age:12},
    {name:"tom",age:14},
    {name:"larry",age:13},
    {name:"jacky",age:18},
    {name:"vicky",age:11}
]
//let result = arr.find(item=>item.age === 13)
let result = arr.find(function(item){
    return item.age === 23
})
console.log(result);
