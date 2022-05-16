<template>
	<main>
		<AppWeather v-if="state === 'weather'" />
		<AppShopping v-if="state === 'shopping'" />
		<section v-else-if="state === 'messages'">Messages</section>
		<AppHome v-else-if="state === 'home'" v-model="state" />
	</main>
</template>
<script>
import AppWeather from "./AppWeather.vue";
import AppHome from "./AppHome.vue";
import AppShopping from "./AppShopping.vue";
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
	methods: {
		update(value) {
			console.log(value);
		},
	},
	components: { AppWeather, AppHome, AppShopping },
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
