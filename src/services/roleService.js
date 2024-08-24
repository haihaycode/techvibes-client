import axios from 'axios';

import CONFIG from './config';
const { API_ENDPOINT } = CONFIG;
const API_ENDPOINTv = `${API_ENDPOINT}/api/admin`;


const roleService = {
    async getRoles(store) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINTv}/roles`;
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
            console.error('Error adding roles:', error);
            throw error;
        }
    },

    async addUserRoles(store, userId, roleNames) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINTv}/${userId}/roles/add`;
            const response = await axios.patch(url, roleNames, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return {
                message: response.data.message,
                data: response.data.data,
            };
        } catch (error) {
            console.error('Error adding roles:', error);
            throw error;
        }
    },


}
export default roleService;