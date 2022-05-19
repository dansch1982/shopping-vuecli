<template>
	<section>
		<section class="inputs">
			<input type="text" placeholder="Item name" @keypress.enter="submit" @keypress="cleanInput($event)" v-model="name" ref="name" desc="name" />
			<input type="number" min="1" @keypress.enter="submit" v-model="amount" ref="amount" desc="amount" />
		</section>
		<section class="buttons">
			<button @click="submit">Add</button>
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
		submit() {
			const { name, amount } = this.$data;
			const refs = Object.values(this.$refs);
			for (const ref of refs) {
				if (!ref.value) {
					ref.focus();
					return console.log(ref.getAttribute("desc"), "is missing.");
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
