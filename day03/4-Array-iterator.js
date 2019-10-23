let arr = ["terry","larry","tom","jacky"];
//1. 获取迭代器
let values_iterator = arr.values();
//2. 通过迭代器获取数组中的元素
let item ;
while(!(item = values_iterator.next()).done){
    console.log(item.value);
}
//3. 使用for-of遍历迭代器
let entry_iterator = arr.entries();
for(let entry of entry_iterator){
    console.log(entry);
}
//4. 使用for-of遍历数组
for(let item of arr){
    console.log(item);
}
