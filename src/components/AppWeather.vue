<template>
	<section class="weather" ref="weather"></section>
</template>
<script>
import Weather from "../utilities/weather";
export default {
	mounted() {
		const parent = this.$refs.weather;
		const lat = 60.6749;
		const lon = 17.1413;
		this.weather = new Weather(lat, lon, 1, parent);
		this.weather.start();
	},
};
</script>
<style lang="scss" scoped>
@import "../style/imports";
.weather {
	height: 100%;
	width: 100%;
}
</style>
