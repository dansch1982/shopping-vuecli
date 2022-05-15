<template>
	<header ref="header">
		<section>
			<section class="hamburger" @click="open" ref="hamburger">
				<article></article>
				<article></article>
				<article></article>
			</section>
			<h1>
				{{ title }}
			</h1>
			<button @click="logout">logout</button>
			<nav class="overlay" ref="overlay">
				<article v-for="(app, index) of apps.filter((item) => item !== title)" :key="index" @click="title = app" :class="app"></article>
			</nav>
		</section>
	</header>
</template>

<script>
export default {
	name: "AppHeader",
	data() {
		return {
			apps: ["home", "shopping", "weather", "messages"],
		};
	},
	computed: {
		title: {
			get() {
				return this.modelValue;
			},
			set(value) {
				const hamburger = this.$refs.hamburger;
				hamburger.classList.remove("hamburgerOpen");
				const overlay = this.$refs.overlay;
				overlay.classList.remove("overlayOpen");
				this.$emit("update:modelValue", value);
			},
		},
	},
	methods: {
		open() {
			const hamburger = this.$refs.hamburger;
			hamburger.classList.toggle("hamburgerOpen");
			const overlay = this.$refs.overlay;
			const articles = overlay.querySelectorAll("article");
			articles.forEach((article) => {
				article.style.transitionDelay = "0.1s";
				article.addEventListener(
					"transitionend",
					() => {
						article.style.transitionDelay = "0s";
					},
					{ once: true }
				);
			});
			overlay.classList.toggle("overlayOpen");
		},
		logout() {
			this.$emit("logout");
		},
	},
	props: {
		modelValue: String,
	},
};
</script>

<style lang="scss" scoped>
@import "../style/imports";
header {
	width: 100%;
	height: 100%;
	background-color: $primary;
	> section {
		width: 100%;
		height: 100%;
		position: relative;
		@include container;
		justify-content: space-between;
		align-items: center;
		h1 {
			text-transform: capitalize;
			font-size: 3rem;
			color: $background;
			line-height: 1;
		}
		button {
			@include button;
			z-index: 20;
		}
		.hamburger {
			z-index: 20;
			position: relative;
			width: 2rem;
			height: 2rem;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			transition: transform 0.2s;

			&:hover {
				cursor: pointer;
				transform: scale(1.2);
			}
			article {
				transition: 0.2s;
				width: 100%;
				height: 4px;
				border-radius: 4px;
				background-color: $background;
			}
		}
		.hamburgerOpen {
			article {
				transition: 0.2s;
			}
			:nth-child(1) {
				transform: rotate(45deg) translate(8px, 7px);
			}
			:nth-child(2) {
				opacity: 0;
			}
			:nth-child(3) {
				transform: rotate(-45deg) translate(8px, -7px);
			}
		}
	}
	.overlay {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		z-index: 10;
		position: absolute;
		top: 0;
		left: 0%;
		padding: 0;
		width: 0%;
		max-width: $maxWidth;
		height: 100%;
		background-color: $primary;
		transition: 0.5s;
		overflow: hidden;

		> article {
			height: 100%;
			width: 3.5rem;
			transition: 0.2s;
			opacity: 0%;
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
	.overlayOpen {
		width: 100%;
		> article {
			transition-delay: 0.1s;
			opacity: 100%;
		}
	}
}
</style>
