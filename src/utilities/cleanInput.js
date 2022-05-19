function cleanInput(event) {
	if (event.key.match("[a-öA-Ö0-9-_!,. ]+(?<!¤)$")) {
		return true;
	} else {
		event.preventDefault();
	}
}
export default cleanInput