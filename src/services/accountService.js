import axios from 'axios';

const API_ENDPOINT = 'http://localhost:8080/api/admin';

const accountService = {
    async getAccounts(store, params) {
        try {
            const token = store.getters.token;
            const queryString = new URLSearchParams(params).toString();
            const url = `${API_ENDPOINT}/users?${queryString}`;
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
    async updateUser(store, userId, updateRequest) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/users/${userId}`;
            const response = await axios.put(
                url,
                updateRequest,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            return {
                message: response.data.message,
                data: response.data.data,
            };
        } catch (error) {
            console.error('Error updating user:', error);
            throw error;
        }
    },

    async toggleAvailability(store, userId) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/users/${userId}/availability`;
            const response = await axios.patch(url, {}, {
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
};

export default accountService;
