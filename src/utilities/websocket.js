/* const baseHOST = "http://localhost:1234/";
const HOST = baseHOST.replace(/^http/, "ws"); */

const HOST = location.origin.replace(/^http/, "ws");
const socket = new WebSocket(HOST);

socket.addEventListener("open", heartbeat);
socket.addEventListener("ping", heartbeat);
socket.addEventListener("close", function clear() {
	clearTimeout(this.pingTimeout);
});

/* socket.on("open", heartbeat);
socket.on("ping", heartbeat);
socket.on("close", function clear() {
	clearTimeout(this.pingTimeout);
}); */

function heartbeat() {
	clearTimeout(this.pingTimeout);

	this.pingTimeout = setTimeout(() => {
		this.terminate();
	}, 30000 + 1000);
}

export default socket;
