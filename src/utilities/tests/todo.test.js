/* eslint-disable no-undef */
import todo from "../todo/todo";

describe("Testing TODO", () => {
	let func = () => {};
	beforeEach(() => {
		func();
	});

	it("Expect new TODO instance to have #debug off", () => {
		expect(todo.debug).toBe(false);
		func = () => {
			todo.off();
			todo.clear();
		};
	});

	it("Adding item should increase length", () => {
		todo.add("test #1");
		expect(todo.length).toEqual(1);
		todo.add("test #2");
		expect(todo.length).toEqual(2);
	});

	it("Adding same todo twice shold not increase length", () => {
		todo.add("test");
		expect(todo.length).toEqual(1);
		todo.add("test");
		expect(todo.length).toEqual(1);
	});

	it("Clearing todo should set length to 0", () => {
		todo.clear();
		expect(todo.length).toEqual(0);
	});

	it("Try to set debug to ON using on method", () => {
		todo.on();
		expect(todo.debug).toBe(true);
	});

	it("Try to set debug to OFF using off method", () => {
		todo.on();
		todo.off();
		expect(todo.debug).toBe(false);
	});

	it("Try to toggle debug using toggle method", () => {
		todo.toggle();
		expect(todo.debug).toBe(true);
		todo.toggle();
		expect(todo.debug).toBe(false);
	});

	it("Try to log something with debug when turned ON", () => {
		todo.on();
		console.log = jest.fn();
		todo.add("test");
		expect(console.log).toHaveBeenCalled();
	});

	it("Try to log something with debug when turned OFF", () => {
		console.log = jest.fn();
		todo.add("test");
		expect(console.log).not.toHaveBeenCalled();
	});

	it("Try and fail to change TODO property debug", () => {
		expect(() => {
			todo.debug = true;
		}).toThrow(Error);
	});
});
