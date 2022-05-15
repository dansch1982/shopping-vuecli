<template>
	<section>
		<h2>Password</h2>
		<input type="password" ref="password" v-model="value" />
	</section>
</template>
<script>
export default {
	mounted() {
		this.$refs.password.focus();
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
	props: {
		modelValue: String,
	},
};
</script>

<style lang="scss" scoped>
@import "../style/imports";

section {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	background-color: $primary;
	input {
		border: 2px solid black;
		@include input;
	}
}
</style>
