<template>
	<footer>
		<AppFooterForm v-if="this.showAdd" />
		<button @click="toggleShowAdd">
			<AssetCart />
		</button>
	</footer>
</template>

<script>
import AssetCart from "./AssetCart.vue";
import AppFooterForm from "./AppFooterForm.vue";
export default {
	data() {
		return {
			showAdd: false,
		};
	},
	name: "AppFooter",
	props: {},
	methods: {
		toggleShowAdd() {
			this.showAdd = !this.showAdd;
		},
	},
	components: { AssetCart, AppFooterForm },
};
</script>

<style lang="scss" scoped>
@import '../style/_imports.scss';
footer {
	background-color: $primary;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	> button {
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
</style>
