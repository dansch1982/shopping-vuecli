// @ts-check
/**
 * Removes leading, trailing and double spaces in string.
 * @param {String} string - String from HTML input value.
 * @returns {String} - Lowercase string with leading, trailing and double spaces removed.
 */
function formatInput(string) {
	return string
		.toLowerCase()
		.replace(/\s{2,}/g, " ")
		.trim();
}
export default formatInput;
