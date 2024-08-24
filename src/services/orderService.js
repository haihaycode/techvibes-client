import axios from 'axios';


import CONFIG from './config';
const { API_ENDPOINT } = CONFIG;

const API_ENDPOINTv = `${API_ENDPOINT}/api`;

const orderService = {


    async getOrdersAdmin(store, params) {
        try {
            const token = store.getters.token;
            const queryString = new URLSearchParams(params).toString();
            const url = `${API_ENDPOINTv}/admin/orders?${queryString}`;
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
    async getListOrderStatus(store) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINTv}/admin/order-status`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return {
                message: response.data.message,
                data: response.data,
            };
        } catch (error) {
            console.error('Error fetching accounts:', error);
            throw error;
        }
    },
    async getListOrder(store) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINTv}/admin/list/orders`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return {
                message: response.data.message,
                data: response.data,
            };
        } catch (error) {
            console.error('Error fetching accounts:', error);
            throw error;
        }
    },


    async updateOrderStatus(store, orderId, statusId, notes) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINTv}/admin/orders/${orderId}/status/${statusId}`;
            const response = await axios.put(
                url,
                notes, // Truyền trực tiếp notes dưới dạng một chuỗi
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json', // Đảm bảo Content-Type là application/json
                    },
                }
            );
            return {
                message: response.data.message,
                data: response.data,
            };
        } catch (error) {
            console.error('Error updating order status:', error);
            throw error;
        }
    }
    ,







    //client
    // Lấy tất cả đơn hàng của người dùng hiện tại
    async getOrders(store, params) {
        try {
            const token = store.getters.token;
            const queryString = new URLSearchParams(params).toString();
            const url = `${API_ENDPOINT}/public/orders?${queryString}`;
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

    async lookupOrder(params) {
        try {
            const queryString = new URLSearchParams(params).toString();
            const url = `${API_ENDPOINT}/public/look-up-orders?${queryString}`;
            const response = await axios.get(url);
            return {
                message: response.data.message,
                data: response.data.data,
            };
        } catch (error) {
            console.error('Error looking up order:', error);
            throw error;
        }
    },
}


export default orderService;