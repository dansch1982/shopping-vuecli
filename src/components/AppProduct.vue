<template>
	<section v-if="!edit" class="container" ref="container">
		<article class="product" @click="remove">
			<article class="checkbox"><article class="checkmark scale-0 opacity-0" ref="checkmark"></article></article>
			<span v-if="item[1] > 1" class="span">{{ item[1] }}st</span>
			<span class="span">{{ item[0] }}</span>
		</article>

		<article class="buttons">
			<button class="button" @click.stop="toggleEdit" ref="update">
				<img src="@/assets/edit.svg" alt="" />
			</button>
		</article>
	</section>

	<section v-else class="container">
		<article class="inputs">
			<input type="text" v-model="name" @keypress.enter="update" @keypress="cleanInput($event)" ref="name" />
			<input type="number" min="1" v-model="amount" @keydown.enter="update" ref="amount" />
		</article>

		<article class="buttons">
			<button class="button" @click="update">
				<img src="@/assets/ok.svg" alt="" />
			</button>
			<button class="button" @click="toggleEdit">
				<img src="@/assets/cancel.svg" alt="" />
			</button>
		</article>
	</section>
</template>
<script>
import { items, cleanInput, formatInput } from "@/exports";

export default {
	data() {
		return {
			edit: false,
			removing: false,
			name: "",
			amount: 0,
			cleanInput: cleanInput,
		};
	},
	beforeMount() {
		this.reset();
	},
	methods: {
		remove() {
			this.removing = true;
			const container = this.$refs.container;
			const checkmark = this.$refs.checkmark;
			checkmark.classList.remove("opacity-0", "scale-0");
			checkmark.classList.add("opacity-1", "scale-1");
			checkmark.addEventListener(
				"transitionend",
				() => {
					container.classList.add("opacity-0");
					container.addEventListener("transitionend", (event) => {
						if (event.target === container) {
							this.$emit("removeItem", this.item);
						}
					});
				},
				{ once: true }
			);
		},
		update() {
			const [oldName, oldAmount] = this.item;
			const { name, amount } = this.$data;

			if (name === oldName && amount === oldAmount) {
				return this.toggleEdit();
			}

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
				oldName: oldName,
			};

			items.addItem(object, () => {
				this.toggleEdit();
			});
		},
		reset() {
			const [name, amount] = this.item;
			this.name = name;
			this.amount = amount;
		},
		toggleEdit() {
			if (!this.removing) {
				this.edit = !this.edit;
				if (this.edit) {
					this.$nextTick(() => {
						this.$refs.name.focus();
					});
				}
				this.reset();
			}
		},
	},
	props: {
		item: Array,
	},
};
</script>
<style lang="scss" scoped>
@import "@/style/imports";
.container {
	@include container;
	background-color: $secondary;
	align-items: center;
	overflow: auto;
	transition: 0.5s;
	padding: 0.5rem;
	.product {
		gap: 0.5rem;
		display: flex;
		align-items: center;
		overflow: hidden;
		width: 100%;
		&:hover {
			cursor: pointer;
		}
		.span {
			text-transform: capitalize;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.checkbox {
			display: flex;
			justify-content: center;
			align-items: center;
			min-width: 3vh;
			width: 3vh;
			height: 3vh;
			min-height: 3vh;
			border: 2px solid black;
			background-color: $background;
			.checkmark {
				transition: 0.5s;
				width: 100%;
				height: 100%;
				background-image: url("../assets/checkmark.svg");
				background-size: contain;
				background-position: center;
				background-repeat: no-repeat;
			}
		}
	}
	.inputs {
		white-space: nowrap;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		width: 100%;
		height: 100%;
		input {
			@include input;
			padding: 0 1rem;
			height: 100%;
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
		display: flex;
		height: 3vh;
		margin-left: auto;
		white-space: nowrap;
		gap: 1vh;
		.button {
			height: 100%;
			border: none;
			background-color: unset;
			img {
				height: 100%;
			}
			&:hover {
				cursor: pointer;
			}
		}
	}
}
</style>
