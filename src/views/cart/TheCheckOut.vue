<template>
    <the-nav></the-nav>
<div class="card">
            <div class="row">
                <div class="col-md-12 cart">
                    <div class="title">
                        <div class="row">
                            <div class="col-12" style="color: green;text-align: center;"><h4><b>Thanh toán thành công</b></h4></div>
                        </div>
                       <div style="display: flex;justify-content: center;margin-top: 12px;"> <div class="notify-icon"></div></div>
                    </div>   
                    <div class="row border-top">
                        <div class="row main align-items-center">
                            <div class="col-10">Hình thức thanh toán</div>
                            <div class="col-2">Tiền mặt</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="row main align-items-center">
                            <div class="col-10">Địa chỉ nhận hàng</div>
                            <div class="col-2">Hưng Yên</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="row main align-items-center">
                            <div class="col-10">Số điện thoại</div>
                            <div class="col-2">0987419510</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="row main align-items-center">
                            <div class="col-10 font-weight-bold">Tổng tiền</div>
                            <div class="col-2 font-weight-bold">10.000.000đ</div>
                        </div>
                    </div>
                    <div class="row border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-10 font-weight-bold">Mã đơn hàng</div>
                            <div class="col-2 font-weight-bold">12526565255</div>
                        </div>
                    </div>
                    <div class="back-to-shop"><a href="#">&leftarrow;</a><span class="text-muted">Quay lại</span></div>
                </div>
            </div>
        </div>
        <the-footer></the-footer>
</template>

<script>
import MCombobox from '@/components/combobox/MCombobox.vue';
import MInputText from '@/components/input/MInputText.vue';

export default {
    name:"TheCheckOut",
    components: { MCombobox, MInputText },
    data(){
        return {
        }
    }
}
</script>
<style scoped>
@import url(./cart.css);
</style>