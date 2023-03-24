<template>
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <form class="login100-form validate-form">
            <span class="login100-form-title p-b-43"> Đăng ký </span>
            <div class="wrap-input100">
              <input class="input100" type="text" name="email" />
              <span class="focus-input100"></span>
              <span class="label-input100">Số điện thoại</span>
            </div>
            <div class="wrap-input100">
              <input class="input100" type="password" name="pass" />
              <span class="focus-input100"></span>
              <span class="label-input100">Mật khẩu</span>
            </div> 
            <div class="wrap-input100">
              <input class="input100" type="password" name="pass" />
              <span class="focus-input100"></span>
              <span class="label-input100">Xác nhận mật khhẩu</span>
            </div>
            <div class="container-login100-form-btn">
              <div class="login100-form-btn font-weight-bold">Đăng ký</div>
            </div>
            <div class="text-center p-t-46 p-b-20" style="margin-top: 10px;">
              <span class="txt3 ">Bạn đã có tài khoản? <router-link to="/login" style="color: blue;font-size: 15px;">Đăng nhập</router-link></span>
            </div>
          </form>
          <div class="login100-more"></div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    name:"TheRegister"

  };
  </script>
  <style scoped>
  @import url(../account/accout.css);
  </style>