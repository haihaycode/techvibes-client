import axios from 'axios';

import CONFIG from './config';
const { API_ENDPOINT } = CONFIG;

const API_ENDPOINTv = `${API_ENDPOINT}/api/admin`;
const API_ENDPOINT_PUBLICv = `${API_ENDPOINT}/api`;

import { Notyf } from 'notyf';
const favoriteService = {

    async favorite(store, id) {
        var notyf = new Notyf();
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT_PUBLICv}/public/favorite`;

            const response = await axios.post(
                url,
                null,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    params: {
                        productId: id
                    }
                }
            );

            // Hiển thị thông báo thành công
            notyf.success(response.data.message);

            return {
                message: response.data.message,
                data: response.data.data,
            };
        } catch (error) {
            // Hiển thị thông báo lỗi
            notyf.error('Vui lòng đăng nhập.');
            store.dispatch('logout');
            throw error;
        }
    },


    async getFavorites(store, params) {
        try {
            const token = store.getters.token;
            const queryString = new URLSearchParams(params).toString();
            const url = `${API_ENDPOINTv}/favorite/v1?${queryString}`;
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
            const url = `${API_ENDPOINTv}/favorite/v1/${productId}?${queryString}`;
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
            const url = `${API_ENDPOINTv}/favorite/export/excel`;
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

    //client
    async getFavoritesUser(store, params) {
        try {
            const token = store.getters.token;
            const queryString = new URLSearchParams(params).toString();
            const url = `${API_ENDPOINT_PUBLICv}/public/favorite?${queryString}`;
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
}
export default favoriteService;