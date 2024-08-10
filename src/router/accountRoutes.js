const useComponent = component => () => import(`../view/${component}.vue`);
import header from '@/components/header.vue';
import footer from '@/components/footer.vue';
import client from '@/view/client.vue';
const accountRoutes = [
    {
        path: '/account',
        component: client,
        meta: { requiresAuth: true },
        children: [

            {
                path: '',
                meta: {
                    title: "Techvibes - Quản lý tài khoản",
                    description: "Techvibes "
                },
                components: {
                    default: useComponent('account'),
                    header: header,
                    footer: footer
                }

            },
            {
                path: 'address',
                meta: {
                    title: "Techvibes - Quản lý địa chỉ thanh toán",
                    description: "Techvibes "
                },
                components: {
                    default: useComponent('address'),
                    header: header,
                    footer: footer
                }
            },
            {
                path: 'favorite',
                meta: {
                    title: "Techvibes - Yêu thích",
                    description: "Techvibes "
                },
                components: {
                    default: useComponent('favorite'),
                    header: header,
                    footer: footer
                }
            },
            {
                path: 'cart',
                meta: {
                    title: "Techvibes - Giỏ hàng của bạn",
                    description: "Techvibes "
                },
                components: {
                    default: useComponent('cart'),
                    header: header,
                    footer: footer
                }
            },

        ]
    },
];

export default accountRoutes;