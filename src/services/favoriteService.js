import axios from 'axios';
const API_ENDPOINT = 'http://localhost:8080/api/admin';
const favoriteService = {



    async getFavorites(store, params) {
        try {
            const token = store.getters.token;
            const queryString = new URLSearchParams(params).toString();
            const url = `${API_ENDPOINT}/favorite/v1?${queryString}`;
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
    async getFavoritesById(store, productId, params) {
        try {
            const queryString = new URLSearchParams(params).toString();
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/favorite/v1/${productId}?${queryString}`;
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
    async exportFavorteToExcel(store) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/favorite/export/excel`;
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
}
export default favoriteService;