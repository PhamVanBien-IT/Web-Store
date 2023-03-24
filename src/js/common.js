/**
 * Hàm định dùng chung
 * CreatedBy: Bien (11/1/2023)
 */
const MISACommon = {
  /**
     * Hàm đinh dạng ngày giờ
     * CreatedBy: Bien (23/12/2023)
     */
  formatDate(datatime) {
    try {
      // Kiểm tra dữ liệu đầu vào khác null
      if (datatime != null && datatime != undefined) {
        // Chuyển thành dữ liệu dd/mm/yy
        datatime = new Date(datatime);

        let date = datatime.getDate();
        date = date < 10 ? `0${date}` : date;

        let month = datatime.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;

        let year = datatime.getFullYear();

        return `${date}/${month}/${year}`;
      } else {
        return "";
      }
    } catch (error) {
      console.log("Lỗi định dạng thời gian" + error);
    }
  },
  /**
  * Hàm đinh dạng ngày giờ YYYY-mm-dd
  * CreatedBy: Bien (23/12/2023)
  */
  formatDateReverse(datatime) {
    try {
      // Kiểm tra dữ liệu đầu vào khác null
      if (datatime != null && datatime != undefined) {
        // Chuyển thành dữ liệu dd/mm/yy
        datatime = new Date(datatime);

        let date = datatime.getDate();
        date = date < 10 ? `0${date}` : date;

        let month = datatime.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;

        let year = datatime.getFullYear();

        return `${year}-${month}-${date}`;
      } else {
        return "";
      }
    } catch (error) {
      console.log("Lỗi định dạng thời gian" + error);
    }
  },
    /**
     * Hàm đinh dạng và hiển thị ngày giờ hiện tại
     * CreatedBy: Bien (23/12/2023)
     */
     formatDateTime(datatime) {
      try {
        // Kiểm tra dữ liệu đầu vào khác null
        if (datatime != null && datatime != undefined) {
          // Chuyển thành dữ liệu dd/mm/yy
          datatime = new Date(datatime);
  
          let date = datatime.getDate();
          date = date < 10 ? `0${date}` : date;
  
          let month = datatime.getMonth() + 1;
          month = month < 10 ? `0${month}` : month;
  
          let year = datatime.getFullYear();

          let hour = datatime.getHours();
          hour = hour < 10 ? `0${hour}` : hour;

          let minutes = datatime.getMinutes();
          minutes = minutes < 10 ? `0${minutes}` : minutes;

          let seconds  = datatime.getSeconds();
          seconds  = seconds  < 10 ? `0${seconds }` : seconds ;

          return `${date}/${month}/${year} - ${hour} giờ ${minutes} phút ${seconds} giây`;
        } else {
          return "";
        }
      } catch (error) {
        console.log("Lỗi định dạng thời gian" + error);
      }
    },
}

export default MISACommon;