function* foo(){
    yield "one";
    yield "two";
    yield "three";
    return "end"
}
let result = foo();
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
/*
for(let r of result){
    console.log(r);
}
*/
/*
let item ;
while(!(item = result.next()).done){
    console.log(item.value);
}
*/


