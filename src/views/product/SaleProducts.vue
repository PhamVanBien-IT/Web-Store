<template>
 <div class="div">
  <product-list
    describe="Thời trang đẹp với giá siêu đẹp"
    title="SALE"
    categoryName="SALE"
  ></product-list>
 </div>
</template>
<script>
import ProductList from "./ProductList.vue";
export default {
  name: "SaleProducts",
  components: {
    ProductList,
  },
};
</script>