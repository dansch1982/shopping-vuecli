import typeCheck from "../typeCheck";

//@ts-check
/**Todo logger*/
class Todo {
	#debug;
	#todoList = [];
	#iterator = 0;
	constructor(bool = false) {
		typeCheck(arguments, [Boolean(), undefined]);
		this.#debug = bool;
	}
	/**
	 * Get state of #debug
	 */
	get debug() {
		return this.#debug;
	}
	/**
	 * Get length of #todoList
	 */
	get length() {
		return this.#todoList.length;
	}
	/**
	 * Clear all items in the #todoList
	 */
	clear() {
		this.#todoList.length = 0;
	}
	/**
	 * Add a todo to the #todoList
	 * @param  {...any} what - Message to log.
	 */
	add(...what) {
		if (
			!this.#todoList.some((todo) => {
				return JSON.stringify(todo.what) === JSON.stringify(what);
			})
		) {
			const stack = Array.from(new Error().stack.split("\n")).map((item) => (item = item.trim()));
			const [, , thirdLine] = stack;
			const from = thirdLine.substring(thirdLine.indexOf("(") + 1, thirdLine.length - 1);
			this.#todoList.push({
				from: from,
				what: [...what],
			});
			if (this.#debug) {
				this.last();
			}
		}
	}
	/**
	 * Get last entry in #todoList
	 */
	last() {
		const length = this.#todoList.length;
		const { from, what } = this.#todoList[length - 1];
		const object = {
			number: length,
			from: from,
			what: what,
		};
		this.#print(object);
	}
	/**
	 * Get first entry in #todoList
	 */
	first() {
		const index = 0;
		const { from, what } = this.#todoList[index];
		const object = {
			number: index + 1,
			from: from,
			what: what,
		};
		this.#print(object);
	}
	/**
	 * Prints a "todo" object
	 * @param {Object} object 
	 */
	#print(object) {
		const { number, from, what } = object;
		console.log(`${number ? `#${number}\n` : ""}WHERE\n\t${from}\nWHAT\n\t${what.join("\n\t")}`);
	}
	/**
	 * Print all todos in #todoList
	 */
	list() {
		console.log("TODO\n----");
		for (const [index, todo] of this.#todoList.entries()) {
			const { from, what } = todo;
			const object = {
				number: index + 1,
				from: from,
				what: what,
			};
			this.#print(object);
		}
	}
	next() {
		const { from, what } = this.#todoList[this.#iterator]
			? this.#todoList[this.#iterator++]
			: (() => {
					this.#iterator = 0;
					return this.#todoList[this.#iterator++];
			})();
		const object = {
			number: this.#iterator,
			from: from,
			what: what,
		};
		this.#print(object);
	}
	/**
	 * Change state of #debug to true.
	 */
	on() {
		this.#debug = true;
		console.log("TODO is ON");
	}
	/**
	 * Change state of #debug to false.
	 */
	off() {
		this.#debug = false;
		console.log("TODO is OFF");
	}
	/**
	 * Toggle #debug between true and false.
	 */
	toggle() {
		this.#debug = !this.#debug;
		console.log(`TODO is ${this.#debug ? "ON" : "OFF"}`);
	}
}
export default new Todo();