import formatInput from "./utilities/formatInput";
import cleanInput from "./utilities/cleanInput";
import items from "./utilities/items";
import socket from "./utilities/websocket"
import messages from "./utilities/messages"

socket.addEventListener("message", (message) => {
	const key = JSON.parse(message.data);
	console.log(key);
	switch (key) {
		case "getList":
			items.getList();
			break;
		default:
			break;
	}
});

export { items, messages, cleanInput, formatInput };
