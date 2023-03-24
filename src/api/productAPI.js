import axiosClient from "./axiosClient";
const baseUrl = "Products/";

/**
 * Các API liên quan đến Employee
 * CreatedBy: Bien (20/01/2023)
 */
const productApi = {
    /**
     * API xuất khẩu nhân viên
     * CreatedBy: Bien (20/02/2023)
     */
    exportEmployees: (filter) => {
        try {
            axios({
                url: `https://localhost:7185/api/Employees/ExportExcel?filter=${filter}`,
                method: "GET",
                responseType: "blob",
            }).then((response) => {
                window.open();
                var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                var fileLink = document.createElement("a");

                fileLink.href = fileURL;
                fileLink.setAttribute("download", "Danh_sach_nhan_vien.xlsx");

                fileLink.click();
            });
        } catch (error) {
            console.log("Lỗi xuất khẩu nhân viên: " + error);
        }
    },
    /**
     * API lấy danh sách nhân viên theo trang
     * @param {* Gía trị trang muốn lấy dữ liệu} pageNumber 
     * @param {* Kích thước của trang} pageSize 
     * @param {* Tên, mã nhân viên muốn tìm kiếm} filter 
     * @returns 
     * CreatedBy: Bien (20/01/2023)
     */
    getProductPaging: (offSet, liMit, filter, categoryName) => {
        try {
            if (filter) {
                if (!categoryName) {
                    return axiosClient.get(baseUrl + `filter?offSet=${offSet}&liMit=${liMit}&filter=${filter}`);
                }
                return axiosClient.get(baseUrl + `filter?offSet=${offSet}&liMit=${liMit}&filter=${filter}&categoryName=${categoryName}`);
            } else if (categoryName) {
                return axiosClient.get(baseUrl + `filter?offSet=${offSet}&liMit=${liMit}&categoryName=${categoryName}`);
            } else {
                return axiosClient.get(baseUrl + `filter?offSet=${offSet}&liMit=${liMit}`);
            }
        } catch (error) {
            console.log("Lỗi lấy sản phẩm theo phân trang và tìm kiến, theo tên danh mục: " + error);
        }
    },
    /**
    * API sinh mã nhân viên mới
    * CreatedBy: Bien (20/01/2023)
    */
    getProductNewCode: () => {
        try {
            return axiosClient.get(baseUrl + "NewCode")
        } catch (error) {
            console.log("Lỗi lấy mã sản phẩm mới: " + error);
        }
    },
    /**
    * API lấy nhân viên theo id
    * @param {*Id nhân viên muốn lấy} id
    * CreatedBy: Bien (20/01/2023)
    */
    getProductById: (id) => {
        try {
            return axiosClient.get(baseUrl + id);
        } catch (error) {
            console.log("Lỗi lấy sản phẩm theo id: " + error);
        }
    },
    /**
    * API thêm sản phẩm
    * @param {*Sản phẩm muốn thêm} sản phẩm
    * CreatedBy: Bien (20/03/2023)
    */
    createProduct: (product) => {
        try {
            return axiosClient.post(baseUrl, product);
        } catch (error) {
            console.log("Lỗi thêm sản phẩm mới: " + error);
        }
    },
    /**
    * API sửa nhân viên
    * @param {*Id nhân viên muốn xóa} id
    * @param {*Nhân viên muốn sửa} newEmployee
    * CreatedBy: Bien (20/01/2023)
    */
    updateProduct: (id, newProduct) => {
        try {
            return axiosClient.put(baseUrl + id, newProduct);
        } catch (error) {
            console.log("Lỗi cập nhật sản phẩm mới: " + error);
        }
    },
    /**
    * API xóa nhân viên
    * @param {*Id sản phẩm muốn xóa} id
    * CreatedBy: Bien (20/01/2023)
    */
    deleteProductById: (id) => {
        try {
            return axiosClient.delete(baseUrl + id);
        } catch (error) {
            console.log("Lỗi xóa sản phẩm: " + error);
        }
    },
    /**
     * API xóa hàng loạt nhân viên
     * @param {*Danh sách id nhân viên muốn xóa} employeeIds 
     * @returns 
     * 1: Nếu xóa thành công
     * 0: Nếu xóa thất bại    
     * CreatedBy: Bien (20/01/2023)
     */
    deleteEmployees: (employeeIds) => {
        try {
            return axios.delete("https://localhost:7185/api/Employees/Deletes", {
                data: employeeIds
            })
        } catch (error) {
            console.log("Lỗi xóa nhiều nhân viên: " + error);
        }
    }
};

export default productApi;