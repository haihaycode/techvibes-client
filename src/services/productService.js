import axios from 'axios';
const API_ENDPOINT = 'http://localhost:8080/api/admin';
const API_ENDPOINT_PUBLIC = 'http://localhost:8080/api';
const productService = {
    async getAllProducts(store, params) {
        try {
            const token = store.getters.token;
            const queryString = new URLSearchParams(params).toString();
            const url = `${API_ENDPOINT}/product?${queryString}`;
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
    async getProductById(store, id) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/product/${id}`;
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
    async exportProductsToExcel(store) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/product/export/excel`;
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
    async exportProductToExcelById(store, id) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/product/export/excel/${id}`;
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
    async toggleAvailability(store, id) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/product/${id}/availability`;
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
    async updateProduct(store, product) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/product/${product.id}`;
            let formData = new FormData();
            let productUpdate = {
                name: product.name,
                price: product.price,
                description: product.description,
                descriptionSort: product.descriptionSort,
                categoryId: product.category.id,
                quantity: product.quantity,
                discount: product.discount,

            };
            formData.append('request', new Blob([JSON.stringify(productUpdate)], { type: "application/json" }));
            if (product.file) {
                formData.append('file', product.file);
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
    async createProduct(store, product) {
        try {
            const token = store.getters.token;
            const url = `${API_ENDPOINT}/product`;
            let formData = new FormData();
            let productUpdate = {
                name: product.name,
                price: product.price,
                description: product.description,
                descriptionSort: product.descriptionSort,
                categoryId: product.category.id,
                quantity: product.quantity,
                discount: product.discount,

            };
            formData.append('request', new Blob([JSON.stringify(productUpdate)], { type: "application/json" }));
            if (product.file) {
                formData.append('file', product.file);
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
    },
    async importExcel(store, file) {
        const token = store.getters.token;
        const formData = new FormData();
        formData.append('file', file);

        const response = await axios.post(`${API_ENDPOINT}/product/import/excel`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data.message;
    },

    //người dùng 
    async fetchProduct(params) {
        try {
            const queryString = new URLSearchParams(params).toString();
            const url = `${API_ENDPOINT_PUBLIC}/public/product?${queryString}`;
            const response = await axios.get(url);
            return {
                message: response.data.message,
                data: response.data.data,
            };
        } catch (error) {
            console.error('Error fetching favorites:', error);
            throw error;
        }
    },
    async fetchProductByID(id) {
        try {

            const url = `${API_ENDPOINT_PUBLIC}/public/product/${id}`;
            const response = await axios.get(url);
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
export default productService;