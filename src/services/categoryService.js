import axios from 'axios';
const API_ENDPOINT = 'http://localhost:8080/api/admin';
const categoryService = {
    async getCategory(store, params) {
        try {
            const token = store.getters.token;
            const queryString = new URLSearchParams(params).toString();
            const url = `${API_ENDPOINT}/category?${queryString}`;
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
    async getCategoryById(store, id) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/category/${id}`;
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
    async toggleAvailability(store, id) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/category/${id}/availability`;
            const response = await axios.patch(url, null, {
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
    async exportCategoryToExcel(store) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/category/export/excel`;
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
    async exportCategoryToExcelById(store, idCategory) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/category/export/excel/${idCategory}`;
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

    async updateCategory(store, category) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/category/${category.id}`;
            let formData = new FormData();
            let categoryUpdate = {
                name: category.name,
                description: category.description,
            };
            formData.append('request', new Blob([JSON.stringify(categoryUpdate)], { type: "application/json" }));
            if (category.file) {
                formData.append('file', category.file);
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
    async newCategory(store, category) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/category`;
            let formData = new FormData();
            let categoryNew = {
                name: category.name,
                description: category.description,
            };
            formData.append('request', new Blob([JSON.stringify(categoryNew)], { type: "application/json" }));
            if (category.file) {
                formData.append('file', category.file);
            }
            const response = await axios.post(url, formData, {
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
    }

}
export default categoryService;