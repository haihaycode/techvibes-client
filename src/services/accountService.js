import axios from 'axios';
import CONFIG from './config';
const { API_ENDPOINT } = CONFIG;


const accountService = {
    async getAccounts(store, params) {
        try {
            const token = store.getters.token;
            const queryString = new URLSearchParams(params).toString();
            const url = `${API_ENDPOINT}/api/admin/users?${queryString}`;
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


    async getAccountsList(store) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/api/admin/list/users`;
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

    async getAccountsById(store, userId) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/api/admin/users/get/${userId}`;
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
            const url = `${API_ENDPOINT}/api/admin/users/${userId}`;
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
            const url = `${API_ENDPOINT}/api/admin/users/${userId}/availability`;
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
            const url = `${API_ENDPOINT}/api/admin/users/export`;
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
            const url = `${API_ENDPOINT}/api/admin/users/export/${userId}`;
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
            const url = `${API_ENDPOINT}/api/public/auth/account`;
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
            const url = `${API_ENDPOINT}/api/public/auth/account`;
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
