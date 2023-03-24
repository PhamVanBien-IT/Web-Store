<template>
 <div class="div">
  <product-list
    describe="Thời trang tạo lên phong cách cho phái mạnh!"
    title="Thời trang nam"
    categoryName="Nam"
  ></product-list>
 </div>
</template>
<script>
import ProductList from "./ProductList.vue";
export default {
  name: "MenProducts",
  components: {
    ProductList,
  },
};
</script>