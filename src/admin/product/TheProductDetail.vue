<template>
  <!-- FORM -->
  <div class="overlay">
    <div
      class="form-container-detail"
      v-on:keydown.esc="btnCloseOnClickIcon"
      v-on:keydown.tab="clearValidateProduct"
      v-on:keyup.ctrl.shift.s.prevent="btnSaveAndAddProduct"
      v-on:keydown.alt.s.prevent="btnSaveProduct"
    >
      <div class="form-header">
        <div
          @click="btnCloseOnClickIcon"
          class="icon close-form tags"
          data-gloss="Đóng (ESC)"
          id="close-form-icon"
        >
          <font-awesome-icon icon="fa-solid fa-x" />
        </div>
        <div class="form-title">{{ title }}</div>
      </div>
      <div class="form-control-detail">
        <div class="form-control-detail-top">
          <div class="form-control-detail-left">
            <div class="row-detail col-g p-relative">
              <div
                class="col-5-detail"
                :class="{
                  'tags-error-ProductCode':
                    validateList[`ProductCode`].isStatus,
                }"
                :data-gloss="validateList[`ProductCode`].labelValidate"
              >
                <MInputTextVue
                  v-model="product.productCode"
                  type="text"
                  tabindex="1"
                  class="text-form"
                  id="productCode"
                  :ref="'ProductCode'"
                  :name="'ProductCode'"
                  :class="{ 'bd-red': validateList[`ProductCode`].isStatus }"
                  title="Mã"
                ></MInputTextVue>
              </div>
              <div
                class="col-7-detail p-relative"
                :class="{ 'tags-error': validateList[`FullName`].isStatus }"
                :data-gloss="validateList[`FullName`].labelValidate"
              >
                <MInputTextVue
                  v-model="product.fullName"
                  tabindex="2"
                  class="text-form"
                  :ref="'FullName'"
                  :name="'FullName'"
                  :class="{ 'bd-red': validateList[`FullName`].isStatus }"
                  title="Tên"
                ></MInputTextVue>
              </div>
            </div>
            <div
              class="col-12 p-relative"
              :class="{
                'tags-error-department': isActiveCategory,
              }"
              :data-gloss="errorCategory"
              v-click-outside-element="onClickOutsideCategory"
            >
              <MComboboxVue
                title="Danh mục"
                propName="categoryName"
                propValue="categoryId"
                v-model="product.categotyId"
                baseURL="Categorys"
                tabindex="3"
                :ref="'Category'"
                :name="'Category'"
                :class="{ 'bd-red tags-error': isActiveCategory }"
              ></MComboboxVue>
            </div>
            <div class="col-12 col-g pd-left-0">
              <MComboboxVue
                title="Nhà cung cấp"
                propName="supplierName"
                propValue="supplierId"
                v-model="product.supplierId"
                baseURL="Suppliers"
                tabindex="4"
                :ref="'Supplier'"
                :name="'Supplier'"
                :class="{ 'bd-red tags-error': isActiveCategory }"
              ></MComboboxVue>
            </div>
          </div>
          <div class="form-control-detail-right">
            <div class="row-detail col-g p-relative">
              <div
                class="col-6-detail"
                :class="{
                  'tags-error-date-of-birth': validateList[`Quantity`].isStatus,
                }"
                :data-gloss="validateList[`Quantity`].labelValidate"
              >
                <MInputTextVue
                  v-model="product.quantity"
                  type="text"
                  tabindex="5"
                  class="text-form"
                  title="Số lượng"
                  :ref="'Quantity'"
                  :name="'Quantity'"
                ></MInputTextVue>
              </div>
              <div
                class="col-7-detail"
                :class="{
                  'tags-error-date-of-birth': validateList[`Price`].isStatus,
                }"
                :data-gloss="validateList[`Price`].labelValidate"
              >
                <MInputTextVue
                  v-model="product.price"
                  type="text"
                  tabindex="6"
                  class="text-form"
                  title="Giá"
                  :ref="'Price'"
                  :name="'Price'"
                ></MInputTextVue>
              </div>
            </div>
            <div class="row-detail col-g p-relative">
              <div
                class="col-6-detail"
                :class="{
                  'tags-error-identity-number': validateList[`Size`].isStatus,
                }"
                :data-gloss="validateList[`Size`].labelValidate"
              >
                <MInputTextVue
                  tabindex="7"
                  class="text-form"
                  title="Size"
                  v-model="product.size"
                  :ref="'Size'"
                  :name="'Size'"
                  :class="{ 'bd-red': validateList[`Size`].isStatus }"
                ></MInputTextVue>
              </div>
              <div
                class="col-7-detail"
                :class="{
                  'tags-error-date-identity-date':
                    validateList[`Color`].isStatus,
                }"
                :data-gloss="validateList[`Color`].labelValidate"
              >
                <MInputTextVue
                  type="text"
                  tabindex="8"
                  class="text-form"
                  title="Màu sẵc"
                  v-model="product.color"
                  :maxDate="maxDateInput"
                  :ref="'Color'"
                  :name="'Color'"
                  :class="{ 'bd-red': validateList['Color'].isStatus }"
                ></MInputTextVue>
              </div>
            </div>
            <div class="col-12 col-g pd-left-0">
              <MInputTextVue
                title="Ảnh"
                type="file"
                tabindex="9"
                v-model="product.image"
              ></MInputTextVue>
            </div>
          </div>
        </div>
        <div class="form-control-detail-bottom">
          <div class="col-12 col-g pd-left-0">
            <MInputTextVue
              class="text-form"
              title="Mô tả"
              type="text"
              v-model="product.description"
              tabindex="10"
              :class="{ 'bd-red': validateList['Description'].isStatus }"
            ></MInputTextVue>
          </div>
        </div>
      </div>
      <div class="form-footer">
        <div class="form-footer-left">
          <MButtonVue
            label="Hủy"
            class="btn-cancel"
            @click="btnCloseOnClick"
            tabindex="19"
            v-on:keydown.tab.prevent="inputOnFocus('ProductCode')"
          ></MButtonVue>
        </div>
        <div class="form-footer-right">
          <MButtonVue
            label="Cất"
            @click="btnSaveProduct"
            class="btn-save tags-save"
            tabindex="17"
            data-gloss="Ctrl + s"
          ></MButtonVue>
          <MButtonVue
            label="Cất và Thêm"
            @click="btnSaveAndAddProduct"
            class="btn tags-save-add"
            tabindex="18"
            data-gloss="Ctrl + Shift + s"
          ></MButtonVue>
        </div>
      </div>
    </div>
  </div>
  <!-- DIALOG -->
  <MDialogVue
    v-if="diy.state.showDialog"
    :label="labelDialog"
    :classIcon="[isDialog ? 'icondelete' : 'warning']"
    @EditEPL="btnSaveProduct"
    :inputValidate="inputValidate"
  ></MDialogVue>
