<template>
  <the-nav></the-nav>
  <div class="main-banner" id="top">
    <div class="container-fluid">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/images/banner-3.jpg"
              class="d-block w-100"
              alt="banner1"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/images/banner-2.jpg"
              class="d-block w-100"
              alt="banner2"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/images/banner-1.jpg"
              class="d-block w-100"
              alt="banner3"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
  <TheContentVue
    title="Xu hướng nam"
    describe="Thời trang tạo lên phong cách cho phái mạnh"
  ></TheContentVue>
  <TheContentVue
    title="Xu hướng nữ"
    describe="Thời trang nâng tầm vẻ đẹp người phụ nữ"
  ></TheContentVue>
  <section class="section" id="explore">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="left-content">
            <h2>Giới thiệu</h2>
            <span
              >Pabbo store là nơi cung cấp các sản phẩm thời trang cho khách
              hàng, bao gồm quần áo, giày dép, phụ kiện, túi xách, đồng hồ và
              nhiều sản phẩm khác. Shop thường có nhiều thương hiệu khác nhau và
              các sản phẩm được chọn lọc theo xu hướng và phong cách thị hiếu
              của khách hàng..</span
            >
            <div class="quote">
              <i class="fa fa-quote-left"></i>
              <p>"Chúng tôi bán tất cả mọi thứ ngoại trừ uy tín!"</p>
            </div>
            <p>
              Khách hàng có thể tới shop để tham khảo và mua sản phẩm trực tiếp
              hoặc đặt hàng online. Shop thường cung cấp nhiều dịch vụ hỗ trợ
              khách hàng như tư vấn, chăm sóc sản phẩm, đổi trả hàng và vận
              chuyển hàng tới địa chỉ khách hàng yêu cầu.
            </p>
            <div class="main-border-button">
              <a href="products.html">Xem thêm</a>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="right-content">
            <div class="row">
              <div class="col-lg-6">
                <div class="leather">
                  <h4>Xu hướng</h4>
                  <span>Bộ sưu tập mới nhất</span>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="first-image">
                  <img src="../assets/images/explore-image-01.jpg" alt="" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="second-image">
                  <img src="../assets/images/explore-image-02.jpg" alt="" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="types">
                  <h4>Đa dạng sản phâm</h4>
                  <span>Hơn 300 sản phẩm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section" id="social">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <h2>Truyền thông xã hội</h2>
            <span
              >Tỉ mỉ đến từng chi tiết là điểm tạo nên sự khác biệt của
              Pabbo.</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row images">
        <div class="col-2">
          <div class="thumb">
            <div class="icon">
              <a href="http://instagram.com">
                <h6>Fashion</h6>
                <i class="fa fa-instagram"></i>
              </a>
            </div>
            <img src="../assets/images/instagram-01.jpg" alt="" />
          </div>
        </div>
        <div class="col-2">
          <div class="thumb">
            <div class="icon">
              <a href="http://instagram.com">
                <h6>New</h6>
                <i class="fa fa-instagram"></i>
              </a>
            </div>
            <img src="../assets/images/instagram-02.jpg" alt="" />
          </div>
        </div>
        <div class="col-2">
          <div class="thumb">
            <div class="icon">
              <a href="http://instagram.com">
                <h6>Brand</h6>
                <i class="fa fa-instagram"></i>
              </a>
            </div>
            <img src="../assets/images/instagram-03.jpg" alt="" />
          </div>
        </div>
        <div class="col-2">
          <div class="thumb">
            <div class="icon">
              <a href="http://instagram.com">
                <h6>Makeup</h6>
                <i class="fa fa-instagram"></i>
              </a>
            </div>
            <img src="../assets/images/instagram-04.jpg" alt="" />
          </div>
        </div>
        <div class="col-2">
          <div class="thumb">
            <div class="icon">
              <a href="http://instagram.com">
                <h6>Leather</h6>
                <i class="fa fa-instagram"></i>
              </a>
            </div>
            <img src="../assets/images/instagram-05.jpg" alt="" />
          </div>
        </div>
        <div class="col-2">
          <div class="thumb">
            <div class="icon">
              <a href="http://instagram.com">
                <h6>Bag</h6>
                <i class="fa fa-instagram"></i>
              </a>
            </div>
            <img src="../assets/images/instagram-06.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="subscribe">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="section-heading">
            <h2>
              Theo dõi chúng tôi để nhận được ưu đãi giảm giá đến 30% hàng tuần
            </h2>
            <span>Liên hệ ngay với chúng tôi.</span>
          </div>
          <form id="subscribe" action="" method="get">
            <div class="row">
              <div class="col-lg-5">
                <fieldset>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Họ và tên"
                    required=""
                  />
                </fieldset>
              </div>
              <div class="col-lg-5">
                <fieldset>
                  <input
                    name="email"
                    type="text"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    placeholder="Địa chỉ"
                    required=""
                  />
                </fieldset>
              </div>
              <div class="col-lg-2">
                <fieldset>
                  <button
                    type="submit"
                    id="form-submit"
                    class="main-dark-button"
                  >
                  <font-awesome-icon icon="fa-solid fa-paper-plane" />
                  </button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-4">
          <div class="row">
            <div class="col-6">
              <ul>
                <li>
                  Địa chỉ:<br /><span
                    >Số 24, Ngõ 32, Đường Phùng Khoang, Trung Văn, Từ Liêm, Hà
                    Nội</span
                  >
                </li>
                <li>Điện thoại:<br /><span>0987419510</span></li>
                <li>Email:<br /><span>pvb0204@gmail.com</span></li>
              </ul>
            </div>
            <div class="col-6">
              <ul>
                <li>Work Hours:<br /><span>07:30 AM - 9:30 PM</span></li>

                <li>
                  Mạng xã hội:<br /><span
                    ><a href="#">Facebook</a>, <a href="#">Instagram</a>,
                    <a href="#">TikTok</a>, <a href="#">Zalo</a></span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <the-footer></the-footer>
</template>
  
  <script>
import TheContentVue from "@/views/TheContent.vue";

export default {
  name: "Home",
  components: {
    TheContentVue,
  },
};
</script>
  
  <style>
</style>
  