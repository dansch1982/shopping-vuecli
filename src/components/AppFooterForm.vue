<template>
	<section>
		<section class="inputs">
			<input type="text" placeholder="Product name." @keypress.enter="submit" ref="name" />
			<input type="number" min="1" @keypress.enter="submit" ref="amount" />
		</section>
		<section class="buttons">
			<button @click="submit">Add</button>
		</section>
	</section>
</template>

<script>
import todo from "../utilities/todo";
export default {
	mounted() {
		this.reset();
	},
	methods: {
		submit() {
			for (const key in this.$refs) {
				const element = this.$refs[key];
				if (!element.value) {
					return element.focus();
				} else if (key === "name") {
					todo.add("check if item is already in list");
				}
			}
			/* const product = {
				[this.$refs.name.value]: this.$refs.amount.value,
			}; */
			todo.add("add item to shoppinglist");
			this.reset();
		},
		reset() {
			this.$refs.name.value = null;
			this.$refs.amount.value = 1;
			this.$refs.name.focus();
		},
	},
};
</script>

<style scoped lang="scss">
@import "../style/imports.scss";
section {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: 600px;
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
			border: none;
			outline: none;
			padding: 0.5rem 1rem;
			background-color: $cta;
			color: $background;
			&:hover {
				cursor: pointer;
			}
		}
	}
}
</style>
