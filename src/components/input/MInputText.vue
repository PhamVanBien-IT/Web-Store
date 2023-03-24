<template>
  <div>
    <div class="title-input">{{ title }}</div>
    <div class="border-input">
      <input
      :name="nameInput"
      :ref="nameInput"
      :tabindex="tabindexInput"
      :type="typeInput"
      v-model="value"
      :id="idInput"
      :class="classInput"
      :placeholder="placeholderText"
      :max="maxDateInput"
    />
    </div>
  </div>
</template>
<script>
export default {
  name: "MInputText",
  emits: ["update:modelValue"],
  props: [
    "class",
    "type",
    "tabindex",
    "modelValue",
    "placeholder",
    "id",
    "maxDate",
    "name",
    "maxlength",
    "title"
  ],
  created() {
    // Nhận giá trị modelValue
    this.classInput = this.class;

    // Nhận giá trị type đã truyền vào
    this.typeInput = this.type;

    // Nhận giá trị tabindex
    this.tabindexInput = this.tabindex;

    // Nhận giá trị id truyền vào
    this.idInput = this.id;
    
    // Nhận giá trị placeholder đã truyền vào
    this.placeholderText = this.placeholder;

    // Nhận giá trị thời gian hiện tại
    this.maxDateInput = this.maxDate;

    // Nhận giá trị refs
    this.nameInput = this.name;
  },
  updated() {
    // Nhận giá trị modelValue
    this.value = this.modelValue;

    // Nhận giá trị class đã truyền vào
    this.classInput = this.class;

  },
  methods: {
    /**
     * Hàm set focus cho input
     * CreatedBy: Bien (22/02/2023)
     */
    onFocus() {
      this.$refs[this.name].focus();
    },
  },
  watch: {
    /**
     * Theo dõi sự thay đổi của modelVualue
     * CreatedBy: Bien (16/1/2023)
     */
    value: function (newValue) {
      this.$emit("update:modelValue", newValue);
    },
  },
  data() {
    return {
      // Khai báo biến nhận giá trị ref
      nameInput: null,

      // Khai báo biến classInput
      classInput: null,

      // Khai báo biến nhận value
      value: null,

      // Khai baso biến nhận type
      typeInput: null,

      // Khai báo nhận biến tabindex
      tabindexInput: null,

      // Khai báo biến nhận placeholder
      placeholderText: null,

      // Khai báo biến nhận id
      idInput: null,

      // Khai báo biến nhận giá trị ngày lớn nhất
      maxDateInput: null,
    };
  },
};
</script>
<style scoped>
@import url(./input.css);
</style>