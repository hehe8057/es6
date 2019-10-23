let shopCar = new Map();
let line = {
    productId:1,
    productName:"可口可乐",
    productPrice:2.5,
    number:1
}

function addShopcar(item){
    //根据item.productId判断shopcar是否具有该产品，如果有更改数量，如果没有直接添加
    if(shopCar.has(item.productId)){
        shopCar.get(item.productId).number += item.number; 
    } else {
        shopCar.set(item.productId,item)
    }
}
addShopcar(line);
//首次购买北京方便面
addShopcar({productId:2,productName:"北京方便面",productPrice:1.0,number:1});
//再次购买北京方便面
addShopcar({productId:2,productName:"北京方便面",productPrice:1.0,number:1});
//再次购买可口可乐
addShopcar({productId:1,productName:"可口可乐",productPrice:2.5,number:3});


console.log(shopCar);


