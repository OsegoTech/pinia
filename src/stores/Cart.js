import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useProductStore } from "./products";

export const useCartStore = defineStore("cart", () => {
  const productStore = useProductStore();
  const productIds = ref([]);
  const cart = computed(() =>
    productIds.value.map((id) =>
      productStore.products.find((product) => product.id === id)
    )
  );

  const cartTotal = computed(() =>
    cart.value.reduce((prev, cur) => (prev += cur.price), 0)
  );

  return {
    cart,
    cartTotal,
    productIds,
  };
});
