<template>
  <the-nav></the-nav>
  <main class="app-content">
    <div class="app-title">
      <ul class="app-breadcrumb breadcrumb side">
        <li class="breadcrumb-item active">
          <a href="#"><b>Bảng kê lương</b></a>
        </li>
      </ul>
      <div id="clock">
        <span class="date"> Thứ Hai, 13/03/2023 - 22 giờ 26 phút 06 giây</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="tile">
          <div class="tile-body">
            <div class="row element-button">
              <div class="col-sm-2">
                <a
                  class="btn btn-add btn-sm"
                  href="form-add-tien-luong.html"
                  title="Thêm"
                  ><font-awesome-icon icon="fa-solid fa-plus" /> Tạo mới</a
                >
              </div>
              <div class="col-sm-2">
                <a
                  class="btn btn-delete btn-sm nhap-tu-file"
                  type="button"
                  title="Nhập"
                  onclick="myFunction(this)"
                  ><font-awesome-icon icon="fa-solid fa-file-arrow-up" /> Tải từ
                  file</a
                >
              </div>
              <div class="col-sm-2">
                <a
                  class="btn btn-delete btn-sm print-file"
                  type="button"
                  title="In"
                  onclick="myApp.printTable()"
                  ><font-awesome-icon icon="fa-solid fa-print" /> In dữ liệu</a
                >
              </div>
              <div class="col-sm-2">
                <a
                  class="btn btn-delete btn-sm print-file js-textareacopybtn"
                  type="button"
                  title="Sao chép"
                  ><font-awesome-icon icon="fa-solid fa-copy" /> Sao chép</a
                >
              </div>
              <div class="col-sm-2">
                <a class="btn btn-excel btn-sm" href="" title="In"
                  ><font-awesome-icon icon="fa-solid fa-file-excel" /> Xuất
                  Excel</a
                >
              </div>
              <div class="col-sm-2">
                <a
                  class="btn btn-delete btn-sm pdf-file"
                  type="button"
                  title="In"
                  onclick="myFunction(this)"
                  ><font-awesome-icon icon="fa-solid fa-file-pdf" /> Xuất PDF</a
                >
              </div>
              <div class="col-sm-2">
                <a
                  class="btn btn-delete btn-sm"
                  type="button"
                  title="Xóa"
                  onclick="myFunction(this)"
                  ><font-awesome-icon icon="fa-solid fa-trash" /> Xóa tất cả
                </a>
              </div>
            </div>
            <div
              id="sampleTable_wrapper"
              class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
            >
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <div class="dataTables_length" id="sampleTable_length">
                    <label
                      >Hiện
                      <select
                        name="sampleTable_length"
                        aria-controls="sampleTable"
                        class="form-control form-control-sm"
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                      danh mục</label
                    >
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div id="sampleTable_filter" class="dataTables_filter">
                    <label
                      >Tìm kiếm:<input
                        type="search"
                        class="form-control form-control-sm"
                        placeholder=""
                        aria-controls="sampleTable"
                    /></label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <table
                    class="table table-hover table-bordered dataTable no-footer"
                    id="sampleTable"
                    role="grid"
                    aria-describedby="sampleTable_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          width="10"
                          class="sorting_asc"
                          tabindex="0"
                          aria-controls="sampleTable"
                          rowspan="1"
                          colspan="1"
                          aria-sort="ascending"
                          aria-label=": activate to sort column descending"
                          style="width: 13px"
                        >
                          <input type="checkbox" id="all" />
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="sampleTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Tên nhân viên: activate to sort column ascending"
                          style="width: 114px"
                        >
                          Tên nhân viên
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="sampleTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Giới Tính: activate to sort column ascending"
                          style="width: 46px"
                        >
                          Giới Tính
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="sampleTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Chức vụ: activate to sort column ascending"
                          style="width: 48px"
                        >
                          Chức vụ
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="sampleTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Tiền lương: activate to sort column ascending"
                          style="width: 69px"
                        >
                          Tiền lương
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="sampleTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Trừ lương: activate to sort column ascending"
                          style="width: 53px"
                        >
                          Trừ lương
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="sampleTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Tiền thưởng: activate to sort column ascending"
                          style="width: 71px"
                        >
                          Tiền thưởng
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="sampleTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Tổng nhận: activate to sort column ascending"
                          style="width: 69px"
                        >
                          Tổng nhận
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="sampleTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Trạng thái: activate to sort column ascending"
                          style="width: 95px"
                        >
                          Trạng thái
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="sampleTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Chức năng: activate to sort column ascending"
                          style="width: 58px"
                        >
                          Chức năng
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row" class="odd">
                        <td width="10" class="sorting_1">
                          <input type="checkbox" name="check1" value="1" />
                        </td>
                        <td>Hồ Thị Thanh Ngân</td>
                        <td>Nữ</td>
                        <td>Bán hàng</td>
                        <td>7.500.000 đ</td>
                        <td>Không</td>
                        <td>Không</td>
                        <td>7.500.000 đ</td>
                        <td>
                          <span class="badge bg-success">Đã nhận tiền</span>
                        </td>
                        <td>
                          <button
                            class="btn btn-primary btn-sm trash"
                            type="button"
                            title="Xóa"
                          >
                            <i class="fas fa-trash-alt"></i>
                          </button>
                          <button
                            class="btn btn-primary btn-sm edit"
                            type="button"
                            title="Sửa"
                          >
                            <i class="fa fa-edit"></i>
                          </button>
                        </td>
                      </tr>
                      <tr role="row" class="even">
                        <td width="10" class="sorting_1">
                          <input type="checkbox" name="check1" value="1" />
                        </td>
                        <td>Trần Khả Ái</td>
                        <td>Nữ</td>
                        <td>Bán hàng</td>
                        <td>7.500.000 đ</td>
                        <td>Không</td>
                        <td>1.000.000 đ</td>
                        <td>8.500.000 đ</td>
                        <td>
                          <span class="badge bg-success">Đã nhận tiền</span>
                        </td>
                        <td>
                          <button
                            class="btn btn-primary btn-sm trash"
                            type="button"
                            title="Xóa"
                          >
                            <i class="fas fa-trash-alt"></i>
                          </button>
                          <button
                            class="btn btn-primary btn-sm edit"
                            type="button"
                            title="Sửa"
                          >
                            <i class="fa fa-edit"></i>
                          </button>
                        </td>
                      </tr>
                      <tr role="row" class="odd">
                        <td width="10" class="sorting_1">
                          <input type="checkbox" name="check1" value="1" />
                        </td>
                        <td>Phạm Thu Cúc</td>
                        <td>Nữ</td>
                        <td>Thu ngân</td>
                        <td>7.000.000 đ</td>
                        <td>Không</td>
                        <td>Không</td>
                        <td>7.000.000 đ</td>
                        <td>
                          <span class="badge bg-success">Đã nhận tiền</span>
                        </td>
                        <td>
                          <button
                            class="btn btn-primary btn-sm trash"
                            type="button"
                            title="Xóa"
                          >
                            <i class="fas fa-trash-alt"></i>
                          </button>
                          <button
                            class="btn btn-primary btn-sm edit"
                            type="button"
                            title="Sửa"
                          >
                            <i class="fa fa-edit"></i>
                          </button>
                        </td>
                      </tr>
                      <tr role="row" class="even">
                        <td width="10" class="sorting_1">
                          <input type="checkbox" name="check1" value="1" />
                        </td>
                        <td>Trần Anh Khoa</td>
                        <td>Nam</td>
                        <td>Tư vấn</td>
                        <td>7.000.000 đ</td>
                        <td>Không</td>
                        <td>500.000 đ</td>
                        <td>7.500.000 đ</td>
                        <td>
                          <span class="badge bg-success">Đã nhận tiền</span>
                        </td>
                        <td>
                          <button
                            class="btn btn-primary btn-sm trash"
                            type="button"
                            title="Xóa"
                          >
                            <i class="fas fa-trash-alt"></i>
                          </button>
                          <button
                            class="btn btn-primary btn-sm edit"
                            type="button"
                            title="Sửa"
                          >
                            <i class="fa fa-edit"></i>
                          </button>
                        </td>
                      </tr>
                      <tr role="row" class="odd">
                        <td width="10" class="sorting_1">
                          <input type="checkbox" name="check1" value="1" />
                        </td>
                        <td>Nguyễn Thành Nhân</td>
                        <td>Nam</td>
                        <td>Bảo trì</td>
                        <td>9.000.000 đ</td>
                        <td>Không</td>
                        <td>Không</td>
                        <td>9.000.000 đ</td>
                        <td>
                          <span class="badge bg-success">Đã nhận tiền</span>
                        </td>
                        <td>
                          <button
                            class="btn btn-primary btn-sm trash"
                            type="button"
                            title="Xóa"
                          >
                            <i class="fas fa-trash-alt"></i>
                          </button>
                          <button
                            class="btn btn-primary btn-sm edit"
                            type="button"
                            title="Sửa"
                          >
                            <i class="fa fa-edit"></i>
                          </button>
                        </td>
                      </tr>
                      <tr role="row" class="even">
                        <td width="10" class="sorting_1">
                          <input type="checkbox" name="check1" value="1" />
                        </td>
                        <td>Nguyễn Đặng Trọng Nhân</td>
                        <td>Nam</td>
                        <td>Dịch vụ</td>
                        <td>6.500.000 đ</td>
                        <td>Không</td>
                        <td>Không</td>
                        <td>6.500.000 đ</td>
                        <td>
                          <span class="badge bg-success">Đã nhận tiền</span>
                        </td>
                        <td>
                          <button
                            class="btn btn-primary btn-sm trash"
                            type="button"
                            title="Xóa"
                          >
                            <i class="fas fa-trash-alt"></i>
                          </button>
                          <button
                            class="btn btn-primary btn-sm edit"
                            type="button"
                            title="Sửa"
                          >
                            <i class="fa fa-edit"></i>
                          </button>
                        </td>
                      </tr>
                      <tr role="row" class="odd">
                        <td width="10" class="sorting_1">
                          <input type="checkbox" name="check1" value="1" />
                        </td>
                        <td>Nguyễn Thị Mai</td>
                        <td>Nữ</td>
                        <td>Tư vấn</td>
                        <td>7.000.000 đ</td>
                        <td>Không</td>
                        <td>Không</td>
                        <td>7.000.000 đ</td>
                        <td>
                          <span class="badge bg-success">Đã nhận tiền</span>
                        </td>
                        <td>
                          <button
                            class="btn btn-primary btn-sm trash"
                            type="button"
                            title="Xóa"
                          >
                            <i class="fas fa-trash-alt"></i>
                          </button>
                          <button
                            class="btn btn-primary btn-sm edit"
                            type="button"
                            title="Sửa"
                          >
                            <i class="fa fa-edit"></i>
                          </button>
                        </td>
                      </tr>
                      <tr role="row" class="even">
                        <td width="10" class="sorting_1">
                          <input type="checkbox" name="check1" value="1" />
                        </td>
                        <td>Trương Nguyễn Trà My</td>
                        <td>Nữ</td>
                        <td>Thu ngân</td>
                        <td>7.500.000 đ</td>
                        <td>Không</td>
                        <td>500.000 đ</td>
                        <td>8.000.000 đ</td>
                        <td>
                          <span class="badge bg-success">Đã nhận tiền</span>
                        </td>
                        <td>
                          <button
                            class="btn btn-primary btn-sm trash"
                            type="button"
                            title="Xóa"
                          >
                            <i class="fas fa-trash-alt"></i>
                          </button>
                          <button
                            class="btn btn-primary btn-sm edit"
                            type="button"
                            title="Sửa"
                          >
                            <i class="fa fa-edit"></i>
                          </button>
                        </td>
                      </tr>
                      <tr role="row" class="odd">
                        <td width="10" class="sorting_1">
                          <input type="checkbox" name="check1" value="1" />
                        </td>
                        <td>Nguyễn Nhật Tân</td>
                        <td>Nam</td>
                        <td>Quản kho</td>
                        <td>8.500.000 đ</td>
                        <td>Không</td>
                        <td>Không</td>
                        <td>8.500.000 đ</td>
                        <td>
                          <span class="badge bg-success">Đã nhận tiền</span>
                        </td>
                        <td>
                          <button
                            class="btn btn-primary btn-sm trash"
                            type="button"
                            title="Xóa"
                          >
                            <i class="fas fa-trash-alt"></i>
                          </button>
                          <button
                            class="btn btn-primary btn-sm edit"
                            type="button"
                            title="Sửa"
                          >
                            <i class="fa fa-edit"></i>
                          </button>
                        </td>
                      </tr>
                      <tr role="row" class="even">
                        <td width="10" class="sorting_1">
                          <input type="checkbox" name="check1" value="1" />
                        </td>
                        <td>Lâm Nguyễn Tuân</td>
                        <td>Nam</td>
                        <td>Quản kho</td>
                        <td>8.500.000 đ</td>
                        <td>Không</td>
                        <td>Không</td>
                        <td>8.500.000 đ</td>
                        <td>
                          <span class="badge bg-danger">Chưa nhận tiền</span>
                        </td>
                        <td>
                          <button
                            class="btn btn-primary btn-sm trash"
                            type="button"
                            title="Xóa"
                          >
                            <i class="fas fa-trash-alt"></i>
                          </button>
                          <button
                            class="btn btn-primary btn-sm edit"
                            type="button"
                            title="Sửa"
                          >
                            <i class="fa fa-edit"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-md-5">
                  <div
                    class="dataTables_info"
                    id="sampleTable_info"
                    role="status"
                    aria-live="polite"
                  >
                    Hiện 1 đến 10 của 11 danh mục
                  </div>
                </div>
                <div class="col-sm-12 col-md-7">
                  <div
                    class="dataTables_paginate paging_simple_numbers"
                    id="sampleTable_paginate"
                  >
                    <ul class="pagination">
                      <li
                        class="paginate_button page-item previous disabled"
                        id="sampleTable_previous"
                      >
                        <a
                          href="#"
                          aria-controls="sampleTable"
                          data-dt-idx="0"
                          tabindex="0"
                          class="page-link"
                          >Lùi</a
                        >
                      </li>
                      <li class="paginate_button page-item active">
                        <a
                          href="#"
                          aria-controls="sampleTable"
                          data-dt-idx="1"
                          tabindex="0"
                          class="page-link"
                          >1</a
                        >
                      </li>
                      <li class="paginate_button page-item">
                        <a
                          href="#"
                          aria-controls="sampleTable"
                          data-dt-idx="2"
                          tabindex="0"
                          class="page-link"
                          >2</a
                        >
                      </li>
                      <li
                        class="paginate_button page-item next"
                        id="sampleTable_next"
                      >
                        <a
                          href="#"
                          aria-controls="sampleTable"
                          data-dt-idx="3"
                          tabindex="0"
                          class="page-link"
                          >Tiếp</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import TheNav from "./TheNav.vue";
export default {
  name: "TheSalary",
  components: { TheNav },
};
</script>
<style scoped>
@import url(./admin.css);
</style>