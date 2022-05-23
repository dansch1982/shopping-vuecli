<template>
	<section>
		<section>
			<h2>Password</h2>
			<input type="password" ref="password" v-model="value" />
		</section>
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
	background-color: $background;
	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background-color: $primary;
		color: black;
		padding: 2rem;
		border-radius: 1rem;
		filter: drop-shadow(3px 3px 3px black);
		h2 {
			display: flex;
			justify-content: center;
			align-items: center;
			line-height: 1;
		}
		input {
			border: 2px solid black;
			@include input;
		}
	}
}
</style>
