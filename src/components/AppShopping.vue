<template>
	<section>
        <AppProduct v-for="[name, amount] in products" :product="[name, amount]" :products="products" :key="name" />
    </section>
</template>
<script>
import AppProduct from "./AppProduct.vue";
export default {
    data() {
        return {
            products: new Map(),
        };
    },
    created() {
        this.products.set("Product1", 5);
        this.products.set("Product2", 5);
        this.products.set("Product3", 5);
        this.products.set("Product4", 5);
    },
    components: { AppProduct }
};
</script>
<style lang="scss" scoped>
@import "../style/imports";
section {
    width: 100%;
    display: grid;
    gap: 0.5rem;
}
</style>
