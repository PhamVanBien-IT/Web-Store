<template>
 <div class="date-picker">
  <Datepicker
    v-model="customDate"
    format="dd-MM-yyyy"
    :locale="locale"
    :upperLimit="to"
    :lowerLimit="from"
    :clearable="true"
  ></Datepicker>
 </div>
</template>
<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
export default {
  name: "MDatepicker",
  props:["modelValue"],
  components: {
    Datepicker,
  },
  created(){
    this.customDate = this.modelValue;
    console.log(this.modelValue);
  },
  data(){
    return{
  
    }
  }
};
</script>
<style scoped>
  .date-picker{
    margin-top: 8px;
  }
</style>
