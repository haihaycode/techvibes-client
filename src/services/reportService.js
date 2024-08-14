

import axios from 'axios';
const API_ENDPOINT = 'http://localhost:8080/api';


const reportService = {
    async totalRevenue(store, params) {
        try {
            const token = store.getters.token;
            const queryString = new URLSearchParams(params).toString();
            const url = `${API_ENDPOINT}/admin/reports/total-revenue?${queryString}`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data.data;
        } catch (error) {
            console.error('Error fetching total revenue:', error);
            throw error; // Ném lỗi ra để xử lý ở nơi gọi hàm
        }
    },
    async getProductSales(store, params) {
        try {
            const token = store.getters.token;
            const queryString = new URLSearchParams(params).toString();
            const url = `${API_ENDPOINT}/admin/reports/product-sales?${queryString}`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching total revenue:', error);
            throw error; // Ném lỗi ra để xử lý ở nơi gọi hàm
        }
    }
}
export default reportService;