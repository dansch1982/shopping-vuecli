// @ts-check
/**
 * Removes leading, trailing and double spaces in string and returns lowercase.
 * @param {String} string - String from HTML input value.
 * @returns {String} - Lowercase string with leading, trailing and double spaces removed.
 */
function formatInput(string) {
	if (!string) {
		string = "";
	}
	return string
		.toLowerCase()
		.replace(/\s{2,}/g, " ")
		.trim();
}
export default formatInput;
