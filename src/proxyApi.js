console.clear();

// Traps

// let person = {
// 	age: 24,
// 	name: 'Max'
// };

// let handler = {
// 	get: function (target, name) {
// 		return name in target ? target[name] : 'Non existent';
// 	},
// 	set: function (target, property, value) {
// 		if (value.length >= 2) {
// 			Reflect.set(target, property, value);
// 		}
// 	}
// };

// var proxy = new Proxy(person, handler);

// proxy.name = 'huell';

// console.log(proxy.name);

// Wrapping functions

function log(message) {
	console.log('Log entry created, message:' + message);
}

let handler = {
	apply: function (target, thisArg, argList) {
		if (argList.length === 1) {
			return Reflect.apply(target, thisArg, argList);
		}
	}
};

let proxy = new Proxy(log, handler);

proxy('hello', 'huell');
