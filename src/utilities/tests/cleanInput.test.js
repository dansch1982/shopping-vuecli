/* eslint-disable no-undef */

import cleanInput from "../cleanInput";

describe("Testing cleanInput", () => {
	const mockFn = jest.fn();
	const event = { preventDefault: mockFn, key: "" };
	beforeEach(() => {
		event.key = "";
		event.preventDefault.mock.calls.length = 0;
	});

	it("Should call event.preventDefault x times if event.key is not acceptable letter", () => {
		const start = 32; // Skip ASCII control characters and start with space charcode
		const end = 255;

		for (let i = start; i < end; i++) {
			if (i === 127) continue; // Skip DEL charcode
			const letter = String.fromCharCode(i);
			event.key = letter;
			cleanInput(event);
		}
		/**
		 * Letters of the Swedish alphabet, times two (lowercase and uppercase).
		 * All numbers.
		 * Space.
		 */
		const acceptable = 29 * 2 + 10 + 1;

		/**
		 * calls.length should be difference between end and start - 1 (skipped del charcode) - acceptable letters.
		 */
		expect(event.preventDefault.mock.calls.length).toEqual(end - start - 1 - acceptable);
	});

	it("Should not call event.preventDefault if event.key is an acceptable letter", () => {
		const letters = "1234567890 abcdefghijklmnopqrstuvwxyzåäö ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";
		for (let i = 0; i < letters.length; i++) {
			const letter = letters[i];
			event.key = letter;
			cleanInput(event);
		}
		expect(event.preventDefault).not.toHaveBeenCalled();
	});

	it("Should call event.preventDefault if event.key is not an acceptable letter", () => {
		const letters = "hello!";
		for (let i = 0; i < letters.length; i++) {
			const letter = letters[i];
			event.key = letter;
			cleanInput(event);
		}
		expect(event.preventDefault).toHaveBeenCalled();
	});
});
