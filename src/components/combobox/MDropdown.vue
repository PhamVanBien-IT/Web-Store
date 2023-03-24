<template>
         <div class="dropdown-base">
        <input 
        v-model="textSelectTed" 
        disabled
        :id="id" 
        class="dropdown-base__input" 
        type="text">
        <div class="dropdown-base__button iconBtndropdown-base" @click="onShowHideData"></div>
        <div v-show="this.diy.state.showPageSize" class="dropdown-base__data">
           <div class="dropdown-base-item"
           v-for="(item,index) in numverRecord" 
           :key="index"
           :class="{'item-select': index == indexItemSelect}"
           @click="itemOnSelect(item,index)"
           >
            {{item.value}}
           </div>
        </div>
   </div>
</template>
<script>
export default {
    inject:['diy'],
    name:"Mdropdown-base",
    emits:["update:modelValue",'liMit'],
    props:["id","pageNumverRecord"],
    created(){
        // Nhận giá trị tổng bản ghi
        this.numverRecord = this.pageNumverRecord;
    },
    methods:{
        /**
         * Hàm ẩn và hiển thị danh sách item combobox
         * CreatedBy: Bien (9/1/2023)
         */
        onShowHideData(){
            this.diy.togglePageSize();
        },

        /**
         * Hàm gắn giá trị khi chọn kích thước
         * CreatedBy: Bien (9/1/2023)
         */
        itemOnSelect(item,index){
            this.textSelectTed = item.value;
            this.diy.clearPageSize();
            this.indexItemSelect = index
            this.$emit('liMit',item.key)
        },
    },
    data(){
        return{
            // Khai báo biến showData
            isShowData: false,

            // Khai báo biến nhận giá trị
            entities : [],

            // Khai báo biến chứa entity bị thay đổi
            entitySearch: [],

            // Khai báo biến cho input
            textSelectTed : "20 bản ghi trên 1 trang",

            // Khai báo biến index trong comboxbox__data
            indexItemSelect: 1,

            // Khai báo biến giá trị cho func
            numverRecord: [],
        }
    }
}
</script>

<style scoped>
    @import url(./combobox.css);
</style>