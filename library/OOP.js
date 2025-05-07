function BOOK(title, author, pages, read) {
	if (!new.target) {
		throw Error("You must use the 'new' operator to call the constructor");
	}
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = () => {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
	};
}

const master = new BOOK("master", "ridwan", "20", "read");
console.log(master.info());

function Player(name, marker) {
	this.name = name;
	this.marker = marker;
	this.sayName = function () {
		console.log(this.name);
	};
}

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");
player1.sayName();
player2.sayName();

function createUser(name) {
	const discordName = "@" + name;

	let reputation = 0;
	const getReputation = () => reputation;
	const giveReputation = () => reputation++;

	return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
	discordName: josh.discordName,
	reputation: josh.getReputation(),
});

function createPlayer(name, level) {
	const user = createUser(name);

	const increaseLevel = () => level++;
	return Object.assign({}, user, { increaseLevel });
}

const newPlayer = createPlayer("ope");
console.log(newPlayer);

const Formatter = (() => {
	let timesRun = 0;

	const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
	const setTimesRun = () => {
		log("Setting times run");
		++timesRun;
	};

	const makeUppercase = (text) => {
		log("Making uppercase");
		setTimesRun();
		return [text.toUpperCase(), timesRun];
	};

	return {
		makeUppercase,
		timesRun,
	};
})();

// console.log(Formatter.makeUppercase("tomek"));

class MyClass {
	constructor(value) {
		this._value = value; // private field (conventionally)
	}

	get value() {
		return this._value * 2; // Transforms the value when accessed
	}
}

const obj = new MyClass(10);
console.log(obj.value);

class Clock {
	#timer;

	constructor({ template }) {
		this.template = template;
	}

	render = () => {
		const date = new Date();

		let hours = date.getHours();
		if (hours < 10) hours = `0${hours}`;

		let mins = date.getMinutes();
		if (mins < 10) mins = `0${mins}`;

		let secs = date.getSeconds();
		if (secs < 10) secs = `0${secs}`;

		const output = this.template
			.replace("h", hours)
			.replace("m", mins)
			.replace("s", secs);

		console.log(output);
	};

	stop = () => {
		clearInterval(this.#timer);
	};

	start = () => {
		this.render();
		this.#timer = setInterval(this.render, 1000);
	};
}

const clock = new Clock({ template: "h:m:s" });
clock.start();
