/* const baseHOST = "http://localhost:1234/";
const HOST = baseHOST.replace(/^http/, "ws"); */

const HOST = location.origin.replace(/^http/, 'ws')
const socket = new WebSocket(HOST);

socket.addEventListener("open", () => {
	console.log("Connection", true);
});

export default socket;
