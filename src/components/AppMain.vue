<template>
	<main>
		<AppWeather v-if="state === 'weather'" />
		<AppShopping v-if="state === 'shopping'" />
		<AppMessages v-else-if="state === 'messages'" />
		<AppHome v-else-if="state === 'home'" v-model="state" />
	</main>
</template>
<script>
import AppWeather from "./AppWeather.vue";
import AppHome from "./AppHome.vue";
import AppShopping from "./AppShopping.vue";
import AppMessages from "./AppMessages.vue";
export default {
	computed: {
		state: {
			get() {
				return this.modelValue;
			},
			set(value) {
				this.$emit("update:modelValue", value);
			},
		},
	},
	props: {
		modelValue: String,
	},
	methods: {},
	components: { AppWeather, AppHome, AppShopping, AppMessages },
};
</script>
<style lang="scss" scoped>
@import "../style/imports";
main {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	overflow: auto;
}
</style>
