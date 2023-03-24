<template>
    <the-nav></the-nav>
    <main class="app-content">
      <div class="app-title">
        <ul class="app-breadcrumb breadcrumb side">
          <li class="breadcrumb-item active"><a href="#"><b>Quản lý nội bộ</b></a></li>
        </ul>
        <div id="clock"><span class="date"> Thứ Hai, 13/03/2023 - 22 giờ 25 phút 53 giây</span></div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="tile">
            <div class="tile-body">
              <div class="row element-button">
                <div class="col-sm-2">
  
                  <a class="btn btn-add btn-sm" href="form-add-bi-cam.html" title="Thêm">
                    <font-awesome-icon icon="fa-solid fa-plus" />
                    Tạo mới</a>
                </div>
                <div class="col-sm-2">
                <a
                  class="btn btn-delete btn-sm nhap-tu-file"
                  type="button"
                  title="Nhập"
                  onclick="myFunction(this)"
                  ><font-awesome-icon icon="fa-solid fa-file-arrow-up" /> Tải từ file</a
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
                  ><font-awesome-icon icon="fa-solid fa-file-excel" /> Xuất Excel</a
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
              <div id="sampleTable_wrapper" class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="sampleTable_length"><label>Hiện <select name="sampleTable_length" aria-controls="sampleTable" class="form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> danh mục</label></div></div><div class="col-sm-12 col-md-6"><div id="sampleTable_filter" class="dataTables_filter"><label>Tìm kiếm:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="sampleTable"></label></div></div></div><div class="row"><div class="col-sm-12"><table class="table table-hover table-bordered dataTable no-footer" id="sampleTable" role="grid" aria-describedby="sampleTable_info">
                <thead>
                  <tr role="row"><th width="10" class="sorting_asc" tabindex="0" aria-controls="sampleTable" rowspan="1" colspan="1" aria-sort="ascending" aria-label=": activate to sort column descending" style="width: 13px;"><input type="checkbox" id="all"></th><th class="sorting" tabindex="0" aria-controls="sampleTable" rowspan="1" colspan="1" aria-label="Họ và Tên: activate to sort column ascending" style="width: 106px;">Họ và Tên</th><th class="sorting" tabindex="0" aria-controls="sampleTable" rowspan="1" colspan="1" aria-label="Ngày sinh: activate to sort column ascending" style="width: 74px;">Ngày sinh</th><th class="sorting" tabindex="0" aria-controls="sampleTable" rowspan="1" colspan="1" aria-label="Chức vụ: activate to sort column ascending" style="width: 48px;">Chức vụ</th><th class="sorting" tabindex="0" aria-controls="sampleTable" rowspan="1" colspan="1" aria-label="Lý do cấm: activate to sort column ascending" style="width: 320px;">Lý do cấm</th><th class="sorting" tabindex="0" aria-controls="sampleTable" rowspan="1" colspan="1" aria-label="Tình trạng: activate to sort column ascending" style="width: 94px;">Tình trạng</th><th class="sorting" tabindex="0" aria-controls="sampleTable" rowspan="1" colspan="1" aria-label="Chức năng: activate to sort column ascending" style="width: 56px;">Chức năng</th></tr>
                </thead>
                <tbody>
                <tr role="row" class="odd">
                    <td width="10" class="sorting_1"><input type="checkbox" name="check1" value="1"></td>
                    <td>Kiều Thái Anh</td>
                    <td>10/09/1998</td>
                    <td>Thu Ngân</td>
                    <td>Gian lận trong công việc đã lấy trộm tiền của công ty và thái độ không ăn năn hối lỗi</td>
                    <td><span class="badge bg-danger">Sa thải</span></td>
                    <td><button class="btn btn-primary btn-sm trash" type="button" title="Xóa"><i class="fas fa-trash-alt"></i></button>
                      <button class="btn btn-primary btn-sm edit" type="button" title="Sửa"><i class="fa fa-edit"></i></button></td>
                  </tr><tr role="row" class="even">
                    <td width="10" class="sorting_1"><input type="checkbox" name="check1" value="1"></td>
                    <td>Nguyễn Thị Kim Yến</td>
                    <td>02/12/1999</td>
                    <td>Thu Ngân</td>
                    <td>Gian lận trong công việc đã lấy trộm tiền của công ty và thái độ không ăn năn hối lỗi</td>
                    <td><span class="badge bg-danger">Sa thải</span></td>
                    <td><button class="btn btn-primary btn-sm trash" type="button" title="Xóa"><i class="fas fa-trash-alt"></i></button>
                      <button class="btn btn-primary btn-sm edit" type="button" title="Sửa"><i class="fa fa-edit"></i></button></td>
                  </tr><tr role="row" class="odd">
                    <td width="10" class="sorting_1"><input type="checkbox" name="check1" value="1"></td>
                    <td>Nguyễn Hoàng Thái Nhật</td>                
                    <td>07/02/1996</td>
                    <td>Quản kho</td>
                    <td>Tự ý thay đổi thông tin nhân viên và không báo cáo quản lý</td>
                    <td><span class="badge bg-warning">Khóa tài khoản</span></td>
                    <td><button class="btn btn-primary btn-sm trash" type="button" title="Xóa"><i class="fas fa-trash-alt"></i></button>
                      <button class="btn btn-primary btn-sm edit" type="button" title="Sửa"><i class="fa fa-edit"></i></button></td>
                  </tr><tr role="row" class="even">
                    <td width="10" class="sorting_1"><input type="checkbox" name="check1" value="1"></td>
                    <td>Võ Thành Nam</td>
                    <td>19/09/1999</td>
                    <td>Dịch vụ</td>
                    <td>Phá hỏng 9 sản phẩm của công ty, có kháng cự khi bị bắt (bồi thường 125.000.000 đ)</td>
                    <td><span class="badge bg-danger">Sa thải</span></td>
                    <td><button class="btn btn-primary btn-sm trash" type="button" title="Xóa"><i class="fas fa-trash-alt"></i></button>
                      <button class="btn btn-primary btn-sm edit" type="button" title="Sửa"><i class="fa fa-edit"></i></button></td>
                  </tr></tbody>
              </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="sampleTable_info" role="status" aria-live="polite">Hiện 1 đến 4 của 4 danh mục</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="sampleTable_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="sampleTable_previous"><a href="#" aria-controls="sampleTable" data-dt-idx="0" tabindex="0" class="page-link">Lùi</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="sampleTable" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item next disabled" id="sampleTable_next"><a href="#" aria-controls="sampleTable" data-dt-idx="2" tabindex="0" class="page-link">Tiếp</a></li></ul></div></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </main>
</template>
<script>
import TheNav from './TheNav.vue';
export default {
    name:"TheInternal",
    components:{TheNav}
}
</script>
<style scoped>
@import url(./admin.css);
</style>