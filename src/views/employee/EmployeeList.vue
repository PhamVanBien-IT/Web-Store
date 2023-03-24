<template>
  <div class="content__page">
    <!-- PAGE-HEADER -->
    <div class="page__header">
      <div class="title">
        <p>Nhân viên</p>
      </div>
      <div class="add">
        <MButtonVue
          label="Thêm mới nhân viên"
          class="btn"
          @click="btnAddOnClick"
        ></MButtonVue>
      </div>
    </div>
    <!-- PAGE-CONTENT -->
    <div class="page__main">
      <!-- PAGE-MAIN-HEADER -->
      <div class="page__main__header">
        <!-- SEARCH-INPUT -->
        <div class="page_main_header_right">
          <div class="handle-deletes" v-if="diy.state.showFunctionAll">
            <div class="sum-check-ked">
              Đã chọn:
              <span style="font-weight: 600">{{
                this.selectedList.length
              }}</span>
            </div>
            <div class="clear-select-all" @click="this.selectedList = []">
              Bỏ chọn
            </div>
            <div class="deletes" @click="deleteEmployeeListSelect">
              <div class="icon-deletes"></div>
              <div class="">Xóa tất cả</div>
            </div>
          </div>
        </div>
        <div class="page_main_header_left">
          <div class="search__text">
            <div class="text-field">
              <MInputTextVue
                placeholder="Tìm theo mã, tên nhân viên"
                class="input-search"
                v-model="textSearch"
                @input="searchEmployee"
              ></MInputTextVue>
            </div>
            <div class="search-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D9D9D9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
          <div class="refresh icon" @click="btnRefreshOnClick"></div>
          <div class="excel icon" @click="btnExportEmployees"></div>
        </div>
      </div>
      <!-- PAGE-MAIN-TABLE -->
      <div class="page_body">
        <div class="page__main__table">
          <table id="tbEmployeseList">
            <thead>
              <tr>
                <td class="tb-head td-center td-cb" style="width: 60px">
                  <label>
                    <input
                      type="checkbox"
                      id="chkProdTomove"
                      v-model="selected"
                      @click="selectAll"
                    />
                    <span class="check-box-effect"></span>
                  </label>
                </td>
                <td class="tb-head td-left" style="width: 250px">
                  MÃ NHÂN VIÊN
                </td>
                <td class="tb-head td-left" style="width: 450px">
                  TÊN NHÂN VIÊN
                </td>
                <td class="tb-head td-left" style="width: 250px">GIỚI TÍNH</td>
                <td class="tb-head td-center" style="width: 200px">
                  NGÀY SINH
                </td>
                <td
                  class="tb-head td-left"
                  style="width: 250px"
                  title="Số chứng minh nhân dân"
                >
                  SỐ CMND
                </td>
                <td class="tb-head td-center" style="width: 250px">NGÀY CẤP</td>
                <td class="tb-head td-left" style="width: 200px">NƠI CẤP</td>
                <td class="tb-head td-left" style="width: 230px">
                  SỐ TÀI KHOẢN
                </td>
                <td
                  class="tb-head td-left"
                  title="Chi nhánh tài khoản ngân hàng"
                  style="width: 500px"
                >
                  CHI NHÁNH TK NGÂN HÀNG
                </td>
                <td class="tb-head td-center td-func" style="width: 120px">
                  CHỨC NĂNG
                </td>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in employee"
                :key="index"
                @dblclick="rowOnDblClick(item)"
              >
                <td class="td-center td-cb" style="width: 60px">
                  <label>
                    <input
                      type="checkbox"
                      id="chkProdTomove"
                      :value="item.employeeId"
                      v-model="selectedList"
                    />
                    <span class="check-box-effect"></span>
                  </label>
                </td>
                <td class="td-left" style="width: 250px">
                  {{ item.employeeCode || "" }}
                </td>
                <td class="td-left" style="width: 450px">
                  {{ item.fullName || "" }}
                </td>
                <td class="td-left" style="width: 200px">
                  {{ item.genderName || "" }}
                </td>
                <td class="td-center" style="width: 200px">
                  {{ this.$MISACommon.formatDate(item.dateOfBirth) || "" }}
                </td>
                <td class="td-left" style="width: 250px">
                  {{ item.identityNumber || "" }}
                </td>
                <td class="td-center" style="width: 250px">
                  {{ this.$MISACommon.formatDate(item.identityDate) || "" }}
                </td>
                <td class="td-left" style="width: 200px">
                  {{ item.identityPlace || "" }}
                </td>
                <td class="td-left" style="width: 230px">
                  {{ item.bankAccount || "" }}
                </td>
                <td class="td-left" style="width: 500px">
                  {{ item.bankBranch || "" }}
                </td>
                <td class="td-func td-center" style="width: 120px">
                  <div class="edit-data" @click="rowOnDblClick(item)">Sửa</div>
                  <div
                    class="btn-funclist"
                    @click="btnShowFuncList($event, item)"
                  >
                    <div
                      class="icon-funclist"></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <MLoadingVue></MLoadingVue>
      </div>
      <!-- PAGE-MAIN-FOOTER -->
      <div class="page__main__footer">
        <!-- PAGE-MAIN-FOOTER-LEFT -->
        <div class="page__main__footer__left">
          Tổng số: <span style="font-weight: 600">{{ totalRecord }}</span> bản
          ghi
        </div>
        <!-- PAGE-MAIN-FOOTER-RIGHT -->
        <div class="page__main__footer__right">
          <div
            class="cbbox-number"
            v-click-outside-element="onClickOutsidePageSize"
          >
            <MDropdownVue
              :pageNumverRecord="pagination"
              @pageSize="setPageSize"
            ></MDropdownVue>
          </div>
          <div class="pading">
            <div class="page-list mgl-8">
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
  <!-- DIALOG -->
  <MDialogVue
    v-if="diy.state.showDialog"
    :label="lableDeleteEmployee"
    classIcon="warning"
    @EditEPL="deleteEmployee"
  ></MDialogVue>
  <MDialogVue
    v-if="diy.state.showDialogDeleteEmployees"
    :label="lableDeleteEmployee"
    classIcon="warning"
    @EditEPL="deleteEmployees"
  ></MDialogVue>
  <teleport to="body">
    <div>
      <div
        class="func-data"
        id="func-data"
        :style="[isDropdown ? dropdownPosition : dropdownPositionReverse]"
        v-if="showFuncList"
      >
        <div class="funclist-item" @click="btnDuplicateEmployee(item)">
          Nhân bản
        </div>
        <div class="funclist-item" @click="btnDeleteEmployee(item)">Xóa</div>
        <div class="funclist-item">Ngừng sử dụng</div>
      </div>
      <div
        class="boder-item-active"
        :style="activePosition"
        @click="clearFuncList"
        v-if="showFuncList"
        id="boder-item-active"
      ></div>
    </div>
  </teleport>
  <EmployeeDetailVue
    :id="employeeIDUpdate"
    v-if="diy.state.showEPLDetail"
    :duplicateEmployeeCode="duplicateEmployeeCode"
    :title="titleEmployeeDetail"
  ></EmployeeDetailVue>
  <!-- NOTIFY -->
  <MNotifyVue
    v-if="diy.state.showNotify"
    :label="labelInsertValid"
  ></MNotifyVue>
