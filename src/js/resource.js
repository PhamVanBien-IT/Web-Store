/**
 * Hàm khai báo các giá trị chữ
 * CreatedBy: Bien (11/1/2023)
 */
const MISAResource = {
	ERRORVALIDATE: {
		EXISTEMPLOYEECODE:(item) => `Mã nhân viên <${item}> đã tồn tại trong hệ thống.`,
		PRODUCTCODE: "Mã không được để trống", 
        FULLNAME : "Tên không được để trống",
        DEPARTMENT: "Đơn vị không được để trống",
		PHONENUMBER:"Số điện thoại di động không đúng định dạng",
		LANDLINENUMBER:"Số điện thoại cố định không đúng định dạng",
		DATEOFBIRTH:"Ngày sinh lớn hơn ngày hiện tại",
		IDENTITYDATE:"Ngày cấp lớn hơn ngày hiện tại",
		IDENTITYNUMBER:"Số chứng minh nhân dân không đúng định dạng",
		EMAIL:"Email không đúng định dạng"
	},
	CONTENTDIALOG:{
		DELETE:(item) => `Bạn có muốn xóa <${item}> không?`,
		SAVE:"Dữ liệu đã thay đổi. Bạn có muốn cất không?",
		DELETES:(item) => `Bạn có muốn xóa những ${item} đã chọn không?`,
		DEVELOPING:"Chức năng đang phát triển."
	},
	TITLEFORM:{
		ADD:(item) => `Thông tin ${item}`,
		UPDATE:(item) => `Sửa ${item}`
	},
	LABELNOTIFY:{
		INSERT:(item) => `${item} đã được thêm vào hệ thông`,
		UPDATE:(item) => `${item} đã được sửa trong hệ thông`,
		DELETE:(item) => `${item} đã được xóa khỏi hệ thông`,
	}
};

export default MISAResource;