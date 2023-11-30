<template>
  <div>
    <ul class="products">
      <li
        class="product-item"
        v-for="(product, index) in productStore.products"
        :key="index"
      >
        <ProductInfo :product="product">
          <button class="cta" @click="addToCart(product)">Buy</button>
        </ProductInfo>
      </li>
    </ul>
  </div>
</template>

<script setup>
import ProductInfo from "./product-info/ProductInfo.vue";
import products from "./product-data.js";
import { useCartStore } from "../stores/Cart";
import { useProductStore } from "../stores/products";

const cartStore = useCartStore();
const productStore = useProductStore();
productStore.getProducts();

function addToCart(product) {
  // const newCart = [...cartStore.cart, product];
  // cartStore.cart = newCart;
  // cartStore.$patch({ cart: newCart });

  // cartStore.$patch((state) => {
  //   state.cart.push({ ...product });
  // })
  cartStore.productIds.push(product.id);
}
</script>

<style scoped>
.products {
  margin: 0 100px;
}

.product-item {
  border-bottom: 2px solid #999;
}
</style>
