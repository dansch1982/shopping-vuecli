import { reactive } from "vue";

const messages = reactive({
	baseURL: "http://localhost:1234/",
	messages: [],
	getMessages() {
		const url = new URL("getMessages", this.baseURL);
		fetch(url).then((response) => {
			if (response.status === 200) {
				response.json().then((messages) => {
					this.messages = messages;
				});
			}
		});
	},
	send(message, callback = undefined, fallback = undefined) {
		let date = new Date().toISOString();
		date = date.substring(0, date.indexOf("T"));
		const object = {
			date: date,
			message: message,
		};
		const uri = "addMessage";
		this.post(uri, object, callback, fallback);
	},
	remove(id, callback = undefined, fallback = undefined) {
		const object = {
			id: id,
		};
		const uri = "removeMessage";
		this.post(uri, object, callback, fallback);
	},
	post(uri, object, callback, fallback) {
		const url = new URL(uri, this.baseURL);
		fetch(url, {
			method: "POST",
			body: JSON.stringify(object),
		}).then((response) => {
			if (response.status === 200) {
				if (callback) {
					callback(object);
				}
			} else {
				if (fallback) {
					fallback(object);
				}
			}
		});
	},
});
export default messages;
