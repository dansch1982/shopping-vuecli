import todo from "../todo";

describe("Testing TODO", () => {
	beforeEach(() => {
		/**
		 * Reset TODO before each test.
		 */
		todo.off();
	});

	it("Test new instance of TODO is false", () => {
		expect(todo.todo).toBe(false);
	});

	it("Try to log something with TODO when turned off.", () => {
		console.log = jest.fn();
		todo.log("test");
		expect(console.log).not.toHaveBeenCalled();
	});

	it("Try to set TODO to on using on method.", () => {
		todo.on();
		expect(todo.todo).toBe(true);
		console.log = jest.fn();
		todo.log("test");
		expect(console.log).toHaveBeenCalledWith("TODO", "test");
	});

	it("Try to toggle TODO using toggle method.", () => {
		todo.toggle();
		expect(todo.todo).toBe(true);
		todo.toggle();
		expect(todo.todo).toBe(false);
	});

	it("Try to log something with TODO when turned on.", () => {
		todo.on();
		console.log = jest.fn();
		todo.log("test");
		expect(console.log).toHaveBeenCalledWith("TODO", "test");
	});

	it("Try and fail to change TODO property todo.", () => {
		expect(() => {
            todo.todo = true
        }).toThrow(Error);
	});
});
