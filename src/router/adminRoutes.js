const useComponent = component => () => import(`../view/${component}.vue`);
import admin from '@/view/admin.vue';
import NavAndSideBarAdmin from '@/components/admin/navAndSideBarAdmin.vue';
import footerAdmin from '@/components/admin/footerAdmin.vue';
const adminRoutes = [
    {
        path: '/admin',
        component: admin,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                meta: {
                    title: " Quản lý - Techvibes ",
                    description: "Techvibes ",
                    requiresAuth: true
                },
                components: {
                    default: useComponent('admin/dashboard'),
                    NavAndSideBarAdmin: NavAndSideBarAdmin,
                    footerAdmin: footerAdmin
                }

            },
            {
                path: 'account',
                meta: {
                    title: "Quản lý người dùng - Techvibes ",
                    description: "Techvibes ",
                    requiresAuth: true
                },
                components: {
                    default: useComponent('admin/account'),
                    NavAndSideBarAdmin: NavAndSideBarAdmin,
                    footerAdmin: footerAdmin
                }

            },

        ]
    },
];

export default adminRoutes;