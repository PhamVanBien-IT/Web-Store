import axiosClient from "./axiosClient";

const baseUrl = "Departments/";


/**
 * Các API liên quan đến Department
 * CreatedBy: Bien (25/01/2023)
 */
const departmentApi = {
    /**
     * API lấy danh sách department
     * @returns danh sách department
     * CreatedBy: Bien (25/01/2023)
     */
    getDeparmentPaging: (pageSize) => {
        try {
            return axiosClient.get(baseUrl + `filter?pageNumber=1&pageSize=${pageSize}`);
        } catch (error) {
            console.log("Lỗi lấy danh sách đơn vị theo phân trang" +error);
        }
    },
};

export default departmentApi;