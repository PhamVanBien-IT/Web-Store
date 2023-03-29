<template>
  <div class="title-cbb">{{ title }}</div>
  <div class="combobox">
    <div class="combobox-input">
      <input
        @keydown="keyDownSelectItem"
        @input="onSearchItem"
        v-model="textSelected"
        autocomplete="off"
        class="text-form"
        type="text"
        :class="classInputCBox"
        :tabindex="tabindex"
        :name="nameInput"
        :ref="nameInput"
      />
      <div class="iconBtnCombobox">
        <button
          class="comobox__button"
          @keydown="keyDownSelectItemBtn"
          @click="onShowHideData"
        ></button>
      </div>
    </div>
    <div
      v-if="diy.state.showDataCombobox"
      class="combobox__data"
      @scroll="onScroll"
    >
      <div
        class="combobox-item"
        :ref="`item_${index}`"
        :class="{ 'item-select': index == indexItemSelect }"
        @click="itemOnSelect(entity, index)"
        v-for="(entity, index) in entitySearch"
        :key="index"
        :value="entity[propValue]"
      >
        {{ entity[propName] }}
      </div>
    </div>
  </div>
</template>
<script>
import comboboxApi from "@/api/comboboxApi";
import _ from "lodash";
export default {
  inject: ["diy"],
  name: "MCombobox",
  emits: ["update:modelValue", "textSelected"],
  props: [
    "propName",
    "propValue",
    "modelValue",
    "class",
    "tabindex",
    "name",
    "title",
    "baseURL",
  ],
  created() {
    if (this.baseURL) {
      // Lấy dữ liệu của bảng department
      this.getEntities(this.baseURL, 10);
    }

    this.nameInput = this.name;
  },
  mounted() {
    // Xóa giá trị input sau khi cất nhân viên
    if (!this.modelValue) {
      this.textSelected = "";
    } else {
      this.textSelected = this.modelValue;
    }
  },
  updated() {
    this.classInputCBox = this.class;
  },
  methods: {
    /**
     * Hàm hiển thị thêm danh sách chức danh khi scroll
     * CreatedBy: Bien (07/03/2023)
     */
    onScroll: _.debounce(function () {
      this.litMit += 10;
      this.getEntities(this.baseURL, this.litMit);
    }, 500),
    /**
     * Hàm set focus cho input
     * CreatedBy: Bien (22/02/2023)
     */
    onFocus() {
      this.$refs[this.name].focus();
    },
    /**
     * Hàm lấy dữ liệu cho combobox đơn vị
     * CreatedBy: Bien (9/1/2023)
     */
    async getEntities(baseURL, litMit) {
      try {
        // Gắn giá trị kết quả lấy dữ liệu bảng department
        const response = await comboboxApi.getEntities(baseURL, litMit);

        // Gắn dữ liệu
        this.entities = response.data;
        this.setItemSelected();
        this.entitySearch = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Hàm hiển thị Comboboxdata
     * CreatedBy: Bien (9/1/2023)
     */
    onShowHideData() {
      if(this.baseURL){
        this.diy.toggleDataCombobox();
      }
    },

    /**
     * Hàm gắn giá trị cho input khi chọn combobox-item
     * CreatedBy: Bien (9/1/2023)
     */
    itemOnSelect(entity) {
      var me = this;
      // Reset lại danh sách
      this.entitySearch = this.entities;
      this.itemSelected = entity;
      this.textSelected = entity[this.propName];
      this.$emit("update:modelValue", entity[this.propValue]);
      // Set index của item được chọn
      this.indexItemSelect = me.findIndexSelected;
      if (this.diy.state.showDataCombobox) {
        this.diy.clearDataCombobox();
      }
    },

    /**
     * Hàm gắn giá tìm item tương ứng với modelVue
     * CreatedBy: Bien (9/1/2023)
     */
    setItemSelected() {
      var me = this;
      // Tìm item tướng ứng với modelValue
      let entitySelected = this.entities.find(
        (item) => item[me.propValue] == me.modelValue
      );

      if (entitySelected) {
        this.textSelected = entitySelected[this.propName];
      }
    },

    /**
     * Hàm gắn giá trị theo ô input
     * CreatedBy: Bien (9/1/2023)
     */
    onSearchItem() {
      var me = this;
      // Tìm item tướng ứng với modelValue
      this.entitySearch = this.entities.filter((item) =>
        item[me.propName].toLowerCase().includes(me.textSelected.toLowerCase())
      );
      this.isShowData = true;
    },

    /**
     * Hàm bắt sự kiện keydown của input combobox
     * CreatedBy: Bien ( 11/1/2023)
     */
    keyDownSelectItem(event) {
      const keyCode = event.keyCode;
      switch (keyCode) {
        case this.$MISAEnum.KEY_CODE.ENTER:
          this.unUpIndexItemSelect = true;
          // Xác định item đang chọn dựa vào index
          // eslint-disable-next-line no-case-declarations
          const item = this.entitySearch[this.indexItemSelect];
          this.itemOnSelect(item);
          break;
        case this.$MISAEnum.KEY_CODE.ROW_UP:
          //  Kiểm tra hiển thị
          if (!this.isShowData) {
            this.diy.showDataCombobox();
          }

          if (this.indexItemSelect > 0 && !this.unUpIndexItemSelect) {
            this.indexItemSelect--;
          } else {
            this.unUpIndexItemSelect = false;
          }
          break;
        case this.$MISAEnum.KEY_CODE.ROW_DOWN:
          //  Kiểm tra hiển thị
          if (!this.isShowData) {
            this.diy.showDataCombobox();
          }
          // eslint-disable-next-line no-case-declarations
          let maxLength = this.entitySearch.length;
          if (
            this.indexItemSelect < maxLength - 1 &&
            !this.unUpIndexItemSelect
          ) {
            this.indexItemSelect++;
          } else {
            this.unUpIndexItemSelect = false;
          }
          break;
        default:
          break;
      }
    },

    /**
     * Hàm bắt sự kiện keydown của button hiển thị
     * CreatedBy: Bien ( 11/1/2023)
     */
    keyDownSelectItemBtn(event) {
      const keyCode = event.keyCode;
      switch (keyCode) {
        case this.$MISAEnum.KEY_CODE.ENTER:
          this.diy.clearDataCombobox();
          // Xác định item đang chọn dựa vào index
          // eslint-disable-next-line no-case-declarations
          const item = this.entitySearch[this.indexItemSelect];
          this.itemOnSelect(item);
          break;
        case this.$MISAEnum.KEY_CODE.ROW_UP:
          //  Kiểm tra hiển thị
          if (!this.diy.state.showDataCombobox) {
            this.diy.showDataCombobox();
          }
          if (this.indexItemSelect > 0) {
            this.indexItemSelect--;
          }
          break;
        case this.$MISAEnum.KEY_CODE.ROW_DOWN:
          //  Kiểm tra hiển thị
          if (!this.diy.state.showDataCombobox) {
            this.diy.showDataCombobox();
          }
          // eslint-disable-next-line no-case-declarations
          let maxLength = this.entitySearch.length;
          if (this.indexItemSelect < maxLength - 1) {
            this.indexItemSelect++;
          }
          break;
        default:
          break;
      }
    },
  },
  computed: {
    /**
     * Tìm kiếm giá trị được chọn
     * CreatedBy: Bien (9/2/2023)
     */
    findIndexSelected: function () {
      var me = this;
      // Tính index của item đã được chọn
      let findIndex = this.entitySearch.findIndex(
        (item) => item[me.propValue] == me.itemSelected[me.propValue]
      );
      return findIndex;
    },
  },
  data() {
    return {
      // Khai báo biến pageSize hiển thị
      litMit: 10,

      // Tên combobox
      nameInput: null,

      // Khai báo biện nhân class
      classInputCBox: null,

      // Khai báo biến nhận giá trị
      entities: [],

      // Khai báo biến chứa entity bị thay đổi
      entitySearch: [],

      // Khai báo biến cho input
      textSelected: null,

      // Khai báo biến ngăn tăng indexItemSelect
      unUpIndexItemSelect: true,

      // Khai báo biến index trong comboxbox__data
      indexItemSelect: null,

      // Khai báo item được chọn
      itemSelected: null,
    };
  },
};
</script>
<style scoped>
@import url(./combobox.css);
</style>
