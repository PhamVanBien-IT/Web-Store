<template>
  <section class="section" id="men">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-heading">
            <h2>{{ title }}</h2>
            <span>{{ describe }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="men-item-carousel">
            <div class="owl-men-item owl-carousel owl-loaded owl-drag">
              <div class="owl-stage-outer">
                <div
                  class="owl-stage"
                  style="
                    transition: all 0s ease 0s;
                    display: flex;
                    overflow: hidden;
                  "
                >
                  <div
                    class="owl-item cloned"
                    style="width: 350px; margin-right: 30px"
                  >
                    <div class="item">
                      <div class="thumb">
                        <div class="hover-content">
                          <ul>
                            <li>
                              <router-link to="/product-detail"
                                ><font-awesome-icon :icon="['fas', 'eye']"
                              /></router-link>
                            </li>
                            <li>
                              <router-link to="/product-detail"
                                ><font-awesome-icon :icon="['fas', 'star']"
                              /></router-link>
                            </li>
                            <li>
                              <router-link to="/product-detail"
                                ><font-awesome-icon
                                  :icon="['fas', 'shopping-cart']"
                              /></router-link>
                            </li>
                          </ul>
                        </div>
                        <img src="../assets/images/men-02.jpg" alt="" />
                      </div>
                      <div class="down-content">
                        <h4>Air Force 1 X</h4>
                        <span>$90.00</span>
                        <ul class="stars">
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 350px; margin-right: 30px"
                  >
                    <div class="item">
                      <div class="thumb">
                        <div class="hover-content">
                          <ul>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-eye"></i
                              ></a>
                            </li>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-star"></i
                              ></a>
                            </li>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-shopping-cart"></i
                              ></a>
                            </li>
                          </ul>
                        </div>
                        <img src="../assets/images/men-03.jpg" alt="" />
                      </div>
                      <div class="down-content">
                        <h4>Love Nana ‘20</h4>
                        <span>$150.00</span>
                        <ul class="stars">
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 350px; margin-right: 30px"
                  >
                    <div class="item">
                      <div class="thumb">
                        <div class="hover-content">
                          <ul>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-eye"></i
                              ></a>
                            </li>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-star"></i
                              ></a>
                            </li>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-shopping-cart"></i
                              ></a>
                            </li>
                          </ul>
                        </div>
                        <img src="../assets/images/men-01.jpg" alt="" />
                      </div>
                      <div class="down-content">
                        <h4>Classic Spring</h4>
                        <span>$120.00</span>
                        <ul class="stars">
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item"
                    style="width: 350px; margin-right: 30px"
                  >
                    <div class="item">
                      <div class="thumb">
                        <div class="hover-content">
                          <ul>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-eye"></i
                              ></a>
                            </li>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-star"></i
                              ></a>
                            </li>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-shopping-cart"></i
                              ></a>
                            </li>
                          </ul>
                        </div>
                        <img src="../assets/images/men-01.jpg" alt="" />
                      </div>
                      <div class="down-content">
                        <h4>Classic Spring</h4>
                        <span>$120.00</span>
                        <ul class="stars">
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item"
                    style="width: 350px; margin-right: 30px"
                  >
                    <div class="item">
                      <div class="thumb">
                        <div class="hover-content">
                          <ul>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-eye"></i
                              ></a>
                            </li>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-star"></i
                              ></a>
                            </li>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-shopping-cart"></i
                              ></a>
                            </li>
                          </ul>
                        </div>
                        <img src="../assets/images/men-02.jpg" alt="" />
                      </div>
                      <div class="down-content">
                        <h4>Air Force 1 X</h4>
                        <span>$90.00</span>
                        <ul class="stars">
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item active"
                    style="width: 350px; margin-right: 30px"
                  >
                    <div class="item">
                      <div class="thumb">
                        <div class="hover-content">
                          <ul>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-eye"></i
                              ></a>
                            </li>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-star"></i
                              ></a>
                            </li>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-shopping-cart"></i
                              ></a>
                            </li>
                          </ul>
                        </div>
                        <img src="../assets/images/men-03.jpg" alt="" />
                      </div>
                      <div class="down-content">
                        <h4>Love Nana ‘20</h4>
                        <span>$150.00</span>
                        <ul class="stars">
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item active"
                    style="width: 350px; margin-right: 30px"
                  >
                    <div class="item">
                      <div class="thumb">
                        <div class="hover-content">
                          <ul>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-eye"></i
                              ></a>
                            </li>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-star"></i
                              ></a>
                            </li>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-shopping-cart"></i
                              ></a>
                            </li>
                          </ul>
                        </div>
                        <img src="../assets/images/men-01.jpg" alt="" />
                      </div>
                      <div class="down-content">
                        <h4>Classic Spring</h4>
                        <span>$120.00</span>
                        <ul class="stars">
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned active"
                    style="width: 350px; margin-right: 30px"
                  >
                    <div class="item">
                      <div class="thumb">
                        <div class="hover-content">
                          <ul>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-eye"></i
                              ></a>
                            </li>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-star"></i
                              ></a>
                            </li>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-shopping-cart"></i
                              ></a>
                            </li>
                          </ul>
                        </div>
                        <img src="../assets/images/men-01.jpg" alt="" />
                      </div>
                      <div class="down-content">
                        <h4>Classic Spring</h4>
                        <span>$120.00</span>
                        <ul class="stars">
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 350px; margin-right: 30px"
                  >
                    <div class="item">
                      <div class="thumb">
                        <div class="hover-content">
                          <ul>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-eye"></i
                              ></a>
                            </li>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-star"></i
                              ></a>
                            </li>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-shopping-cart"></i
                              ></a>
                            </li>
                          </ul>
                        </div>
                        <img src="../assets/images/men-02.jpg" alt="" />
                      </div>
                      <div class="down-content">
                        <h4>Air Force 1 X</h4>
                        <span>$90.00</span>
                        <ul class="stars">
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 350px; margin-right: 30px"
                  >
                    <div class="item">
                      <div class="thumb">
                        <div class="hover-content">
                          <ul>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-eye"></i
                              ></a>
                            </li>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-star"></i
                              ></a>
                            </li>
                            <li>
                              <a href="single-product.html"
                                ><i class="fa fa-shopping-cart"></i
                              ></a>
                            </li>
                          </ul>
                        </div>
                        <img src="../assets/images/men-03.jpg" alt="" />
                      </div>
                      <div class="down-content">
                        <h4>Love Nana ‘20</h4>
                        <span>$150.00</span>
                        <ul class="stars">
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="owl-nav">
                <button type="button" role="presentation" class="owl-prev">
                  <span aria-label="Previous"></span></button
                ><button type="button" role="presentation" class="owl-next">
                  <span aria-label="Next"></span>
                </button>
              </div>
              <div class="owl-dots">
                <button role="button" class="owl-dot active">
                  <span></span></button
                ><button role="button" class="owl-dot"><span></span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  inject: ["diy"],
  name: "TheContent",
  props: {
    title: String,
    describe: String,
  },
};
</script>
?