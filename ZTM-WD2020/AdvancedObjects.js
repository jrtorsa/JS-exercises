// reference type

var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};

//The output will be:
// object1 === object2 = TRUE
// object1 === object3 = FALSE
// This happens because JS is storing object1 and 2 in one box 
// with that value. object3 is getting stored at a different box!

//context vs scope(gest confused those two concepts)
// function b() {
// 	let a = 4;
// } If we console log of 'a' this: we' ll get a syntax error
// because 'a' is defined within the function.
// THIS IS SCOPE

//This one referes to the 'this' call.
//Basically what it does, is put you in context of where you are
//I.E. console.log(this) = window of the document
//You can see this more in use in the instantiaton section

// instantiation

class Player {
	constructor(name, type) {
		console.log('player', this);
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type)
		console.log('wizard', this);
	}
	play() {
		console.log(`WEEEEEE I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic')


















