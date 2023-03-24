<template>
    <div class="overlay" v-if="diy.state.showLoading">
        <div class="loading" >
   </div>
    </div>
</template>
<script>

export default {
    inject:["diy"],
    name:"MLoading",
    components:{
    },
    data(){
        return{
        }
    }
}
</script>
<style scoped>
   @import url(./loading.css);
</style>