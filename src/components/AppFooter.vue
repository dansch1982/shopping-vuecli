<template>
	<footer>
		<section>
			<AppFooterForm v-if="this.showAdd" />
			<button v-if="state==='shopping'" @click="toggleShowAdd" class="cartButton">
				<AssetCart />
			</button>
		</section>
	</footer>
</template>

<script>
import AssetCart from "./assets/AssetCart.vue";
import AppFooterForm from "./AppFooterForm.vue";
export default {
	data() {
		return {
			showAdd: false,
		};
	},
	name: "AppFooter",
	methods: {
		toggleShowAdd() {
			this.showAdd = !this.showAdd;
		},
	},
	props: {
		state: String,
	},
	components: { AssetCart, AppFooterForm },
};
</script>

<style lang="scss" scoped>
@import "../style/imports";
footer {
	width: 100%;
	height: 100%;
	background-color: $primary;
	> section {
		@include container;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		.cartButton {
			position: relative;
			width: 4rem;
			height: 4rem;
			border-radius: 50%;
			border: none;
			outline: none;
			background-color: $background;
			&:hover {
				cursor: pointer;
			}
			svg {
				position: absolute;
				top: 4%;
				left: -6%;
				width: 100%;
				height: 100%;
				transform: scale(0.7, 0.7);
				fill: $primary;
				stroke: $primary;
			}
		}
	}
}
</style>
