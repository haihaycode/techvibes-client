import axios from 'axios';

const API_ENDPOINT_PUBLIC = 'http://localhost:8080/api/public/address';

const addressService = {
    // Tạo header với Authorization chứa token
    getAuthHeader(token) {
        return {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        };
    },

    // Lấy tất cả địa chỉ của người dùng hiện tại
    getAddresses(store) {
        const token = store.getters.token; // Lấy token từ store
        return axios.get(API_ENDPOINT_PUBLIC, this.getAuthHeader(token));
    },

    // Thêm địa chỉ mới
    addAddress(store, address) {
        const token = store.getters.token;
        return axios.post(API_ENDPOINT_PUBLIC, address, this.getAuthHeader(token));
    },

    // Cập nhật địa chỉ theo ID
    updateAddress(store, id, address) {
        const token = store.getters.token;
        return axios.put(`${API_ENDPOINT_PUBLIC}/${id}`, address, this.getAuthHeader(token));
    },

    // Xóa địa chỉ theo ID
    deleteAddress(store, id) {
        const token = store.getters.token;
        return axios.delete(`${API_ENDPOINT_PUBLIC}/${id}`, this.getAuthHeader(token));
    },

    // Cập nhật địa chỉ mặc định
    setDefaultAddress(store, id) {
        const token = store.getters.token;
        return axios.put(`${API_ENDPOINT_PUBLIC}/${id}/default`, {}, this.getAuthHeader(token));
    }
};

export default addressService;
