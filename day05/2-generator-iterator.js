let obj = {"0":"terry","1":"larry","2":"tom"};

let AAA = "3";
obj[AAA] = "jacky";

obj[Symbol.iterator] = function* (){
    for(let key in obj){
        let val = obj[key];
        yield [key,val];
    }
}
obj.entries = obj[Symbol.iterator];


/*
for(let o of obj){
    console.log(o);
}
*/
/*
let iterator = obj[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
*/





