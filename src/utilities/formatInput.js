// @ts-check
/**
 * Removes leading, trailing and double spaces in string.
 * @param {String} input - String from HTML input value.
 * @returns {String} - Lowercase string with leading, trailing and double spaces removed.
 */
function formatInput(input) {
	return input
		.toLowerCase()
		.replace(/\s{2,}/g, " ")
		.trim();
}
export default formatInput;
