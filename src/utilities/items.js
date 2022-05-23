import { reactive } from "vue";

const items = reactive({
	list: new Map(),
	baseURL: "http://localhost:1234/",
	getItems() {
		const url = new URL("getItems", this.baseURL);
		fetch(url).then((response) => {
			if (response.status === 200) {
				response.json().then((items) => {
					this.list.clear();
					items.forEach((item) => {
						for (const name in item) {
							const amount = item[name];
							this.list.set(name, amount);
						}
					});
				});
			}
		});
	},
	removeItem(item, callback = undefined, fallback = undefined) {
		const uri = "removeItem";
		this.post(uri, item, callback, fallback);
	},
	addItem(item, callback = undefined, fallback = undefined) {
		if (this.itemInList(item)) {
			console.log("Item already in list.");
		} else {
			const uri = "addItem";
			this.post(uri, item, callback, fallback);
		}
	},
	itemInList(item) {
		const { name, oldName = "" } = item;
		if (this.list.has(name.toLowerCase()) && name.toLowerCase() !== oldName.toLowerCase()) {
			return true;
		}
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

export default items;