</template>
  <script>
import productApi from "@/api/productAPI";
import MInputText from "@/components/input/MInputText.vue";
export default {
  inject: ["diy"],
  name: "TheProductDetail",
  props: ["id", "duplicateProductCode", "title"],
  components: { MInputText },
  created() {
    if (this.id) {
      this.getProductByID(this.id);
    } else {
      this.product = {};
      this.setProductCode();
    }
  },
  mounted() {
    this.inputOnFocus("ProductCode");
  },
  methods: {
    /**
     * Hàm ẩn danh sách đơn vị khi click ra ngoài
     * CreatedBy: Bien (08/03/2023)
     */
    onClickOutsideCategory() {
      this.diy.clearDataCombobox();
    },
    /**
     * Hàm focus cho input ProductCode
     * CreatedBy: Bien (22/02/2023)
     */
    inputOnFocus(inputName) {
      this.$nextTick(() => {
        this.$refs[inputName].onFocus();
      });
    },
    /**
     * Hàm thực hiện sự kiện khi nhấn nút cất và thêm
     * CreatedBy: Bien (4/1/2023)
     */
    btnSaveAndAddProduct() {
      try {
        this.validateProduct();

        this.isSaveProduct = false;

        if (this.isValidate) {
          this.saveProcduct(this.id);
        }
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm thực hiện sự kiện khi nhấn nút cất
     * CreatedBy: Bien (10/1/2023)
     */
    btnSaveProduct() {
      // Kiểm tra dữ liệu đầu vào
      this.validateProduct();

      // Xác nhận là hành động cất
      this.isSaveProduct = true;

      if (this.isValidate) {
        this.saveProcduct(this.id);
      }
    },
    /**
     * Hàm xử lí thêm mới nhân viên
     * CreatedBy: Bien (21/02/2023)
     */
    async createProduct() {
      try {
        // Nhận dữ liệu sau khi thêm nhân viên
        const response = await productApi.createProduct(this.product);

        console.log("Posting data", response);

        if (response.errorCode == this.$MISAEnum.ERRORCODE.SUCCESS) {
          this.$parent.labelNotify = this.$MISAResource.LABELNOTIFY.INSERT("Sản phẩm");
          this.diy.showNotify();
          this.$parent.textSearch = "";
          this.$parent.clickCallback(1);
          this.product = {};
          this.validateList[`isActive`] = false;
          // Thực hiện khi click nút cất
          if (this.isSaveProduct) {
            this.diy.clearProductDetail();
          } else {
            this.setProductCode();
            this.inputOnFocus("ProductCode");
          }
        } else {
          this.handleErrorValidate(response);
        }
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm xử lí sửa thông tin nhân viên
     * CreatedBy: Bien (21/02/2023)
     */
    async updateEmployee(prodcutId, product) {
      try {
        // Nhận dữ liệu sau khi sửa nhân viên
        const response = await productApi.updateProduct(prodcutId, product);
        console.log("Posting data", response);

        if (response.errorCode == this.$MISAEnum.ERRORCODE.SUCCESS) {
          this.$parent.labelNotify = this.$MISAResource.LABELNOTIFY.UPDATE("Sản phẩm");
          this.diy.showNotify();
          this.$parent.clickCallback(this.$parent.indexPage);
          this.product = {};
          this.$parent.prodcutId = null;

          // Thực hiện khi click nút cất
          if (this.isSaveProduct) {
            this.diy.clearProductDetail();
          } else {
            this.setProductCode();
            this.inputOnFocus("ProductCode");
          }
        } else {
          this.handleErrorValidate(response);
        }
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm handle lỗi validate khi gọi API
     * @param {Kết quả gọi API} res
     * CreatedBy: Bien (24/02/2023)
     */
    handleErrorValidate(res) {
      switch (res.response.status) {
        case this.$MISAEnum.STATUSCODE.OK:
          this.validateList[`isActive`] = false;
          break;
        case this.$MISAEnum.STATUSCODE.BADREQUEST:
          var moreInfo = res.response.data.moreInfo;
          if (
            res.response.data.errorCode == this.$MISAEnum.ERRORCODE.VALIDATERROR
          ) {
            this.showErrorValidate(moreInfo[0].value);

            this.validateList[`isActive`] = true;
            if (this.validateList[`isActive`]) {
              moreInfo.forEach((item) => {
                this.validateList[`${item.key}`].labelValidate = item.value;
                this.validateList[`${item.key}`].isStatus = true;
              });
            }
          }
          break;
        case this.$MISAEnum.STATUSCODE.INTERNALSERVER:
          if (
            res.response.data.errorCode == this.$MISAEnum.ERRORCODE.UNKNOWNERROR
          ) {
            this.showErrorValidate(this.$MISAResource.ERRORVALIDATE.DEPARTMENT);
          }
          break;
        default:
          break;
      }
    },
    /**
     *  Hàm thực hiện cất sản phẩm
     * CreatedBy: Bien(10/1/2023)
     */
    saveProcduct(productId) {
      try {
        // Kiểm id nhân viên có tồn tại hay không để biết nhiệm vụ là thêm hay sửa
        if (productId != null) {
          // Kiểm tra xem có phải chắc năng nhân bản hay không
          if (!this.duplicateProductCode) {
            this.updateEmployee(productId, this.product);
          } else {
            this.createProduct();
          }
        } else {
          this.createProduct();
        }
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm thông báo lỗi validate popup
     * CreatedBy: Bien (21/2/2023)
     */
    showErrorValidate(messageError) {
      this.isDialog = true;

      // Gắn giá trị cho label dialog
      this.labelDialog = messageError;

      // Hiển thị dialog lỗi
      this.diy.showDialog();

      // Ẩn nút đồng ý và không dialog khi tên để trống
      this.diy.clearBtnDialog();

      // Hiển thị nút đóng trên dialog
      this.diy.showCloseDialog();
    },
    /**
     * Hàm loại bỏ lỗi khi nhập giá trị đúng định dạng
     * CreatedBy: Bien (24/02/2023)
     */
    clearValidateProduct() {
      if (this.product.productCode) {
        this.validateList[`ProductCode`].isStatus = false;
      } else {
        this.validateList[`ProductCode`].isStatus = true;
        this.validateList[`ProductCode`].labelValidate =
          this.$MISAResource.ERRORVALIDATE.PRODUCTCODE;
      }

      if (this.product.fullName) {
        this.validateList[`FullName`].isStatus = false;
        if (this.product.categotyId) {
          this.isActiveCategory = false;
        } else {
          this.isActiveCategory = true;
          this.errorCategory = this.$MISAResource.ERRORVALIDATE.DEPARTMENT;
        }
      } else {
        this.validateList[`FullName`].isStatus = true;
        this.validateList[`FullName`].labelValidate =
          this.$MISAResource.ERRORVALIDATE.FULLNAME;
      }

      // // Khai báo chuỗi định dạng số điện thoại
      // const phoneNumberFormat = new RegExp(
      //   /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/
      // );

      // if (phoneNumberFormat.test(this.product.landlineNumber)) {
      //   this.validateList[`LandlineNumber`].isStatus = false;
      // } else {
      //   if (this.employee.landlineNumber != null) {
      //     this.validateList[`LandlineNumber`].isStatus = true;
      //     this.validateList[`LandlineNumber`].labelValidate =
      //       this.$MISAResource.ERRORVALIDATE.LANDLINENUMBER;
      //   }
      // }

      // if (
      //   phoneNumberFormat.test(this.employee.phoneNumber) &&
      //   this.employee.phoneNumber
      // ) {
      //   this.validateList[`PhoneNumber`].isStatus = false;
      // } else {
      //   if (this.employee.phoneNumber != null) {
      //     this.validateList[`PhoneNumber`].isStatus = true;
      //     this.validateList[`PhoneNumber`].labelValidate =
      //       this.$MISAResource.ERRORVALIDATE.PHONENUMBER;
      //   }
      // }

      // // Khai báo chuỗi định dạng số chứng minh nhân dân
      // const identityNumberFormat = new RegExp(/^([0-9]{12})\b/);
      // if (
      //   identityNumberFormat.test(this.employee.identityNumber) &&
      //   this.employee.identityNumber
      // ) {
      //   this.validateList[`IdentityNumber`].isStatus = false;
      // } else {
      //   if (this.employee.identityNumber != null) {
      //     this.validateList[`IdentityNumber`].isStatus = true;
      //     this.validateList[`IdentityNumber`].labelValidate =
      //       this.$MISAResource.ERRORVALIDATE.IDENTITYNUMBER;
      //   }
      // }

      // // Khai báo chuỗi định dạnh email
      // const emailFormat = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,5})+)$/);
      // if (emailFormat.test(this.employee.email) && this.employee.email) {
      //   this.validateList[`Email`].isStatus = false;
      // } else {
      //   if (this.employee.email != null) {
      //     this.validateList[`Email`].isStatus = true;
      //     this.validateList[`Email`].labelValidate =
      //       this.$MISAResource.ERRORVALIDATE.EMAIL;
      //   }
      // }

      // // Khai báo biến nhận ngày hiện tại
      // const dateNow = new Date();

      // const identityDate = new Date(this.employee.identityDate);
      // if (identityDate < dateNow && this.employee.identityDate) {
      //   this.validateList[`IdentityDate`].isStatus = false;
      // } else {
      //   if (this.employee.identityDate != null) {
      //     this.validateList[`IdentityDate`].isStatus = true;
      //     this.validateList[`IdentityDate`].labelValidate =
      //       this.$MISAResource.ERRORVALIDATE.IDENTITYDATE;
      //   }
      // }

      // const dateOfBirth = new Date(this.employee.dateOfBirth);
      // if (dateOfBirth < dateNow && this.employee.dateOfBirth) {
      //   this.validateList[`DateOfBirth`].isStatus = false;
      // } else {
      //   if (this.employee.dateOfBirth != null) {
      //     this.validateList[`DateOfBirth`].isStatus = true;
      //     this.validateList[`DateOfBirth`].labelValidate =
      //       this.$MISAResource.ERRORVALIDATE.DATEOFBIRTH;
      //   }
      // }
    },
    /**
     * Validate dứ liệu đầu thông tin nhân viên
     * CreatedBy: Bien (24/02/2023)
     */
    validateProduct() {
      if (this.product.productCode) {
        this.validateList[`ProductCode`].isStatus = false;
        this.isValidate = true;
      } else {
        this.validateList[`ProductCode`].isStatus = true;
        this.validateList[`ProductCode`].labelValidate =
          this.$MISAResource.ERRORVALIDATE.PRODUCTCODE;
        this.showErrorValidate(this.validateList[`ProductCode`].labelValidate);
        this.isValidate = false;
        this.inputValidate = "ProductCode";
      }

      if (this.product.fullName) {
        this.validateList[`FullName`].isStatus = false;
        this.isValidate = true;
      } else {
        this.validateList[`FullName`].isStatus = true;
        this.validateList[`FullName`].labelValidate =
          this.$MISAResource.ERRORVALIDATE.FULLNAME;
        this.showErrorValidate(this.validateList[`FullName`].labelValidate);
        this.inputValidate = "FullName";
        this.isValidate = false;
      }

      if (this.product.categotyId) {
        this.isActiveCategory = false;
        this.isValidate = true;
      } else {
        this.isActiveCategory = true;
        this.errorCategory = this.$MISAResource.ERRORVALIDATE.DEPARTMENT;
        if (this.validateList[`FullName`].isStatus) {
          this.showErrorValidate(this.validateList[`FullName`].labelValidate);
          this.inputValidate = "FullName";
        } else {
          this.showErrorValidate(this.errorCategory);
          this.inputValidate = "Category";
        }
        this.isValidate = false;
      }

      //   // Khai báo biến nhận ngày hiện tại
      //   const dateNow = new Date();

      //   const dateOfBirth = new Date(this.product.dateOfBirth);
      //   if (dateOfBirth < dateNow && this.product.dateOfBirth) {
      //     this.validateList[`DateOfBirth`].isStatus = false;
      //     this.isValidate = true;
      //   } else {
      //     if (this.product.dateOfBirth != null) {
      //       this.validateList[`DateOfBirth`].isStatus = true;
      //       this.validateList[`DateOfBirth`].labelValidate =
      //         this.$MISAResource.ERRORVALIDATE.DATEOFBIRTH;
      //       this.showErrorValidate(
      //         this.validateList[`DateOfBirth`].labelValidate
      //       );
      //       this.inputValidate = "DateOfBirth";
      //       this.isValidate = false;
      //     }
      //   }

      //   // Khai báo chuỗi định dạng số chứng minh nhân dân
      //   const identityNumberFormat = new RegExp(/^([0-9]{12})\b/);
      //   if (
      //     identityNumberFormat.test(this.product.identityNumber) &&
      //     this.product.identityNumber
      //   ) {
      //     this.validateList[`IdentityNumber`].isStatus = false;
      //     this.isValidate = true;
      //   } else {
      //     if (this.employee.identityNumber != null) {
      //       this.validateList[`IdentityNumber`].isStatus = true;
      //       this.validateList[`IdentityNumber`].labelValidate =
      //         this.$MISAResource.ERRORVALIDATE.IDENTITYNUMBER;
      //       this.showErrorValidate(
      //         this.validateList[`IdentityNumber`].labelValidate
      //       );
      //       this.inputValidate = "IdentityNumber";
      //       this.isValidate = false;
      //     }
      //   }

      //   const identityDate = new Date(this.employee.identityDate);
      //   if (identityDate < dateNow && this.employee.identityDate) {
      //     this.validateList[`IdentityDate`].isStatus = false;
      //     this.isValidate = true;
      //   } else {
      //     if (this.employee.identityDate != null) {
      //       this.validateList[`IdentityDate`].isStatus = true;
      //       this.validateList[`IdentityDate`].labelValidate =
      //         this.$MISAResource.ERRORVALIDATE.IDENTITYDATE;
      //       this.showErrorValidate(
      //         this.validateList[`IdentityDate`].labelValidate
      //       );
      //       this.inputValidate = "IdentityDate";
      //       this.isValidate = false;
      //     }
      //   }
      //   // Khai báo chuỗi định dạng số điện thoại
      //   const phoneNumberFormat = new RegExp(
      //     /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/
      //   );

      //   if (
      //     phoneNumberFormat.test(this.employee.phoneNumber) &&
      //     this.employee.phoneNumber
      //   ) {
      //     this.validateList[`PhoneNumber`].isStatus = false;
      //     this.isValidate = true;
      //   } else {
      //     if (this.employee.phoneNumber != null) {
      //       this.validateList[`PhoneNumber`].isStatus = true;
      //       this.validateList[`PhoneNumber`].labelValidate =
      //         this.$MISAResource.ERRORVALIDATE.PHONENUMBER;
      //       this.showErrorValidate(
      //         this.validateList[`PhoneNumber`].labelValidate
      //       );
      //       this.inputValidate = "PhoneNumber";
      //       this.isValidate = false;
      //     }
      //   }

      //   if (phoneNumberFormat.test(this.employee.landlineNumber)) {
      //     this.validateList[`LandlineNumber`].isStatus = false;
      //   } else {
      //     if (this.employee.landlineNumber != null) {
      //       this.validateList[`LandlineNumber`].isStatus = true;
      //       this.validateList[`LandlineNumber`].labelValidate =
      //         this.$MISAResource.ERRORVALIDATE.LANDLINENUMBER;
      //       this.showErrorValidate(
      //         this.validateList[`LandlineNumber`].labelValidate
      //       );
      //       this.inputValidate = "LandlineNumber";
      //       this.isValidate = false;
      //     }
      //   }

      //   // Khai báo chuỗi định dạnh email
      //   const emailFormat = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,5})+)$/);
      //   if (emailFormat.test(this.employee.email) && this.employee.email) {
      //     this.validateList[`Email`].isStatus = false;
      //     this.isValidate = true;
      //   } else {
      //     if (this.employee.email != null) {
      //       this.validateList[`Email`].isStatus = true;
      //       this.validateList[`Email`].labelValidate =
      //         this.$MISAResource.ERRORVALIDATE.EMAIL;
      //       this.showErrorValidate(this.validateList[`Email`].labelValidate);
      //       this.inputValidate = "Email";
      //       this.isValidate = false;
      //     }
      //   }
    },
    /**
     * Hàm gắn giá trị cho form employeeDetail theo id nhân viên
     * CreatedBy: Bien (11/1/2023)
     */
    async getProductByID(id) {
      try {
        if (id) {
          // Nhận dữ liệu sau khi lấy nhân viên theo id
          const response = await productApi.getProductById(id);

          console.log(response);

          this.product = response.data;
        }
        if (this.duplicateProductCode) {
          this.product.productCode = this.duplicateProductCode;
        }
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm set giá trị mặc định cho ProductCode
     * CreateBy: Bien (11/1/2023)
     */
    async setProductCode() {
      try {
        // Nhận dữ liệu mã nhân viên mới
        const response = await productApi.getProductNewCode();

        this.product.productCode = response.data;
      } catch (error) {
        console.log("Lỗi lấy mã sản phẩm mới" + error);
      }
    },

    /**
     * Sự kiện đóng form EmployeeDetail
     * CreatedBy: Bien (4/1/2023)
     */
    btnCloseOnClick() {
      this.diy.clearProductDetail();
    },

    /**
     * Sự kiện hiển thị dialog khi click icon X
     * CreatedBy: Bien (9/1/2023)
     */
    btnCloseOnClickIcon() {
      this.isDialog = false;
      this.labelDialog = this.$MISAResource.CONTENTDIALOG.SAVE;
      this.diy.showDialog();
      this.diy.showBtnDialog();
      this.diy.clearCloseDialog();
    },
  },
  watch: {
    /**
     * Hàm lắng nghe sự đổi của input tiền
     * @param {Gía trị mới của tiền} newValue
     */
    salary: function (newValue) {
      var me = this;
      me.salary = newValue;
      console.log("Tiền đã thay đổi:", newValue);
    },
  },
  data() {
    return {
      // Danh sách muốn truyền vào combobox
      baseURLCombobox: "",
      // Hiển thị icon dialog tương ứng
      isDialog: false,
      // Khai báo biến validate dữ liệu
      isValidate: null,
      // Khai báo biến focus vào lỗi input tương ứng
      inputValidate: null,
      // Khai báo biến nhập giá trị check là khách hàng
      isCustomer: false,

      // Khai báo biến nhập giá trị check là nhà cung cấp
      isSupplier: false,

      // Khai báo biến nhận giá trị lỗi validate
      validateList: {
        isActive: false,
        ProductCode: {
          labelValidate: null,
          isStatus: false,
        },
        FullName: {
          labelValidate: null,
          isStatus: false,
        },
        CategoryId: {
          labelValidate: null,
          isStatus: false,
        },
        Quantity: {
          labelValidate: null,
          isStatus: false,
        },
        Price: {
          labelValidate: null,
          isStatus: false,
        },
        Size: {
          labelValidate: null,
          isStatus: false,
        },
        Color: {
          labelValidate: null,
          isStatus: false,
        },
        Image: {
          labelValidate: null,
          isStatus: false,
        },
        Description: {
          labelValidate: null,
          isStatus: false,
        },
      },

      // Khai báo biến nhận giá trị lỗi danh mục
      errorCategory: null,

      // Khai báo biến max thời gian
      maxDateInput: this.$MISACommon.formatDateReverse(Date.now()),

      // Khai báo biến salary
      salary: null,

      // Khai báo một đối tượng employee
      product: {},

      // Khai báo danh sách danh mục
      categorys: {},

      // Khai báo biến hiển thị label dialog đơn vị không được để trống
      labelDialog: null,

      // Khai báo biến bắt lỗi để trống danh mục
      isActiveCategory: null,

      // Khai báo biến checked gender
      isCheckedGender: null,

      // Khai báo biến nhân id
      employeeID: null,

      // Khai báo biến thể thiện thực hiện hành động cất
      isSaveProduct: false,
    };
  },
};
</script>
  <style scoped>
@import url(./product.css);
</style>
  