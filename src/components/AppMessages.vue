<template>
	<section class="messages" ref="messages">
		<section v-for="{id, date, message} in messages.messages" :key="id" class="container">
			<section class="message">
				<h2>{{ date.toLocaleDateString("se-SV", { day: "2-digit", weekday: "long", month: "long" }) }} <span class="close" @click="remove(id)">✖</span></h2>
				<article>
					{{ message }}
				</article>
			</section>
		</section>
	</section>
</template>

<script>
import { messages } from "@/exports";
export default {
	data() {
		return {
			messages: messages,
		};
	},
	watch: {
		messages: {
			deep: true,
			handler() {
				this.$nextTick(() => {
					this.scrollToBottom();
				});
			},
		},
	},
	mounted() {
		this.scrollToBottom();
	},
	methods: {
		scrollToBottom() {
			const { messages } = this.$refs;
			const parent = messages.parentElement;
			parent.scrollTo(0, parent.scrollHeight);
		},
		remove(index) {
			console.log(index)
		}
	},
};
</script>

<style lang="scss" scoped>
@import "@/style/imports";

.messages {
	max-width: $maxWidth;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	margin: auto;
	> :last-child {
		padding-bottom: 1rem;
	}
	.container {
		.message {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			background-color: $secondary;
			color: black;
			padding: 1rem;
			border-radius: 0.5rem;
			h2 {
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 1.5rem;
				gap: 1rem;
				white-space: nowrap;
				.close {
					transition: 0.1s;
					&:hover {
						cursor: pointer;
						transform: scale(1.2);
					}
				}
			}
		}
	}
}
</style>
