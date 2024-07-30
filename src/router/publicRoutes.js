const useComponent = component => () => import(`../view/${component}.vue`);
import header from '@/components/header.vue';
import footer from '@/components/footer.vue';
import client from '@/view/client.vue';
const authRoutes = [
    {
        path: '/',
        component: client,
        children: [

            {
                path: '',
                meta: {
                    title: "Techvibes ",
                    description: "Techvibes "
                },
                components: {
                    default: useComponent('auth/home'),
                    header: header,
                    footer: footer
                }

            },
            {
                path: 'login',
                meta: {
                    title: "Techvibes - Đăng nhập tài khoản",
                    description: "Techvibes - Đăng nhập tài khoản "
                },
                components: {
                    default: useComponent('auth/login'),

                }

            },
            {
                path: 'register',
                meta: {
                    title: "Techvibes - Đăng ký tài khoản",
                    description: "Techvibes - Đăng ký tài khoản"
                },
                components: {
                    default: useComponent('auth/register'),

                }

            },
            {
                path: 'forgot-password',
                meta: {
                    title: "Techvibes - Quên mật khẩu",
                    description: "Techvibes - Quên mật khẩu "
                },
                components: {
                    default: useComponent('auth/forgot-password'),

                }

            },
            {
                path: 'verify-account',
                meta: {
                    title: "Techvibes - Xác minh tài khoản",
                    description: "Techvibes -Xác minh tài khoản "
                },
                components: {
                    default: useComponent('auth/verify-account'),
                }

            },
        ]
    },
];

export default authRoutes;