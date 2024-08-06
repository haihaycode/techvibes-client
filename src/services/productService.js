import axios from 'axios';
const API_ENDPOINT = 'http://localhost:8080/api/admin';
const productService = {
    async getAllProducts(store, params) {
        try {
            const token = store.getters.token;
            const queryString = new URLSearchParams(params).toString();
            const url = `${API_ENDPOINT}/product?${queryString}`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return {
                message: response.data.message,
                data: response.data.data,
            };
        } catch (error) {
            console.error('Error fetching favorites:', error);
            throw error;
        }
    },
    async getProductById(store, id) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/product/${id}`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return {
                message: response.data.message,
                data: response.data.data,
            };
        } catch (error) {
            console.error('Error fetching accounts:', error);
            throw error;
        }
    },
    async exportProductsToExcel(store) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/product/export/excel`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                responseType: 'blob',
            });
            return response.data;
        } catch (error) {
            console.error('Error exporting users to Excel:', error);
            throw error;
        }
    },
    async exportProductToExcelById(store, id) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/product/export/excel/${id}`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                responseType: 'blob',
            });
            return response.data;
        } catch (error) {
            console.error('Error exporting users to Excel:', error);
            throw error;
        }
    },
    async toggleAvailability(store, id) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/product/${id}/availability`;
            const response = await axios.patch(url, null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return {
                message: response.data.message,
            };
        } catch (error) {
            console.error('Error :', error);
            throw error;
        }
    },
}
export default productService;