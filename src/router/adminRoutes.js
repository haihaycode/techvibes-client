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
            {
                path: 'roles',
                meta: {
                    title: "Phân quyền - Techvibes ",
                    description: "Techvibes ",
                    requiresAuth: true
                },
                components: {
                    default: useComponent('admin/roles'),
                    NavAndSideBarAdmin: NavAndSideBarAdmin,
                    footerAdmin: footerAdmin
                }

            },
            {
                path: 'favorite',
                meta: {
                    title: "Yêu thích - Techvibes ",
                    description: "Techvibes ",
                    requiresAuth: true
                },
                components: {
                    default: useComponent('admin/favorite'),
                    NavAndSideBarAdmin: NavAndSideBarAdmin,
                    footerAdmin: footerAdmin
                }

            },
            {
                path: 'category',
                meta: {
                    title: "Quản lý danh mục - Techvibes ",
                    description: "Techvibes ",
                    requiresAuth: true
                },
                components: {
                    default: useComponent('admin/category'),
                    NavAndSideBarAdmin: NavAndSideBarAdmin,
                    footerAdmin: footerAdmin
                }

            },
            {
                path: 'product',
                meta: {
                    title: "Quản lý sản phẩm - Techvibes ",
                    description: "Techvibes ",
                    requiresAuth: true
                },
                components: {
                    default: useComponent('admin/product'),
                    NavAndSideBarAdmin: NavAndSideBarAdmin,
                    footerAdmin: footerAdmin
                }

            },
            {
                path: 'order',
                meta: {
                    title: "Quản lý Đơn Hàng - Techvibes ",
                    description: "Techvibes",
                    requiresAuth: true
                },
                components: {
                    default: useComponent('admin/order'),
                    NavAndSideBarAdmin: NavAndSideBarAdmin,
                    footerAdmin: footerAdmin
                }

            },

            {
                path: 'report',
                meta: {
                    title: "Báo cáo thống kê - Techvibes ",
                    description: "Techvibes",
                    requiresAuth: true
                },
                components: {
                    default: useComponent('admin/report'),
                    NavAndSideBarAdmin: NavAndSideBarAdmin,
                    footerAdmin: footerAdmin
                }

            },

        ]
    },
];

export default adminRoutes;