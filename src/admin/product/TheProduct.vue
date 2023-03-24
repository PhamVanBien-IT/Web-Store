<template>
  <the-nav></the-nav>
  <main class="app-content">
    <div class="app-title">
      <ul class="app-breadcrumb breadcrumb side">
        <li class="breadcrumb-item active">
          <a href="#"><b>Danh sách sản phẩm</b></a>
        </li>
      </ul>
      <div id="clock">
        <span class="date"> {{ textDate }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="tile">
          <div class="tile-body">
            <div class="row element-button">
              <div class="col-sm-2">
                <div
                  class="btn btn-add btn-sm"
                  title="Thêm"
                  @click="btnCreateProduct"
                >
                  <font-awesome-icon icon="fa-solid fa-plus" />
                  Tạo mới sản phẩm
                </div>
              </div>
              <div class="col-sm-2">
                <a
                  class="btn btn-delete btn-sm nhap-tu-file"
                  type="button"
                  title="Nhập"
                  onclick="myFunction(this)"
                  ><font-awesome-icon icon="fa-solid fa-file-arrow-up" /> Tải từ
                  file</a
                >
              </div>
              <div class="col-sm-2">
                <div
                  class="btn btn-delete btn-sm print-file js-textareacopybtn"
                  type="button"
                  title="Sao chép"
                  @click="btnDuplicateProduct"
                  ><font-awesome-icon icon="fa-solid fa-copy" /> Sao chép</div
                >
              </div>
              <div class="col-sm-2">
                <a class="btn btn-excel btn-sm" href="" title="In"
                  ><font-awesome-icon icon="fa-solid fa-file-excel" /> Xuất
                  Excel</a
                >
              </div>
              <div class="col-sm-2">
                <a
                  class="btn btn-delete btn-sm"
                  type="button"
                  title="Xóa"
                  onclick="myFunction(this)"
                  ><font-awesome-icon icon="fa-solid fa-trash" /> Xóa tất cả
                </a>
              </div>
            </div>
            <div
              id="sampleTable_wrapper"
              class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
            >
              <div class="row">
                <div class="col-sm-12 col-md-6 mt-2">
                  <MDropdownVue
                    :pageNumverRecord="pagination"
                    @liMit="setliMit"
                  ></MDropdownVue>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div id="sampleTable_filter" class="dataTables_filter">
                    <label
                      >Tìm kiếm:<input
                        type="search"
                        class="form-control form-control-sm"
                        placeholder="Tìm kiếm theo mã và tên"
                        aria-controls="sampleTable"
                        v-model="textSearch"
                        @input="searchEmployee"
                    /></label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 page__main__table">
                  <table
                    class="table table-hover table-bordered dataTable no-footer"
                    id="sampleTable"
                    role="grid"
                    aria-describedby="sampleTable_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          width="10"
                          class="sorting_asc"
                          tabindex="0"
                          aria-controls="sampleTable"
                          rowspan="1"
                          colspan="1"
                          aria-sort="ascending"
                          aria-label=": activate to sort column descending"
                          style="width: 13px"
                        >
                          <label>
                            <input
                              type="checkbox"
                              id="chkProdTomove"
                              v-model="selected"
                              @click="selectAll"
                            />
                            <span class="check-box-effect"></span>
                          </label>
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="sampleTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Mã sản phẩm: activate to sort column ascending"
                          style="width: 77px"
                        >
                          Mã sản phẩm
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="sampleTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Tên sản phẩm: activate to sort column ascending"
                          style="width: 138px"
                        >
                          Tên sản phẩm
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="sampleTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Ảnh: activate to sort column ascending"
                          style="width: 100px"
                        >
                          Ảnh
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="sampleTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Số lượng: activate to sort column ascending"
                          style="width: 49px"
                        >
                          Số lượng
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="sampleTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Tình trạng: activate to sort column ascending"
                          style="width: 65px"
                        >
                          Tình trạng
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="sampleTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Giá tiền: activate to sort column ascending"
                          style="width: 78px"
                        >
                          Giá tiền
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="sampleTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Danh mục: activate to sort column ascending"
                          style="width: 84px"
                        >
                          Danh mục
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="sampleTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Chức năng: activate to sort column ascending"
                          style="width: 58px"
                        >
                          Chức năng
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        role="row"
                        class="odd"
                        v-for="(item, index) in products"
                        :key="index"
                        @dblclick="rowOnDblClick(item)"
                      >
                        <td width="10" class="sorting_1">
                          <label>
                            <input
                              type="checkbox"
                              id="chkProdTomove"
                              :value="item.productId"
                              v-model="selectedList"
                              @click="selectProduct(item)"
                            />
                            <span class="check-box-effect"></span>
                          </label>
                        </td>
                        <td>{{ item.productCode }}</td>
                        <td>{{ item.fullName }}</td>
                        <td>
                          <!-- <img
                            src="{{item.productCode}}"
                            alt=""
                            width="100px;"
                          /> -->
                        </td>
                        <td>{{ item.quantity }}</td>
                        <td><span class="badge bg-success">Còn hàng</span></td>
                        <td>${{ item.price }}</td>
                        <td>{{ item.categoryName }}</td>
                        <td>
                          <button
                            class="btn btn-primary btn-sm trash mr-2"
                            type="button"
                            title="Xóa"
                            @click="btnDeleteProduct(item)"
                          >
                            <font-awesome-icon icon="fa-solid fa-trash-can" />
                          </button>
                          <button
                            class="btn btn-primary btn-sm edit"
                            type="button"
                            title="Sửa"
                            id="show-emp"
                            data-toggle="modal"
                            data-target="#ModalUP"
                            @click="rowOnDblClick(item)"
                          >
                            <font-awesome-icon
                              icon="fa-solid fa-pen-to-square"
                            />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-md-5">
                  <div
                    class="dataTables_info"
                    id="sampleTable_info"
                    role="status"
                    aria-live="polite"
                  >
                    Tổng:
                    <span class="font-weight-bold">{{ totalRecord }} </span> sản
                    phẩm
                  </div>
                </div>
                <div class="col-sm-12 col-md-7">
                  <div
                    class="dataTables_paginate paging_simple_numbers"
                    id="sampleTable_paginate"
                  >
                    <paginate
                      v-model="indexPage"
                      :page-count="totalPage"
                      :page-range="3"
                      :margin-pages="1"
                      :click-handler="clickCallback"
                      :prev-text="'Trước'"
                      :page-class="'page-item'"
                      :prev-class="'prev-btn'"
                      :next-class="'next-btn'"
                      :next-text="'Sau'"
                      :container-class="'pagination'"
                    ></paginate>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MNotify 
    v-if="diy.state.showNotify" 
    :label="labelNotify"
    ></MNotify>
  </main>
  <MDialogVue
    v-if="diy.state.showDialog"
    :label="lableDialog"
    :classIcon="[isDialog ? 'icondelete' : 'warning']"
    @EditEPL="deleteProduct"
  ></MDialogVue>
  <TheProductDetail
    :id="productId"
    v-if="diy.state.showProductDetail"
    :duplicateProductCode="duplicateProductCode"
    :title="titleDetail"
  ></TheProductDetail>
</template>
<script>
import Paginate from "vuejs-paginate-next";
import TheNav from "../TheNav.vue";
import productApi from "@/api/productAPI";
import TheProductDetail from "@/admin/product/TheProductDetail.vue";
import MNotify from "@/components/notify/MNotify.vue";
export default {
  inject: ["diy"],
  name: "TheProduct",
  components: { TheNav, Paginate, TheProductDetail, MNotify },
  created() {
    this.clickCallback(1, this.liMit);
  },
  mounted() {
    setInterval(() => {
      this.getDateTime(Date.now());
    }, 1000);
  },
  methods: {
    /**
     * Hàm gắn dữ liệu cho form nhân bản sản phẩm
     * @param {Sản phẩm được chọn} item 
     * CreatedBy: Bien (20/03/2023)
     */
    selectProduct(item){
      this.productDuplidate = item;
    },
    /**
     * Hàm nhân bản nhân viên
     * CreatedBy: Bien (20/1/2023)
     */
     async btnDuplicateProduct() {
      try {
        // Lấy id nhân viên của hàng được chọn
        this.productId = this.productDuplidate.productId;

        const response = await productApi.getProductNewCode();

        this.titleDetail = this.$MISAResource.TITLEFORM.ADD("sản phẩm");

        this.duplicateProductCode = response.data;

        // Gọi hàm hiển thị EmployeeDetail
        this.diy.showProductDetail();
      } catch (error) {
        console.log(error);
      }
    },
     /**
     * Hàm lấy thông tin sản phẩm theo id
     * @param {*Thông tin sản phẩm muốn lấy} item
     * CreatedBy: Bien (4/1/2023)
     */
     rowOnDblClick(item) {
      // Lấy id của hàng được chọn
      this.productId = item.productId;

      this.titleDetail = this.$MISAResource.TITLEFORM.UPDATE("sản phẩm");
      // Gọi hàm hiển thị form EmployeeDetail
      this.diy.showProductDetail();
    },
    /**
     * Hàm thực hiện mở form thêm mới
     * CreatedBy: Bien (20/03/2023)
     */
    btnCreateProduct() {
      this.diy.showProductDetail();
      this.titleDetail = this.$MISAResource.TITLEFORM.ADD("sản phẩm");
      this.productId = null;
    },
    /**
     * Hàm hỏi trước khi xóa sản phẩm
     * @param {Sản phẩm muốn xóa} item
     * CreatedBy: Bien (19/03/2023)
     */
    async btnDeleteProduct(item) {
      this.isDialog = true;
      await this.diy.showDialog();
      this.diy.clearBtnCancel();
      this.diy.clearCloseDialog();
      this.lableDialog = this.$MISAResource.CONTENTDIALOG.DELETE(
        item.productCode
      );
      this.productId = item.productId;
    },
    /**
     * Hàm xóa sản phẩm theo ID sản phẩm
     * CreatedBy: Bien (19/03/2023)
     */
    async deleteProduct() {
      try {
        const response = await productApi.deleteProductById(this.productId);

        console.log(this.productId);

        console.log(response);

        if (response.isSuccess) {
          this.labelNotify = this.$MISAResource.LABELNOTIFY.DELETE("Sản phẩm");
          this.diy.showNotify();

          this.clickCallback(this.indexPage);
        }
      } catch (error) {
        console.log("Có lỗi khi xóa sản phẩm" + error);
      }
    },
    /**
     * Hàm checkall nhân viên và bỏ checkall nhân viên
     * CreatedBy: Bien (13/1/2023)
     */
    selectAll() {
      // Lấy danh sách các id nhân viên trong trang
      this.selectedProductId = this.products.map((item) => item.productId);
      if (!this.selected) {
        // Lọc qua những nhân viên đã chọn và bổ sung những vẫn viên chưa chọn
        this.products.forEach((item) => {
          if (!this.selectedList.includes(item.productId)) {
            this.selectedList.push(item.productId);
          }
        });
        this.selected = true;
      } else {
        // Lọc những nhân viên đã được checkall
        this.selectedList = this.selectedList.reduce((result, cur) => {
          if (!this.selectedProductId.includes(cur)) {
            result.push(cur);
          }
          return result;
        }, []);
        this.selected = false;
      }
    },

    /**
     * Hàm tự động hiển thị chức năng hàng loạt khi chọn 2 bản ghi trở lên
     * CreatedBy: Bien (20/02/2023)
     */
    autoCheckAllProducts() {
      let count = 0;
      // Uncheckbox all khi chuyển trang nếu bản ghi không được chọn hết và ngược lại
      this.products.forEach((item) => {
        if (this.selectedList.includes(item.productId)) {
          count++;
        }
      });
      if (count == this.liMit) {
        this.selected = true;
      } else {
        this.selected = false;
      }
    },
    /**
     * Gọi hàm tìm kiếm theo sau 0.5s
     * CreatedBy: Bien (10/1/2023)
     */
    searchEmployee: _.debounce(function () {
      this.clickCallback(1, this.liMit, this.textSearch);
    }, 500),
    /**
     * Hàm gắn giá trị cho số bản ghi
     * @param {Kích thước trang} n
     * CreatedBy: Bien (17/03/2023)
     */
    setliMit(n) {
      // Gắn giá trị cho biến liMit
      this.liMit = n;

      // Gọi hàm set pagation
      this.clickCallback(1, this.liMit, this.textSearch);

      this.autoCheckAllProducts();
    },
    /**
     * Hàm lấy ngày giờ hiện tại
     * CreatedBy: Bien (17/03/2023)
     */
    getDateTime(datetime) {
      this.textDate = this.$MISACommon.formatDateTime(datetime);
    },
    /**
     * Hàm xem phân trang sản phẩm
     * CreatedBy: Bien (15/03/2023)
     */
    async clickCallback(pageNumber) {
      try {
        // Nhận dữ liệu khi tìm kiếm
        const response = await productApi.getProductPaging(
          pageNumber,
          this.liMit,
          this.textSearch,
          this.categoryName
        );
        this.indexPage = pageNumber;
        this.products = response.data;
        this.totalPage = response.totalPage;
        this.totalRecord = response.totalRecord;

        this.autoCheckAllProducts();
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
  watch: {
    /**
     * Hàm lắng nghe sự thay đổi checkall
     * CreatedBy: Bien (18/1/2023)
     */
    selectedList: function () {
      this.autoCheckAllProducts();
    },
  },
  data() {
    return {
      // Dữ liệu nhân bản sản phẩm
      productDuplidate:{},
      // Mã sản mới khi nhân bản
      duplicateProductCode:null,

      // Hiển thị icon dialog tương ứng
      isDialog: false,

      // Tiêu đồ chi form chi tiết
      titleDetail: null,

      // Id sản phẩm
      productId: null,

      // Nội dung dialog
      lableDialog: null,

      // Nội dung thông báo khi hoàn thành thao tác
      labelNotify: null,

      // Tên hoặc mã sản phẩm muốn tìm
      textSearch: null,

      // Ngày giờ hiện tại
      textDate: "",

      // Danh sách sản phẩm theo tên danh mục
      products: {},

      // Số trang trang hiện tại
      indexPage: null,

      // Tổng số trang
      totalPage:0,

      // Khai báo biến nhận liMit
      liMit: 20,

      // Khai báo biến nhận kết quả trạng thái nút checkAll
      selected: false,

      // Khai báo biến chứa danh sách chọn
      selectedList: [],

      // Tổng số bản ghi
      totalRecord: 0,

      // Khai báo mảng số lượng bản ghi trên 1 trang
      pagination: [
        {
          key: 10,
          value: "10 sản phẩm trên 1 trang",
        },
        {
          key: 20,
          value: "20 sản phẩm trên 1 trang",
        },
        {
          key: 30,
          value: "30 sản phẩm trên 1 trang",
        },
        {
          key: 50,
          value: "50 sản phẩm trên 1 trang",
        },
        {
          key: 100,
          value: "100 sản phẩm trên 1 trang",
        },
      ],
    };
  },
};
</script>
<style scoped>
@import url(../admin.css);
.page__main__table {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: auto;
}
</style>