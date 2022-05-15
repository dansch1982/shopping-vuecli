<template>
	<section>
		<article v-for="(icon, index) of icons" :key="index" @click="value = icon" :class="icon"></article>
	</section>
</template>
<script>
export default {
	data() {
		return {
			icons: ["shopping", "weather", "messages"],
		};
	},
	computed: {
		value: {
			get() {
				return this.modelValue;
			},
			set(value) {
				this.$emit("update:modelValue", value);
			},
		},
	},
	methods: {
		update(value) {
			this.$emit("update:modelValue", value);
		},
	},
	props: {
		modelValue: String,
	},
};
</script>
<style lang="scss" scoped>
@import "../style/imports";
section {
	@include container;
	gap: 2rem;
	overflow: hidden;
	@media screen and (max-width: 600px) {
		flex-direction: column;
	}
	> article {
		display: flex;
		width: 100%;
		height: 100%;
		transition: 0.2s;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		&:hover {
			cursor: pointer;
			transform: scale(1.1);
		}
	}
	.home {
		background-image: url("../assets/home.svg");
	}
	.shopping {
		background-image: url("../assets/shopping.svg");
	}
	.weather {
		background-image: url("../assets/weather.svg");
	}
	.messages {
		background-image: url("../assets/messages.svg");
	}
}
</style>
