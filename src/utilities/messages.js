import { reactive } from "vue";

const messages = reactive({
	messages: [],
	add(message) {
		this.messages.push(message);
	},
});
for (let index = 0; index < 10; index++) {
	messages.messages.push({
		id: index,
		date: new Date(),
		message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, suscipit!",
	});
}
export default messages;
