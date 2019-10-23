let array_like = {"0":"terry","1":"larry",length:2}

console.log(array_like);
// 从数组对象中解构出来slice方法
let {slice} = [];
let array = slice.call(array_like,0)

console.log(array);

console.log(array_like);
console.log(Array.from(array_like));

let set = new Set([1,2,3,1,2,4,5,6]);
console.log(set);
console.log(Array.from(set));






