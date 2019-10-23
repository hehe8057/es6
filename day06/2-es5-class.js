  function Animal(name){
			this.name= name;
		}
		Animal.prototype.sayName = function(){
			console.log("my name is ",this.name);
		}

		function Dog(name,age) {
			// 借用构造函数继承
			Animal.call(this,name)
			this.age = age;
		}
		// 原型链继承
		Dog.prototype = new Animal();
		Dog.prototype.sayAge = function(){
			console.log("my age is",this.age);
		}

		let d = new Dog("一休",2);
		d.sayName()
		d.sayAge();
