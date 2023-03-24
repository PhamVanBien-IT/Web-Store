<template>
  <the-nav></the-nav>
  <section class="section" id="product" style="margin-top: 150px">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="left-images">
            <img src="../../assets/images/single-product-01.jpg" alt="" />
            <img src="../../assets/images/single-product-02.jpg" alt="" />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="right-content">
            <h4>{{ product.fullName }}</h4>
            <span class="price">${{ product.price }}</span>
            <ul class="stars">
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
            </ul>
            <span>{{ product.description }}</span>
            <div class="quantity-content">
              <div class="left-content">
                <h6>Số lượng</h6>
              </div>
              <div class="right-content">
                <div class="quantity buttons_added">
                  <input
                    type="button"
                    value="-"
                    class="minus"
                    @click="downQuantity"
                    
                  />
                  <input
                    type="number"
                    step="1"
                    :min="quantityProduct"
                    max=""
                    name="quantity"
                    v-model="quantityProduct"
                    title="Qty"
                    class="input-text qty text"
                    size="4"
                    pattern=""
                    inputmode=""
                  />
                  <input
                    type="button"
                    value="+"
                    class="plus"
                    @click="upQuantity"
                  />
                </div>
              </div>
            </div>
            <div class="total">
              <h4>Total: ${{ totalMoney }}</h4>
              <div class="main-border-button">
                <a href="#">Thêm vào giỏ hàng</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <the-footer></the-footer>
</template>
<script>
import productApi from "@/api/productAPI";
export default {
  name: "ProductDetail",
  mounted() {
    this.productId = this.$route.params.id;

    this.getProductDetail(this.productId);
  },
  updated() {
    this.sumMoney();
  },
  methods: {
    /**
     * Hàm tính tổng tiền tương ứng với số lượng đã chọn
     * CreaetedBy: Bien (15/03/2023)
     */
    sumMoney(){
        this.totalMoney = this.quantityProduct * this.product.price;
    },
    /**
     * Hàm giảm số lượng sản phẩm
     * CreatedBy: Bien (15/03/2023)
     */
    downQuantity() {
      if (this.quantityProduct > 1) {
        this.quantityProduct -= 1;
      } else{
        this.quantityProduct = 1;
      }
    },

    /**
     * Hàm tăng số lượng sản phẩm
     * CreatedBy: Bien (15/03/2023)
     */
    upQuantity() {
      this.quantityProduct += 1;
    },

    /**
     * Hàm xem chi tiết sản phẩm
     * CreatedBy: Bien (15/03/2023)
     */
    async getProductDetail(id) {
      const response = await productApi.getProductById(id);

      this.product = response.data;
    }
  },
  data() {
    return {
      // Id sản phẩm
      productId: null,

      // Thông tin sản phẩm
      product: {},

      // Số lượng đã chọn
      quantityProduct: 1,

      // Tổng tiền theo số lượng sản phẩm đã chọn
      totalMoney: 0,
    };
  },
};
</script>
<style scoped>
</style>
