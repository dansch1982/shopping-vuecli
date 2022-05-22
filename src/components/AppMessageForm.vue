<template>
	<section>
		<section class="inputs">
			<input type="text" placeholder="Message" @keypress.enter="send" v-model="message" ref="message" />
		</section>
		<section class="buttons">
			<button @click="send">Send</button>
		</section>
	</section>
</template>

<script>
import { messages, formatInput } from "@/exports";

export default {
	data() {
		return {
			messages: messages,
			message: "",
		};
	},
	mounted() {
		this.reset();
	},
	methods: {
		send() {
			const refs = this.$refs;
			for (const ref in refs) {
				const element = refs[ref];
				if (element !== null && element.tagName === "INPUT" && !element.value) {
					element.focus();
					return console.log(ref, "is missing.");
				}
			}
			const message = {
				date: new Date(),
				message: formatInput(this.message),
			};
			messages.add(message);
			this.reset();
		},
		reset() {
			this.message = null;
			this.$refs.message.focus();
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/style/imports";
section {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 1rem;
	.inputs {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		input {
			@include input;
			width: 100%;
		}
	}
	.buttons {
		button {
			@include button;
		}
	}
}
</style>
