<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <form class="login100-form validate-form">
          <span class="login100-form-title p-b-43">Đăng nhập</span>
          <div class="wrap-input100">
            <input class="input100" type="text" name="email" />
            <span class="focus-input100"></span>
            <span class="label-input100">Email</span>
          </div>
          <div class="wrap-input100">
            <input class="input100" type="password" name="pass" />
            <span class="focus-input100"></span>
            <span class="label-input100">Password</span>
          </div>
          <div class="remember-login">
            <div class="contact100-form-checkbox">
              <input
                class="input-checkbox100"
                id="ckb1"
                type="checkbox"
                name="remember-me"
              />
              <label class="label-checkbox100" for="ckb1">Lưu mật khẩu</label>
            </div>
            <div>
              <a href="#" class="txt3"> Quên mật khẩu? </a>
            </div>
          </div>
          <div class="container-login100-form-btn">
            <div class="login100-form-btn font-weight-bold">
              Đăng nhập
            </div>
          </div>
          <div class="text-center p-t-46 p-b-20" style="margin-top: 10px">
            <span class="txt3"
              >Bạn chưa có tài khoản?
              <router-link to="/register" style="color: blue; font-size: 15px">Đăng ký</router-link
              ></span
            >
          </div>
        </form>
        <div class="login100-more"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheLogin",
};
</script>
<style scoped>
@import url(../account/accout.css);
</style>