import { createStore } from 'vuex';
import authService from '../services/authService';
import Cookies from 'js-cookie';

const store = createStore({
    state: {
        token: Cookies.get('token') || '',
        user: JSON.parse(Cookies.get('user') || null),
        roles: JSON.parse(Cookies.get('roles') || '[]'),
        status: '',
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading';
        },
        auth_success(state, { token, user, roles, message, rememberMe }) {
            state.status = 'success';
            state.token = token;
            state.user = user;
            state.roles = roles;

            const expires = rememberMe ? 1 / 5 : 1 / 24; // 5 giờ hoặc 1 giờ
            Cookies.set('token', token, { expires });
            Cookies.set('user', JSON.stringify(user), { expires });
            Cookies.set('roles', JSON.stringify(roles), { expires });
            state.message = message;
        },
        auth_error(state, message) {
            state.status = 'error';
            state.message = message;
        },
        logout(state) {
            state.status = '';
            state.token = '';
            state.user = null;
            state.roles = [];
            Cookies.remove('token');
            Cookies.remove('user');
            Cookies.remove('roles');
        },
    },
    actions: {
        async login({ commit }, { user, rememberMe }) {
            commit('auth_request');
            try {
                const response = await authService.login(user);
                commit('auth_success', { ...response, rememberMe });
                return response;
            } catch (error) {
                const message = error.response.data.message || 'Login failed';
                commit('auth_error', message);
                throw error;
            }
        },
        async logout({ commit }) {
            await authService.logout();
            commit('logout');
            window.location.href = '/login';
        },
    },
    getters: {
        token: state => state.token,
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        currentUser: state => state.user,
        userRoles: state => state.roles,
        hasRole: state => role => state.roles.includes(role),
        message: state => state.message,
    },
});

export default store;
