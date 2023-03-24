import axiosClient from "./axiosClient";


/**
 * Các API liên quan đến Department
 * CreatedBy: Bien (25/01/2023)
 */
const comboboxApi = {
    /**
     * API lấy danh sách department
     * @returns danh sách department
     * CreatedBy: Bien (25/01/2023)
     */
    getEntities: (baseUrl,liMit) => {
        try {
            return axiosClient.get(`${baseUrl}/filter?offSet=1&liMit=${liMit}`);
        } catch (error) {
            console.log("Lỗi lấy danh sách combobox theo phân trang" + error);
        }
    },
};

export default comboboxApi;