<template>
    <header class="app-header">
    <a class="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar"></a>
    <!-- Navbar Right Menu-->
    <ul class="app-nav">
      <!-- User Menu-->
      <li><router-link to="/" class="app-nav__item">
        <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
      </router-link>
      </li>
    </ul>
  </header>
    <div class="app-sidebar">
    <div class="app-sidebar__user"><img class="app-sidebar__user-avatar" src="../assets/images/bg-01.jpg" width="50px" alt="User Image">
      <div>
        <p class="app-sidebar__user-name"><b>Biển Phạm</b></p>
        <p class="app-sidebar__user-designation">Chào mừng bạn trở lại</p>
      </div>
    </div>
    <hr>
    <ul class="app-menu">
      <li><router-link to="/dashboard" class="app-menu__item active">
        <font-awesome-icon :icon="['fas', 'gauge-high']" />
        <span class="app-menu__label">Bảng điều khiển</span></router-link></li>
      <li>
        <router-link to="/staff-admin" class="app-menu__item ">
        <font-awesome-icon :icon="['fas', 'address-card']" />
        <span class="app-menu__label">Quản lý nhân viên</span>
      </router-link></li>
      <li>
        <router-link to="/user-admin" class="app-menu__item ">
        <font-awesome-icon :icon="['fas', 'users']" />
        <span class="app-menu__label">Quản lý khách hàng</span>
        </router-link></li>
      <li>
        <router-link to="/product-admin" class="app-menu__item">
        <font-awesome-icon :icon="['fas', 'shirt']" />
        <span class="app-menu__label">Quản lý sản phẩm</span>
        </router-link>
      </li>
      <li>
        <router-link to="/order-admin" class="app-menu__item">
        <font-awesome-icon :icon="['fas', 'square-check']" />
        <span class="app-menu__label">Quản lý đơn hàng</span>
        </router-link></li>
      <li>
        <router-link to="/internal-admin" class="app-menu__item">
        <font-awesome-icon :icon="['fas', 'fingerprint']" />
        <span class="app-menu__label">Quản lý nội bộ
          </span>
        </router-link></li>
      <li>
        <router-link to="/salary-admin" class="app-menu__item">
        <font-awesome-icon :icon="['fas', 'coins']" />
        <span class="app-menu__label">Bảng kê lương</span>
        </router-link></li>
      <li>
        <router-link to="/sales-admin" class="app-menu__item">
        <font-awesome-icon :icon="['fas', 'chart-pie']" />
        <span class="app-menu__label">Báo cáo doanh thu</span>
        </router-link>
      </li>
      <li>
        <router-link to="/calendar-admin" class="app-menu__item">
        <font-awesome-icon :icon="['fas', 'calendar-days']" />
        <span class="app-menu__label">Lịch công tác </span>
        </router-link></li>
      <li>
        <router-link to="/system-admin" class="app-menu__item">
        <font-awesome-icon :icon="['fas', 'gear']" />
        <span class="app-menu__label">Cài đặt hệ thống</span>
        </router-link></li>
    </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
@import url(./admin.css);
</style>