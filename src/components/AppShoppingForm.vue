<template>
	<section>
		<section class="inputs">
			<input type="text" placeholder="Item name" @keypress.enter="add" @keypress="cleanInput($event)" v-model="name" ref="name" />
			<input type="number" min="1" @keypress.enter="add" v-model="amount" ref="amount" />
		</section>
		<section class="buttons">
			<button @click="add">Add</button>
		</section>
	</section>
</template>

<script>
import { items, cleanInput, formatInput } from "@/exports";
export default {
	data() {
		return {
			cleanInput: cleanInput,
			name: null,
			amount: 1,
		};
	},
	mounted() {
		this.reset();
	},
	methods: {
		add() {
			const { name, amount } = this.$data;

			const refs = this.$refs;
			for (const ref in refs) {
				const element = refs[ref];
				if (element !== null && element.tagName === "INPUT" && !element.value) {
					element.focus();
					return console.log(ref, "is missing.");
				}
			}

			const object = {
				name: formatInput(name),
				amount: parseInt(amount),
			};
			items.addItem(object, () => {
				this.reset();
			});
		},
		reset() {
			this.name = null;
			this.amount = 1;
			this.$refs.name.focus();
		},
	},
};
</script>

<style scoped lang="scss">
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
		}
		input[type="text"] {
			width: 80%;
		}
		input[type="number"] {
			text-align: center;
			width: 20%;
		}
	}
	.buttons {
		button {
			@include button;
		}
	}
}
</style>
