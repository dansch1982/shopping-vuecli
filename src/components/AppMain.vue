<template>
	<main>
		<AppWeather v-if="state === 'weather'" />
		<section v-else-if="state === 'shopping'">Shopping</section>
		<section v-else-if="state === 'messages'">Messages</section>
		<AppHome v-else-if="state === 'home'" v-model="state" />
	</main>
</template>
<script>
import AppWeather from "./AppWeather.vue";
import AppHome from "./AppHome.vue";
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
	components: { AppWeather, AppHome },
};
</script>
<style lang="scss" scoped>
@import "../style/imports";
main {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	gap: 1rem;
	overflow: auto;
}
</style>
