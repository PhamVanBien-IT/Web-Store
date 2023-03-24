<template>
    <div class="notify-main">
      <div class="notify-content">
        <div class="notify-right">
          <div class="notify-error-icon"></div>
          <div class="notify-des">{{labelNotify}}</div>
        </div>
        <div class="notify-left">
          <div class="notify-close"></div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    props:["label"],
    created(){
     this.labelNotify = this.label;
    },
    data(){
        return{
            // Khai báo biến nhận dữ liệu label
            labelNotify:null,
        }
    }
  };
  </script>
  <style scoped>
      @import url(./notify.css);
  </style>
  