<template>
  <the-nav></the-nav>
  <div class="container-fluid">
    <div class="section" id="products">
      <div class="container" style="margin-top: 50px;position: relative;">
        <div class="row">
          <div class="mx-auto">
            <div class="section-heading bd-section-heading">
              <h2>{{ title }}</h2>
              <span>{{ describe }}</span>
            </div>
          </div>
        </div>
      <div class="text-search"><input type="text" v-model="textSearch" @input="searchEmployee" placeholder="Tìm kiếm theo tên và mã sản phẩm"></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4" v-for="(item, index) in products" :key="index">
            <div class="item">
              <div class="thumb">
                <div class="hover-content">
                  <ul>
                    <li>
                      <router-link
                        :to="{
                          name: 'ProductDetail',
                          params: { id: item.productId },
                        }"
                        ><font-awesome-icon :icon="['fas', 'eye']"
                      /></router-link>
                    </li>
                    <li>
                      <router-link to="#"
                        ><font-awesome-icon :icon="['fas', 'star']"
                      /></router-link>
                    </li>
                    <li>
                      <router-link
                        :to="{
                          name: 'TheCart',
                          params: { id: item.productId },
                        }"
                        ><font-awesome-icon :icon="['fas', 'shopping-cart']"
                      /></router-link>
                    </li>
                  </ul>
                </div>
                <img src="../../assets/images/men-01.jpg" alt="" />
              </div>
              <div class="down-content">
                <h4>{{ item.fullName }}</h4>
                <span>${{ item.price }}</span>
                <ul class="stars">
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="pagination">
              <paginate
                v-model="indexPage"
                :page-count="totalPage"
                :page-range="2"
                :margin-pages="1"
                :click-handler="clickCallback"
                :prev-text="'<'"
                :page-class="'page-item'"
                :prev-class="'prev-btn'"
                :next-class="'next-btn'"
                :next-text="'>'"
                :container-class="'pagination'"
              ></paginate>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <the-footer></the-footer>
</template>
<script>
import TheFooter from "../TheFooter.vue";
import productApi from "@/api/productAPI";
import Paginate from "vuejs-paginate-next";
import MInputText from "@/components/input/MInputText.vue";
import _ from "lodash";

export default {
  components: {
    TheFooter,
    Paginate,
    MInputText
},
  name: "ProductList",
  props: {
    title: String,
    describe: String,
    categoryName: String,
  },
  created() {
    this.clickCallback(1, this.pageSize, null, this.categoryName);
  },
  methods: {
     /**
     * Gọi hàm tìm kiếm nhân viên theo sau 0.5s
     * CreatedBy: Bien (10/1/2023)
     */
     searchEmployee: _.debounce(function () {
      this.clickCallback(1, this.pageSize, this.textSearch, this.categoryName);
    }, 500),
    /**
     * Hàm xem phân trang sản phẩm
     * CreatedBy: Bien (15/03/2023)
     */
    async clickCallback(pageNumber) {
      try {
        // Nhận dữ liệu khi tìm kiếm
        const response = await productApi.getProductPaging(
          pageNumber,
          this.pageSize,
          this.textSearch,
          this.categoryName
        );
        this.indexPage = pageNumber;
        this.products = response.data;
        this.totalPage = response.totalPage;
        this.totalRecord = response.totalRecord;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm lấy danh sách sản phẩm theo phân trang, tìm kiếm và theo tên danh mục
     * @param {Vị trí lấy sản phẩm} offSet
     * @param {Số sản phẩm muốn lấy} liMit
     * @param {Tên hoặc mã sản phẩm muốn lấy} filter
     * @param {Tên danh mục muốn lấy sản phẩm} categoryName
     * CreatedBy: Bien (15/03/2023)
     */
    async getProducts(offSet, liMit, filter, categoryName) {
      const response = await productApi.getProductPaging(
        offSet,
        liMit,
        filter,
        categoryName
      );
      this.products = response.data;
    },
  },
  data() {
    return {
      // Tên hoặc mã sản phẩm muốn tìm
      textSearch: null,

      // Danh sách sản phẩm theo tên danh mục
      products: {},

      // Khai báo biến indexPage
      indexPage: null,

      // Khai báo biến nhận pageSize
      pageSize: 9,
      
    };
  },
};
</script>
<style scoped>
.text-search{
  border: 1px solid #dbcfcf!important;
  margin-bottom: 24px;
  height: 40px;
  line-height: 40px;
  width: 300px;
  border-radius: 4px;
  margin-left: 73%;
}
</style>