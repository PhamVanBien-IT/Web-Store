<template>
  <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <!-- ***** Logo Start ***** -->
                        <router-link to="/" class="logo">
                            <img src="../assets/images/logo.png">
                        </router-link>
                        <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** -->
                        <ul class="nav">
                            <li class="scroll-to-section"><router-link to="/" class="active subnav">Trang chủ</router-link></li>
                            <li class="scroll-to-section" 
                            v-for="(item, index) in categorys" 
                            :key="index" 
                            @click="setActive(index)"
                            >
                                <router-link :to="'/'+ item.description" :class="{'active': index == indexCategory}" class="subnav">{{ item.categoryName }}</router-link>
                            </li>
                            <li class="submenu">
                                <a href="#" class="subnav">Tài khoản 
                                    <font-awesome-icon icon="fa-solid fa-sort-down" style="margin-bottom: 2px;"/>
                                </a>
                                <ul>
                                    <li><router-link to="/login">Đăng nhập</router-link></li>
                                    <li><router-link to="/register">Đăng ký</router-link></li>
                                </ul>
                            </li>
                        </ul>        
                        <a class="menu-trigger">
                            <span>Menu</span>
                        </a>
                        <!-- ***** Menu End ***** -->
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
 import router from "@/router/router";
 import categoryApi from "@/api/categoryApi";
export default {
  inject: ["diy"],
  name: "TheNav",
  components: {router},
  created(){
    this.getCategoryAll();
  },
  methods:{
    /**
     * Hàm set màu cho danh mục được chọn
     * @param {Vị trí danh mục chọn} index 
     * CreatedBy: Bien (15/03/2023)
     */
    setActive(index){
        this.indexCategory = index;
    },
    /**
     * Hàm lấy danh sách danh mục
     * CreatedBy: Bien (15/03/2023)
     */
    async getCategoryAll(){
        const response = await categoryApi.getCategoryAll();
        this.categorys = response.data;
    }
  },
  data(){
    return{
        // Danh sách danh mục
        categorys:{},

        // Đánh index danh mục được chọn
        indexCategory:null
    }
  }
};
</script>
<style>
.subnav{
    font-family: 'Poppins', sans-serif;
    font-size: 15px !important;
    font-weight: 600;
}
</style>
