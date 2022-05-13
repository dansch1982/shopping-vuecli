
<template>
	<AppHeader text="Shopping" />
	<main>Main</main>
	<AppFooter />
</template>

<script>

import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue';

import todo from "./utilities/todo";
todo.on();

export default {
	name: "App",
	components: { AppHeader, AppFooter },
};
</script>

<style lang="scss">
@import './style/imports.scss';
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
#app {
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-rows: max-content auto max-content;
}
</style>