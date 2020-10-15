console.clear();

class Person {
	constructor(name) {
		this.name = name;
	}

	greet(prefix) {
		console.log(`${prefix}Hello I'm ${this.name}`);
	}
}

let per = new Person();

console.log(Reflect.getPrototypeOf(per));
