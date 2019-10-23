class Animal {
	// 构造函数
	constructor(name){
		this.name = name;
	}
	// 普通函数
	sayName(){
		console.log("我的名字为",this.name);
	}
}

class Dog extends Animal {
	constructor(name,age){
		super(name);
		this.age = age;
	}
	sayAge(){
		console.log("我的年龄为",this.age);
	}
}
let dog = new Dog("一休",2.5);
dog.sayName();
dog.sayAge();
