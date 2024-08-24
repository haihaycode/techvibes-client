

import axios from 'axios';

import CONFIG from './config';
const { API_ENDPOINT } = CONFIG;
const API_ENDPOINTv = `${API_ENDPOINT}/api`;


const reportService = {
    async totalRevenue(store, params) {
        try {
            const token = store.getters.token;
            const queryString = new URLSearchParams(params).toString();
            const url = `${API_ENDPOINTv}/admin/reports/total-revenue?${queryString}`;
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
            const url = `${API_ENDPOINTv}/admin/reports/product-sales?${queryString}`;
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