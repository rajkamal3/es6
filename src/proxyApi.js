console.clear();

// Traps

let person = {
	age: 24
};

let handler = {
	get: function (target, name) {
		return name in target ? target[name] : 'Non existent';
	}
};

var proxy = new Proxy(person, handler);

console.log(proxy.name);
