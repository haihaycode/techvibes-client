import axios from 'axios';

const API_ENDPOINT = 'http://localhost:8080/api/admin';

const roleService = {
    async getRoles(store) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/roles`;
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
            const url = `${API_ENDPOINT}/${userId}/roles/add`;
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