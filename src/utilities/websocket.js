const baseHOST = "http://localhost:1234/";
const HOST = baseHOST.replace(/^http/, "ws");
const socket = new WebSocket(HOST);

export default socket;
