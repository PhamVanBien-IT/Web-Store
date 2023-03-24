/**
 * Hàm khai báo các giá trị số
 * CreatedBy: Bien (11/1/2023)
 */
const MISAEnum = {
    KEY_CODE:{
        ENTER:13, // Enter
        ROW_UP:38,// Nút lên
        ROW_DOWN:40,// Nút xuống
        CTRL:17,// Nút Ctrl
        S:83,// Nút S,
        ESC:27, //Nút ESC
        SHIFT:16,// Nút Shift
    }
    ,
    GENDER:{
        MALE:0, // Giới tính nam
        FEMALE:1, // Giới tính nữ
        ORTHER:2 // Khác
    },
    STATUSCODE:{
        OK:200, // Thành công
        INSERT:201,// Thêm thành công
        BADREQUEST: 400, // Lỗi dữ liệu nhập vào
        INTERNALSERVER: 500 // Lỗi 
    },
    ERRORCODE:{
        SUCCESS:0, // Thành công
        UNKNOWNERROR:1,// Lỗi không xác định
        VALIDATERROR:2, // Dữ liệu đầu vào không hợp lệ
    }
}

export default MISAEnum;