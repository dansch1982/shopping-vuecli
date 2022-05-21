import formatInput from "./utilities/formatInput";
import cleanInput from "./utilities/cleanInput";
import items from "./utilities/items";
import socket from "./utilities/websocket"


socket.addEventListener("message", (message) => {
	const key = JSON.parse(message.data);
	console.log(key);
	switch (key) {
		case "reload":
			items.getList();
			break;
		default:
			break;
	}
});

export { items, cleanInput, formatInput };
