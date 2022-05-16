<template>
	<section v-if="!edit" class="container">
		<article class="product" @click="remove">
			<article class="checkbox"><article class="checkmark scale-0 opacity-0"></article></article>
			<span v-if="product[1] > 1" class="span">{{ product[1] }}st</span>
			<span class="span">{{ product[0] }}</span>
		</article>

		<article class="buttons">
			<button class="button" @click.stop="toggleEdit" ref="update">
				<img src="../assets/edit.svg" alt="" />
			</button>
		</article>
	</section>

	<!-- <section v-else class="container">
		<article class="inputs">
			<input type="text" v-model="name" @keypress.enter="update" @keypress="cleanInput($event)" ref="name" />
			<input type="number" min="1" v-model="amount" @keydown.enter="update" ref="amount" />
		</article>

		<article class="buttons">
			<button class="button" @click="update">
				<img src="./images/ok.svg" alt="" />
			</button>
			<button class="button" @click="toggleEdit">
				<img src="./images/cancel.svg" alt="" />
			</button>
		</article>
	</section> -->
</template>
<script>
export default {
	data() {
		return {
			edit: false,
			removing: false,
			name: "",
			amount: 0,
		};
	},
	beforeMount() {
		this.reset();
	},
	methods: {
		remove() {
			console.log("remove");
		},
		reset() {
			const [name, amount] = this.product;
			this.name = name;
			this.amount = amount;
		},
		toggleEdit() {
			if (!this.removing) {
				this.edit = !this.edit;
				this.reset();
			}
		},
	},
	props: {
		product: Array,
		products: Map,
	},
};
</script>
<style lang="scss" scoped>
@import "../style/imports";
.container {
	@include container;
	background-color: $secondary;
	align-items: center;
	overflow: auto;
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
				width: 100%;
				height: 100%;
				background-image: url("../assets/checkmark.svg");
				background-size: contain;
				background-position: center;
				background-repeat: no-repeat;
			}
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
