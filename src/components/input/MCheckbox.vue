<template>
         <div class="input-checkbox">
        <label>     
            <input type="checkbox" v-model="value"/>
            <span class="check-box-effect"></span>
        </label>
         </div>
</template>
<script>
export default {
    name:"MCheckbox",
    emits:["update:modelValue"],
    props:["modelValue"],
    updated(){
    // Nhận giá trị modelValue
        this.value = this.modelValue;
    },
    watch:{
    /**
     * Theo dõi sự thay đổi của modelVualue
     * CreatedBy: Bien (16/1/2023)
     */
     value: function(newValue){
            this.$emit("update:modelValue", newValue)
        }
    },
    data(){
        return {
            // Khai báo biện nhận giá trị modelValue truyền vào
            value : null,
        };
    }
}
</script>
<style scoped>
    @import url(./input.css);
</style>