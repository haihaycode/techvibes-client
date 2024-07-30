import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

const API_ENDPOINT = 'http://localhost:8080/api/public/auth';

const authService = {
    async login(user) {
        const response = await axios.post(`${API_ENDPOINT}/login`, user);
        const token = response.data.data.accessToken;
        const decoded = jwtDecode(token);
        const roles = decoded.a || [];
        const userDetails = { email: decoded.e, id: decoded.sub };
        return {
            message: response.data.message,
            token,
            user: userDetails,
            roles,
        };
    },
    async register(newUser) {
        const response = await axios.post(`${API_ENDPOINT}/register`, newUser);
        return {
            message: response.data.message,
        };
    },
    async resetPassword(resetPassword) {
        const response = await axios.post(`${API_ENDPOINT}/reset-password`, resetPassword);
        return {
            message: response.data.message,
        };
    },
    async sendMailForgotPassword(getOtp) {
        const response = await axios.post(`${API_ENDPOINT}/forgot-password`, getOtp);
        return {
            message: response.data.message,
        };
    },
    async sentMailVerifyAccount(store) {
        const token = store.getters.token;
        const response = await axios.post(`${API_ENDPOINT}/verifyEmail`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return {
            message: response.data.message,
        };
    },
    async verifyAccount(store, otp) {
        const token = store.getters.token;
        const verifyAccount = {
            otp: otp,
            email: store.getters.currentUser.email
        }
        const response = await axios.put(`${API_ENDPOINT}/verifyEmail`, verifyAccount, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return {
            message: response.data.message,
        };
    },


    async logout() {
        Cookies.remove('token');
        Cookies.remove('user');
        Cookies.remove('roles');
        delete axios.defaults.headers.common['Authorization'];
    },
};

export default authService;
