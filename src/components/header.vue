<template>
    <nav class="bg-red-500 border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2 py-1">
            <a href="/" class="flex items-center">
                <img src="/image/logos.png" class="h-14" alt=" Logo Techvibes" />
                <span class="text-white text-2xl px-2 font-medium">
                    TechVibes <br> <span class="font-light text-xl">Thế giới công nghệ</span>
                </span>
            </a>
            <div class="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                <button @click="toggleDropdown"
                    class="flex font-normal text-white justify-center items-center text-sm text-xs m-2 md:me-0 p-2 focus:ring-gray-300 dark:focus:ring-gray-600  border-2 rounded border-gray-100 text-xs px-2"
                    id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <i class="fad fa-user-alt px-1"></i>
                    <span>Tài khoản</span>

                </button>
                <!-- Dropdown menu -->
                <div v-if="isDropdownOpen"
                    class="absolute md:top-10 md:right-10 top-10 right-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown">
                    <div class="px-4 py-3">
                        <router-link v-if='!isLoggedIn' to="/login"
                            class="block text-sm text-gray-500 truncate dark:text-gray-400 p-3"> <i
                                class="fad fa-sign-in-alt"></i> &nbsp; Đăng nhập tài khoản
                        </router-link>
                        <router-link v-if='!isLoggedIn' to="/forgot-password"
                            class="block text-sm text-gray-500 truncate dark:text-gray-400 p-3"><i
                                class="fad fa-lock"></i> &nbsp; Quên mật khẩu ?
                        </router-link>
                        <span v-if="isLoggedIn" class="block text-sm text-gray-500 truncate dark:text-gray-400 p-3"> <i
                                class="fad fa-user"></i> &nbsp;{{
                    user.name ? user.name : user.email }}</span>
                    </div>
                    <ul class="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <a href=" /account" v-if="isLoggedIn"
                                class="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                <i class="fad fa-user-cog"></i> &nbsp;Thông
                                tin cá nhân</a>
                        </li>
                        <li>
                            <a href="/account/order" v-if="isLoggedIn"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><i
                                    class="fad fa-shopping-cart"></i> &nbsp; Đơn
                                hàng </a>
                        </li>
                        <li>
                            <a href="/account/favorite" v-if="isLoggedIn"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><i
                                    class="fad fa-heart"></i> &nbsp; Yêu thích </a>
                        </li>
                        <li>
                            <a @click="logout" v-if="isLoggedIn"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><i
                                    class="fad fa-sign-out"></i> &nbsp; Đăng
                                Xuất</a>
                        </li>
                    </ul>
                </div>
                <button @click="toggleMenu"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-user" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path color="white" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen }"
                class="items-center md:bg-red-500 bg-red-500 mt-1 md:mt-0 rounded justify-between w-full md:flex md:w-auto md:order-1"
                id="navbar-user">
                <ul
                    class="flex flex-col text-white font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-3 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li class="flex items-center mb-4 md:mb-0 border-1 border-gray-100">

                        <div class="flex items-center w-full md:w-auto">
                            <form action="/product" method="get" class="flex items-center">
                                <input id="search" name="keyword" type="text" placeholder="Tìm kiếm..."
                                    class="w-full md:w-auto px-4 py-2 border-0 rounded-md focus:ring-red-500 text-sm text-red-500" />
                            </form>
                        </div>
                    </li>
                    <li class="flex items-center mb-4 md:mb-0 border-2 rounded border-gray-100 text-xs px-2">
                        <router-link to="/find-order"
                            class="flex items-center py-2 px-3 text-white rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-blue-500 hover:underline"
                            aria-current="page">
                            <i class="fad fa-search px-2 "></i>
                            Tra cứu <br class="md:block hidden">
                            Sản phẩm
                        </router-link>
                    </li>
                    <li class="flex items-center mb-4 md:mb-0  border-2 rounded border-gray-100 text-xs px-2">

                        <a href="/product"
                            class="flex items-center py-2 px-3 text-white rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-blue-500 hover:underline">
                            <i class="fad fa-sparkles block text-white  px-2 "></i>
                            Sản phẩm
                            <br class="md:block hidden">
                            mới nhất
                        </a>
                    </li>
                    <li class="flex items-center mb-4 md:mb-0  border-2 rounded border-gray-100 text-xs px-2">

                        <a href="#"
                            class="flex items-center py-2 px-3 text-white rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-blue-500 hover:underline">
                            <i class="fad fa-phone-rotary block text-white  px-2 "></i>

                            Liên hệ
                            <br class="md:block hidden">
                            chúng tôi
                        </a>
                    </li>
                    <li class="flex items-center mb-4 md:mb-0  border-2 rounded border-gray-100 text-xs px-2">

                        <router-link to="/account/cart"
                            class="flex items-center py-2 px-3 text-white rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-blue-500 hover:underline">
                            <i class="fad fa-shopping-cart block text-white  px-2 "></i>
                            Giỏ hàng
                            <br class="md:block hidden">
                            của bạn
                        </router-link>
                    </li>
                </ul>

            </div>
        </div>
    </nav>

</template>


<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'headerApp', // Đổi tên thành AppFooter

    data() {
        return {
            isDropdownOpen: false,
            isMenuOpen: false,

        };
    },
    methods: {
        ...mapActions(['logout']),
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },

    },
    computed: {
        ...mapGetters(['isLoggedIn', 'userRoles', 'hasRole', 'currentUser']),
        roles() {
            return this.userRoles || [];
        },
        user() {
            return this.currentUser || null;
        }
    },

}
</script>

<style scoped>
/* CSS cho footer */
</style>