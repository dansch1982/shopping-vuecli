<template>
	<AppPassword v-if="pass !== word" class="password" v-model="word" />
	<section v-else class="app">
		<AppHeader v-model="state" @logout="logout" />
		<AppMain v-model="state" :state="state" />
		<AppFooter :state="state" />
	</section>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppMain from "./components/AppMain.vue";
import AppPassword from "./components/AppPassword.vue";

import todo from "./utilities/todo";
todo.on();

export default {
	name: "App",
	created() {
		const word = localStorage.getItem("password");
		this.word = word;
		const state = localStorage.getItem("state");
		this.state = state;
	},
	watch: {
		word: {
			handler: function () {
				if (this.pass === this.word) {
					localStorage.setItem("password", this.word);
				}
			},
		},
		state: {
			handler: function () {
				localStorage.setItem("state", this.state);
			},
		},
	},
	data() {
		return {
			state: "",
			pass: "1234",
			word: "",
		};
	},
	methods: {
		logout() {
			localStorage.setItem("password", null);
			this.word = null;
		},
	},
	components: { AppHeader, AppFooter, AppMain, AppPassword },
};
</script>

<style lang="scss">
@import "./style/imports";
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
body,
html {
	background-color: $background;
}
#app {
	width: 100vw;
	height: 100vh;
	> section {
		width: 100%;
		height: 100%;
	}
	.password {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.app {
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: max-content auto max-content;
	}
}
</style>
