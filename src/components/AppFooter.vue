<template>
	<footer>
		<section v-if="state === 'shopping'">
			<AppShoppingForm v-if="this.showAdd" />
			<button @click="toggleShowAdd" class="icon">
				<AssetCart class="shoppingIcon" />
			</button>
		</section>
		<section v-else-if="state === 'messages'">
			<AppMessageForm v-if="this.showAdd" />
			<button @click="toggleShowAdd" class="icon">
				<AssetMessage class="messageIcon" />
			</button>
		</section>
		<section v-else></section>
	</footer>
</template>

<script>
import AssetCart from "./assets/AssetCart.vue";
import AppShoppingForm from "./AppShoppingForm.vue";
import AssetMessage from "./assets/AssetMessage.vue";
import AppMessageForm from "./AppMessageForm.vue";
export default {
	data() {
		return {
			showAdd: false,
		};
	},
	watch: {
		state: {
			handler: function () {
				this.showAdd = false;
			},
		},
	},
	methods: {
		toggleShowAdd() {
			this.showAdd = !this.showAdd;
		},
	},
	props: {
		state: String,
	},
	components: { AssetCart, AppShoppingForm, AssetMessage, AppMessageForm },
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
		.icon {
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
				fill: $primary;
				stroke: $primary;
				width: 100%;
				height: 100%;
			}
			.messageIcon {
				transform: scale(0.7, 0.7);
			}
			.shoppingIcon {
				position: absolute;
				top: 4%;
				left: -6%;
				transform: scale(0.7, 0.7);
			}
		}
	}
}
</style>
