import axios from 'axios';
const API_ENDPOINT_PUBLIC = 'http://localhost:8080/api/public';
import { Notyf } from 'notyf';

const cartService = {
    async getCart(store) {
        const notyf = new Notyf();
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT_PUBLIC}/cart/view`;

            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Hiển thị thông báo thành công
            notyf.success('Giỏ hàng đã được lấy thành công.');
            console.log(response)
            return {
                message: response.data.message,
                data: response.data.data,
            };

        } catch (error) {
            notyf.error('Vui lòng đăng nhập.');
            store.dispatch('logout');
            throw error;
        }
    },

    async getCartItems(store) {
        const notyf = new Notyf();
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT_PUBLIC}/cart/items`;

            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            notyf.success('Các mặt hàng trong giỏ hàng đã được lấy thành công.');
            console.log(response)
            return {
                message: response.data.message,
                data: response.data.data,
            };
        } catch (error) {
            notyf.error('Vui lòng đăng nhập.');
            store.dispatch('logout');
            throw error;
        }
    },

    async addItemToCart(store, productId, quantity) {
        const notyf = new Notyf();
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT_PUBLIC}/cart/add`;

            const response = await axios.post(
                url,
                null,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    params: {
                        productId,
                        quantity,
                    },
                }
            );

            notyf.success(response.data.message);

            return {
                message: response.data.message,
                data: response.data.payload,
            };
        } catch (error) {
            notyf.error('Vui lòng đăng nhập.');
            store.dispatch('logout');
            throw error;
        }
    },

    async removeItemFromCart(store, productId) {
        const notyf = new Notyf();
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT_PUBLIC}/cart/remove`;

            const response = await axios.post(
                url,
                null,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    params: {
                        productId,
                    },
                }
            );

            notyf.success(response.data.message);

            return {
                message: response.data.message,
                data: response.data.payload,
            };
        } catch (error) {
            notyf.error('Vui lòng đăng nhập.');
            store.dispatch('logout');
            throw error;
        }
    },

    async clearCart(store) {
        const notyf = new Notyf();
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT_PUBLIC}/cart/clear`;

            const response = await axios.delete(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            notyf.success(response.data.message);

            return {
                message: response.data.message,
                data: response.data.payload,
            };
        } catch (error) {
            notyf.error('Vui lòng đăng nhập.');
            store.dispatch('logout');
            throw error;
        }
    },
}

export default cartService;
