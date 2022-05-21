// @ts-check

/**
 * @typedef {Object} Event
 * @property {String} key
 * @property {Function} preventDefault
 */

/**
 * Calls event.preventDefault() if event.key is not acceptable letter.
 * @param {Event} event
 * @returns {Boolean}
 */

function cleanInput(event) {
	if (event.key.match("^[a-zA-Z0-9åäöÅÄÖ ]*$")) {
		return true;
	} else {
		event.preventDefault();
		return false;
	}
}
export default cleanInput;
