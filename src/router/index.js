// router/index.js
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import publicRoutes from '@/router/publicRoutes';
import adminRoutes from '@/router/adminRoutes';
import store from '@/store'; // Import store

import { Notyf } from 'notyf';


const isProduction = process.env.NODE_ENV === 'production';

export const routes = [
    ...publicRoutes,
    ...adminRoutes,
];

const router = createRouter({
    history: isProduction ? createWebHashHistory() : createWebHistory(),
    routes,
    linkActiveClass: 'my-custom-active-class',
    linkExactActiveClass: 'my-custom-exact-active-class',
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    if (to.meta.description) {
        const descriptionTag = document.querySelector('meta[name="description"]');
        if (descriptionTag) {
            descriptionTag.setAttribute('content', to.meta.description);
        } else {
            const newDescriptionTag = document.createElement('meta');
            newDescriptionTag.setAttribute('name', 'description');
            newDescriptionTag.setAttribute('content', to.meta.description);
            document.head.appendChild(newDescriptionTag);
        }
    }

    next();
});


router.beforeEach((to, from, next) => {
    var notyf = new Notyf()
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAdminRoute = to.matched.some(record => record.path.includes('/admin'));
    const isLoggedIn = store.getters.isLoggedIn;
    const userRoles = store.getters.userRoles;

    if (requiresAuth && !isLoggedIn) {
        notyf.error('Bạn chưa đăng nhập');
        next('/login');
    } else if (isAdminRoute && (!userRoles.includes('ROLE_ADMIN') && !userRoles.includes('ROLE_STAFF'))) {
        notyf.error('Bạn không đủ quyền truy cập');
        next('/login');
    } else {
        next();
    }
});

export default router;
