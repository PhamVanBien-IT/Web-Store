<template>
  <the-nav></the-nav>
  <div class="card">
    <div class="row">
      <div class="col-md-8 cart">
        <div class="title">
          <div class="row">
            <div class="col">
              <h4><b>Giỏ hàng</b></h4>
            </div>
            <div class="col align-self-center text-right text-muted">
              3 items
            </div>
          </div>
        </div>
        <div class="row">
          <div class="row main align-items-center">
            <div class="col-2 ml-4 font-weight-bold">Sản phẩm</div>
            <div class="col">
              <div class="row text-muted"></div>
              <div class="row"></div>
            </div>
            <div class="col mr-2 font-weight-bold">Số lượng</div>
            <div class="col mr-5 font-weight-bold">Thành tiền</div>
          </div>
        </div>
        <div class="row border-top border-bottom">
          <div
            class="row main align-items-center"
            v-for="(item, index) in products"
            :key="index"
          >
            <div class="col-2">
              <img class="img-fluid" src="https://i.imgur.com/1GrakTl.jpg" />
            </div>
            <div class="col">
              <div class="row text-muted">{{ item.categoryName }}</div>
              <div class="row">{{ item.fullName }}</div>
            </div>
            <div class="col d-flex">
              <div class="down-quantity" @click="downQuantity">-</div>
              <a href="#" class="border">{{ quantityProduct }}</a>
              <div class="up-quantity" @click="upQuantity">+</div>
            </div>
            <div class="col font-weight-bold">
              ${{ totalMoney }}<span class="close">&#10005;</span>
            </div>
          </div>
        </div>
        <div class="back-to-shop">
          <a href="#">&leftarrow;</a><span class="text-muted">Quay lại</span>
        </div>
      </div>
      <div class="col-md-4 summary">
        <div style="text-align: center; margin-top: 50px">
          <h5><b>Thông tin đơn hàng</b></h5>
        </div>
        <hr />
        <div class="row">
          <div class="col">Sản phẩm</div>
          <div class="col text-right">&euro; 132.00</div>
        </div>
        <m-input-text title="Họ và tên"></m-input-text>
        <m-input-text title="Địa chỉ"></m-input-text>
        <m-input-text title="Số điện thoại"></m-input-text>
        <MCombobox title="Phương thức vận chuyển" v-model="ship"></MCombobox>
        <MCombobox title="Phương thức thanh toán" v-model="payment"></MCombobox>
        <div
          class="row"
          style="border-top: 1px solid rgba(0, 0, 0, 0.1); margin-top: 16px"
        >
          <div class="col" style="margin-top: 8px">Tổng tiền</div>
          <div class="col text-right" style="margin-top: 8px">
            &euro; 137.00
          </div>
        </div>
        <button class="btn-checkout" @click="$router.push('/checkout')">
          Thanh toán
        </button>
      </div>
    </div>
  </div>
  <the-footer></the-footer>
</template>
<script>
import MCombobox from "@/components/combobox/MCombobox.vue";
import MInputText from "@/components/input/MInputText.vue";
import productApi from "@/api/productAPI";
export default {
  name: "TheCart",
  components: { MCombobox, MInputText },
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
    sumMoney() {
      this.totalMoney = this.quantityProduct * this.product.price;
    },
    /**
     * Hàm xem chi tiết sản phẩm
     * CreatedBy: Bien (15/03/2023)
     */
    async getProductDetail(id) {
      const response = await productApi.getProductById(id);

      this.product = response.data;
    },
    /**
     * Hàm giảm số lượng sản phẩm
     * CreatedBy: Bien (15/03/2023)
     */
    downQuantity() {
      if (this.quantityProduct > 1) {
        this.quantityProduct -= 1;
      } else {
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
  },
  watch: {
    product: function () {
      this.products.push(this.product);

      console.log(this.products);
    },
  },
  data() {
    return {
      // Số lượng sản phẩm
      quantityProduct: 1,

      // Sản phẩm muốn thêm vào giỏ hàng
      product: null,

      // Id sản phẩm muốn thêm vào giỏ
      productId: null,

      // Danh sách sản phẩm trong giỏ
      products: [],

      // Tổng tiền theo số lượng sản phẩm đã chọn
      totalMoney: 0,

      // Phuowng thức thanh toán
      payment: "Tiền mặt",

      // Đơn vị giao hàng
      ship: "Giao hàng tiết kiệm",
    };
  },
};
</script>
<style scoped>
@import url(./cart.css);
.up-quantity {
  margin-left: 10px;
  cursor: pointer;
}
.down-quantity {
  margin-right: 10px;
  cursor: pointer;
}
</style>