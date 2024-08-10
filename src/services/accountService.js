import axios from 'axios';

const API_ENDPOINT = 'http://localhost:8080/api/admin';
const API_ENDPOINT_PUBLIC = 'http://localhost:8080/api/public';
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

    async getAccountsById(store, userId) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/users/get/${userId}`;
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
    }, async exportUsersToExcel(store) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/users/export`;
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
    async exportUsersToExcelById(store, userId) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/users/export/${userId}`;
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
    async info(store) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT_PUBLIC}/auth/account`;
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
    async updateUserClient(store, account) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT_PUBLIC}/auth/account`;
            let formData = new FormData();
            let userUpdate = {
                fullName: account.fullName,
            };
            formData.append('request', new Blob([JSON.stringify(userUpdate)], { type: "application/json" }));
            if (account.file) {
                formData.append('file', account.file);
            }
            const response = await axios.put(url, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },

            });

            return {
                message: response.data.message,
            };
        } catch (error) {
            console.error('Error updating category:', error);
            throw error;
        }
    },
};

export default accountService;
