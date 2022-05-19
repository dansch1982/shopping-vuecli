function formatInput(input) {
	return input
		.toLowerCase()
		.replace(/\s{2,}/g, " ")
		.trim();
}
export default formatInput;