</template>
<script>
import _ from "lodash";
import Paginate from "vuejs-paginate-next";
import MLoadingVue from "@/components/loading/MLoading.vue";
import EmployeeDetailVue from "./EmployeeDetail.vue";
import MNotifyVue from "@/components/notify/MNotify.vue";
import MNotifyError from "@/components/notify/MNotifyError.vue";
import employeeApi from "@/api/employeeApi";
export default {
  inject: ["diy"],
  name: "EmployeeList",
  components: {
    MLoadingVue,
    EmployeeDetailVue,
    MNotifyVue,
    MNotifyError,
    Paginate,
  },
  created() {
    // Gọi hàm load dữ liệu danh sách nhân viên
    this.clickCallback(1);
  },
  methods: {
    /**
     * Hàm ẩn list số bản ghi
     * CreatedBy: Bien (08/03/2023)
     */
    onClickOutsidePageSize() {
      this.diy.clearPageSize();
    },
    /**
     * Hàm nhân bản nhân viên
     * CreatedBy: Bien (20/1/2023)
     */
    async btnDuplicateEmployee() {
      try {
        // Lấy id nhân viên của hàng được chọn
        this.employeeIDUpdate = this.employeeDuplidate.employeeId;

        var response = await employeeApi.getEmpNewCode();

        this.titleEmployeeDetail = this.$MISAResource.TITLEFORM.ADD;

        this.duplicateEmployeeCode = response.data;
        // Gọi hàm hiển thị EmployeeDetail
        this.diy.showEPLDetail();

        // Gọi hàm ẩn danh sách chức năng trong bảng nhân viên
        this.clearFuncList();
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm xuất khẩu dữ liệu sang Excel
     * CreatedBy: Bien (19/02/2023)
     */
    async btnExportEmployees() {
      try {
        await employeeApi.exportEmployees(this.textSearch);
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm thực hiện show dialog hỏi trước khi xóa hàng loạt nhân viên được chọn
     * CreatedBy: Bien (18/02/2023)
     */
    async deleteEmployeeListSelect() {
      this.lableDeleteEmployee = this.$MISAResource.CONTENTDIALOG.DELETES;

      await this.diy.showDialogDeleteEmployees();

      this.clearDialogDelete();

      this.diy.clearBtnCancel();
    },
    /**
     * Hàm thực hiện gọi API xóa danh sách nhân viên
     * CreatedBy: Bien (21/02/2023)
     */
    async deleteEmployees() {
      try {
        this.diy.showLoading();

        // Hàm thực hiện xóa khi xóa
        const response = await employeeApi.deleteEmployees(this.selectedList);

        console.log(response);
        if (response.data.isSuccess) {
          this.labelInsertValid = " Nhân viên đã được xóa";
          this.diy.showNotify();
        }

        this.clickCallback(this.indexPage);

        this.diy.clearLoading();
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Hàm checkall nhân viên và bỏ checkall nhân viên
     * CreatedBy: Bien (13/1/2023)
     */
    selectAll() {
      // Lấy danh sách các id nhân viên trong trang
      this.selectedEmployeeId = this.employee.map((item) => item.employeeId);
      if (!this.selected) {
        // Lọc qua những nhân viên đã chọn và bổ sung những vẫn viên chưa chọn
        this.employee.forEach((item) => {
          if (!this.selectedList.includes(item.employeeId)) {
            this.selectedList.push(item.employeeId);
          }
        });
        this.selected = true;
      } else {
        // Lọc những nhân viên đã được checkall
        this.selectedList = this.selectedList.reduce((result, cur) => {
          if (!this.selectedEmployeeId.includes(cur)) {
            result.push(cur);
          }
          return result;
        }, []);
        this.selected = false;
      }
      // Kiểm tra để hiển thị được thao tác chức năng hàng loạt
      if (this.selectedList.length > 1) {
        this.isFunctionAll = true;
        this.diy.showFunctionAll();
      } else {
        this.isFunctionAll = false;
      }
      console.log(this.selected + " select: " + this.selectedList.length);
    },
    /**
     * Hàm tự động hiển thị chức năng hàng loạt khi chọn 2 bản ghi trở lên
     * CreatedBy: Bien (20/02/2023)
     */
    autoCheckAllEmployee() {
      let count = 0;
      // Uncheckbox all khi chuyển trang nếu bản ghi không được chọn hết và ngược lại
      this.employee.forEach((emp) => {
        if (this.selectedList.includes(emp.employeeId)) {
          count++;
        }
      });
      if (count == this.pageSize) {
        this.selected = true;
      } else {
        this.selected = false;
      }
    },
    /**
     * Hàm ẩn danh sách chức năng trong bảng
     * CreatedBy: Bien (12/1/2023)
     */
    clearFuncList() {
      this.showFuncList = false;
    },

    /**
     * Hàm gắn giá trị cho pageSize
     * @param {Kích thước trang} n
     * CreatedBy: Bien (11/1/2023)
     */
    setPageSize(n) {
      // Gắn giá trị cho biến pageSize
      this.pageSize = n;

      // Gọi hàm set pagation
      this.clickCallback(1, this.pageSize, this.textSearch);

      this.autoCheckAllEmployee();
    },

    /**
     * Gọi hàm tìm kiếm nhân viên theo sau 0.5s
     * CreatedBy: Bien (10/1/2023)
     */
    searchEmployee: _.debounce(function () {
      this.search(this.textSearch);
    }, 500),

    /**
     * Hàm tìm kiếm nhân viên
     * @param {Nội dung muốn tìm kiếm} value
     * CreatedBy: Bien (19/1/2023)
     */
    async search() {
      try {
        let me = this;
        // Nhận dữ liệu khi tìm kiếm
        await this.getEmployeePaging(1, me.pageSize, this.textSearch);
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm gắn giá trị danh sách nhân viên, số trang, số bảng ghi
     * CreatedBy: Bien (21/02/2023)
     */
    setDataPaging(res) {
      // Gắn dữ liệu
      this.employee = res.data;
      this.totalPage = res.totalPage;
      this.totalRecord = res.totalRecord;
    },
    /**
     * Hàm chuyển trang
     * CreaetedBy: Bien (10/1/2023)
     */
    async clickCallback(pageNumber) {
      try {
        // Nhận dữ liệu khi tìm kiếm
        const response = await employeeApi.getEmpPaging(
          pageNumber,
          this.pageSize,
          this.textSearch
        );
        this.setDataPaging(response);
        this.indexPage = pageNumber;
        this.autoCheckAllEmployee();
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm phân trang
     * CreatedBy: Bien (10/1/2023)
     */
    async getEmployeePaging(pageNumber, pageSize, filter) {
      try {
        this.diy.showLoading();

        // Nhận dữ liệu gọi dữ liệu
        const response = await employeeApi.getEmpPaging(
          pageNumber,
          pageSize,
          filter
        );

        // Gắn giá trị cho danh sách nhân viên
        this.setDataPaging(response);
        this.indexPage = pageNumber;

        this.diy.clearLoading();
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Hàm hiển thị danh sách chức năng
     * @param {* Sự kiện hiện tại} event
     * @param {* Nhân viên được chọn} item
     * CreatedBy: Bien (13/1/2023)
     */
    btnShowFuncList(event, item) {
      // Gắn giá trị cho tọa độ xuất hiện của funcList
      this.positionX = event.clientX;
      this.positionY = event.clientY;
      this.employeeIdDelete = item.employeeId;
      this.employeeCode = item.employeeCode;
      this.showFuncList = !this.showFuncList;
      this.lableDeleteEmployee = this.$MISAResource.CONTENTDIALOG.DELETE(
        item.employeeCode
      );
      this.employeeDuplidate = item;
      if (this.positionY > 556) {
        this.isDropdown = false;
      } else {
        this.isDropdown = true;
      }
    },

    /**
     * Hàm hỏi trước khi xóa nhân viên
     * CreatedBy: Bien (10/1/2023)
     */
    async btnDeleteEmployee() {
      await this.diy.showDialog();
      this.diy.clearDialogDeleteEmployees();
      this.clearDialogDelete();
      this.diy.clearBtnCancel();
    },

    /**
     * Hàm đóng thông báo sau khi xóa nhân viên
     * CreatedBy: Bien (10/01/2023)
     */
    clearDialogDelete() {
      this.showFuncList = false;

      this.diy.ClearCloseDialog();
      this.diy.ShowBtnDialog();
    },

    /**
     * Hàm xóa nhân viên
     * CreatedBy: Bien (10/1/2023)
     */
    async deleteEmployee() {
      try {
        // Hàm hiển thị loading
        this.diy.showLoading();

        // Hàm nhận dữ liệu sau khi xóa
        const response = await employeeApi.deleteEmp(this.employeeIdDelete);

        console.log(response);

        if (response.isSuccess) {
          this.labelInsertValid = " Nhân viên đã được xóa";
          this.diy.showNotify();
        }

        this.clickCallback(this.indexPage);

        //Hàm ẩn loading
        this.diy.clearLoading();
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Sự kiện mở form EmployeeDetail
     * CreatedBy: Bien (4/1/2023)
     */
    btnAddOnClick() {
      try {
        this.diy.showEPLDetail();
        this.titleEmployeeDetail = this.$MISAResource.TITLEFORM.ADD;

        this.employeeIDUpdate = null;
        this.showFuncList = false;
      } catch (error) {
        console.log("Lỗi hiển thị EmployeeDetail" + error);
      }
    },

    /**
     * Hàm đọc dữ liệu vào form EmployeeDetail
     * @param {*Thông tin nhân viên muốn lấy} item
     * CreatedBy: Bien (4/1/2023)
     */
    rowOnDblClick(item) {
      // Lấy id của hàng được chọn
      this.employeeIDUpdate = item.employeeId;

      this.titleEmployeeDetail = this.$MISAResource.TITLEFORM.UPDATE;
      // Gọi hàm hiển thị form EmployeeDetail
      this.diy.showEPLDetail();

      // Gọi hàm ẩn danh sách chức năng trong bảng nhân viên
      this.clearFuncList();
    },

    /**
     * Hàm reset danh sách nhân viên
     * CreatedBy: Bien (4/1/2023)
     */
    btnRefreshOnClick() {
      // Gọi hàm load lại trang
      this.clickCallback(1);
    },
  },
  computed: {
    /**
     * Hàm set vị trị hiển thị danh sách chức năng trong bảng
     * CreatedBy: Bien (20/01/2023)
     * */
    dropdownPosition() {
      return {
        top: `calc(${this.positionY}px + 10px)`,
        left: `calc(${this.positionX}px -55px)`,
      };
    },
    /**
     * Hàm set vị trí hiển thị phía cuối
     * CreatedBy: Bien (20/01/2023)
     * */
    dropdownPositionReverse() {
      return {
        top: `calc(${this.positionY}px - 103px)`,
        left: `calc(${this.positionX}px -55px)`,
      };
    },
    /**
     * Hàm set border danh sách chức năng nhân viên được chọn
     * CreatedBy: Bien (20/01/2023)
     * */
    activePosition() {
      return {
        top: `calc(${this.positionY}px - 10px)`,
        left: `calc(${this.positionX}px - 15px)`,
      };
    },
  },
  watch: {
    /**
     * Hàm tìm kiếm giá trị tìm kiếm thay đổi
     * CreatedBy: Bien (18/1/2023)
     */
    textSearch: async function () {
      await this.searchEmployee(this.textSearch);
    },
    /**
     * Hàm lắng nghe sự thay đổi checkall
     * CreatedBy: Bien (18/1/2023)
     */
    selectedList: function () {
      this.autoCheckAllEmployee();
      if (this.selectedList.length > 1) {
        this.isFunctionAll = true;
        this.diy.showFunctionAll();
      } else {
        this.isFunctionAll = false;
        this.diy.clearFunctionAll();
      }
    },
  },
  data() {
    return {
      // Khai báo biến tiêu đề form
      titleEmployeeDetail: "Thông tin nhân viên",
      // Khai báo biến nhận mã nhân viên mới khi nhân bản
      duplicateEmployeeCode: null,

      // Khai báo biến nhận giá trị khi nhân bản
      employeeDuplidate: {},

      // Khai báo biến thay đổi css khi cho phép thực hiện hàng loạt
      isFunctionAll: false,

      // Nội dung thông báo mã nhân viên đã tồn tại
      labelEmployeeCodeDuplicate: null,

      // Nội dung thông báo hỏi trước khi xóa
      lableDeleteEmployee: null,

      // Khai báo biến isDropdown
      isDropdown: true,

      // Khai báo biến nhận kết quả trạng thái nút checkAll
      selected: false,

      // Khai báo biến chứa danh sách chọn
      selectedList: [],

      // Khai báo biến indexPage
      indexPage: null,

      // Khai báo biến hiển thị tọa độ theo Ox
      positionX: 0,

      // Khai báo biến hiển thị tọa độ theo Oy
      positionY: 0,

      // Khai báo biến danh sách nhân viên
      employee: {},

      // Khai báo biến nhận id nhân viên muốn sửa
      employeeIDUpdate: null,

      // Khai báo biến id nhân viên muốn xóa
      employeeIdDelete: null,

      // Khai báo biến mã nhân viên khi xóa
      employeeCode: null,

      // Khai báo biến tổng số bản ghi
      totalRecord: null,

      // Khai báo biến toltalPage
      totalPage: 1,

      // Khai báo biến nhận value inputSearch
      textSearch: "",

      // Khai báo biến nhận pageSize
      pageSize: 20,

      // Biến trạng thái hiển thị danh sách chức năng
      showFuncList: false,

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

      // Khai báo mảng chức năng
      funcList: [
        {
          key: 0,
          value: "Nhân bản",
        },
        {
          key: 1,
          value: "Xóa",
        },
        {
          key: 2,
          value: "Ngưng sử dụng",
        },
      ],
    };
  },
};
</script>
<!-- <style scoped>
.pagination {
  list-style: none;
  display: flex;
  padding: unset;
}

.page-item {
  padding: 0 0.5rem;
  height: 20px;
  line-height: 20px;
}

.prev-btn {
  margin-right: 13px;
  margin-top: 3px;
}

.next-btn {
  margin-top: 1px;
  margin-left: 13px;
}

.page-item.active {
  border: 1px solid #e0e0e0;
  font-weight: 700;
  line-height: 18px;
}

@import url(./employee.css);
</style> -->
