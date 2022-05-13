<template>
	<header>
		<h1>
			{{ text }}
		</h1>
	</header>
</template>

<script>
export default {
	name: "AppHeader",
	props: {
		text: String,
	},
};
</script>

<style lang="scss" scoped>
@import '../style/imports.scss';
header {
	background-color: $primary;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	h1 {
		font-size: 3rem;
		color: $background;
	}
}
</style>
