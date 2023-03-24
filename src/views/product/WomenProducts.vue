<template>
 <div class="div">
  <product-list
    describe="Thời trang nâng tầm vẻ đẹp người phụ nữ"
    title="Thời trang nữ"
    categoryName="Nữ"
  ></product-list>
 </div>
</template>
<script>
import ProductList from "./ProductList.vue";
export default {
  name: "WomenProducts",
  components: {
    ProductList,
  },
};
</script>