<template>
	<section>
		<AppProduct v-for="[name, amount] in items.list" :item="[name, amount]" :key="name" @removeItem="removeItem" />
	</section>
</template>
<script>
import AppProduct from "./AppProduct.vue";
import { items } from "@/exports";

export default {
	data() {
		return {
			items: items,
		};
	},
	created() {
		items.getItems();
	},
	methods: {
		removeItem(item) {
			const [name] = item;
			const object = {
				name: name,
			};
			items.removeItem(object);
		},
	},
	components: { AppProduct },
};
</script>
<style lang="scss" scoped>
@import "../style/imports";
section {
	width: 100%;
	display: grid;
	gap: 1rem;
}
</style>
