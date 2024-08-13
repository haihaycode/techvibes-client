import axios from 'axios';

const API_ENDPOINT_CHECKOUT = 'http://localhost:8080/api/public';

const checkoutService = {
    // Tạo header với Authorization chứa token
    getAuthHeader(token) {
        return {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        };
    },

    // Thực hiện thanh toán bằng phương thức COD (Cash on Delivery)
    checkoutCOD(store) {
        const token = store.getters.token; // Lấy token từ store
        return axios.post(`${API_ENDPOINT_CHECKOUT}/checkout/cod`, null, this.getAuthHeader(token));
    },
    async checkoutVNPAY(store) {
        const token = store.getters.token; // Lấy token từ store
        return axios.post(`${API_ENDPOINT_CHECKOUT}/checkout/bank`, null, this.getAuthHeader(token))
            .then(response => {
                const paymentUrl = response.data.data; // Hoặc `response.data` nếu dữ liệu trả về không nằm trong `data`
                if (paymentUrl) {
                    window.location.href = paymentUrl; // Chuyển hướng người dùng đến URL thanh toán
                } else {
                    throw new Error("URL thanh toán không được trả về từ server.");
                }
            })
            .catch(error => {
                console.error("Error during VNPAY checkout:", error);
                throw error; // Ném lỗi để xử lý ở nơi gọi
            });
    }

};

export default checkoutService;
