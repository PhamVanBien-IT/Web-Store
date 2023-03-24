import axiosClient from "./axiosClient";
const baseUrl = "Categorys/";

const categoryApi = {
    /**
     * API lấy tất cả danh mục
     * @returns Danh sách danh mục
     * CreatedBy: Bien (20/03/2023)
     */
    getCategoryAll: () =>{
        try {
            return axiosClient.get(baseUrl);
        } catch (error) {
            console.log("Lỗi lấy danh sách danh mục" + error);
        }
    },
    /**
     * API lấy danh sách danh mục phân trang
     * @returns danh sách dang mục
     * CreatedBy: Bien (20/03/2023)
     */
     getCategoryPaging: (liMit) => {
        try {
            return axiosClient.get(baseUrl + `filter?offSet=1&liMit=${liMit}`);
        } catch (error) {
            console.log("Lỗi lấy danh sách dabg mục theo phân trang" +error);
        }
    },
}

export default categoryApi;