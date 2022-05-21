/* eslint-disable no-undef */
import formatInput from "../formatInput"

describe("Testing formatInput", () => {
    it("Expect leading space to be removed", () => {
        const string = " test"
		expect(formatInput(string)).toBe("test");
	});

    it("Expect trailing space to be removed", () => {
        const string = "test "
		expect(formatInput(string)).toBe("test");
	});

    it("Expect both leading and trailing space to be removed", () => {
        const string = " test "
		expect(formatInput(string)).toBe("test");
	});

    it("Expect double spaces between words to be reduced to one", () => {
        const string = "two  words"
		expect(formatInput(string)).toBe("two words");
	});

    it("Expect three spaces between words to be reduced to one", () => {
        const string = "two   words"
		expect(formatInput(string)).toBe("two words");
	});

    it("Expect to format ugly spaced string into nicer spaced string", () => {
        const string = "   these         are  some words                   "
		expect(formatInput(string)).toBe("these are some words");
	});

    it("Expect UPPERCASE letter to be converted to lowercase", () => {
        const string = "TEST"
		expect(formatInput(string)).toBe("test");
	});
})