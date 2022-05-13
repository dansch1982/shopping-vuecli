import typeCheck from "./typeCheck";

//@ts-check
/**Todo logger if #todo is true */
class Todo {
	#todo;
	/**
	 * Create instance of Todo with #todo set to true or false.
	 * @param {Boolean} bool - Set state of #todo.
	 */
	constructor(bool = false) {
		typeCheck(arguments, [Boolean(), undefined]);
		this.#todo = bool;
	}
	get todo() {
		return this.#todo;
	}
	/**
	 * Console.log a message if #todo is true.
	 * @param  {...any} msg - Message to log out.
	 */
	log(...msg) {
		if (this.#todo) {
			console.log("TODO", ...msg);
		}
	}
	/**
	 * Change state of #todo to true.
	 */
	on() {
		this.#todo = true;
		console.log("TODO is ON");
	}
	/**
	 * Change state of #todo to false.
	 */
	off() {
		this.#todo = false;
		console.log("TODO is OFF");
	}
	/**
	 * Toggle #todo between true and false.
	 */
	toggle() {
		this.#todo = !this.#todo;
		console.log(`TODO is ${this.#todo ? "ON" : "OFF"}`);
	}
}
export default new Todo();
