<template>
    <nav class="bg-red-500 border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" class="flex items-center">
                <img src="/image/logo2.png" class="h-8" alt=" Logo Techvibes" />
                <span class="text-white text-2xl px-2 font-medium">
                    TechVibes
                </span>
            </a>
            <div class="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                <button @click="toggleDropdown"
                    class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>

                    <img class="w-8 h-8 rounded-full ring-1 ring-white p-1"
                        src="https://avatars.githubusercontent.com/u/126437144?v=4" alt="user photo">
                </button>
                <!-- Dropdown menu -->
                <div v-if="isDropdownOpen"
                    class="absolute top-5 right-10 md:right-0  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown">
                    <div class="px-4 py-3">
                        <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                        <span class="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                    </div>
                    <ul class="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <a href="#"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                                out</a>
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
                    <li class="flex items-center mb-4 md:mb-0">

                        <div class="flex items-center w-full md:w-auto">
                            <input id="search" type="text" placeholder="Tìm kiếm..."
                                class="w-full md:w-auto px-4 py-2 rounded-md focus:ring-red-500 text-sm text-red-500" />

                        </div>
                    </li>
                    <li class="flex items-center mb-4 md:mb-0">
                        <router-link to="/"
                            class="flex items-center py-2 px-3 text-white rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-blue-500 hover:underline"
                            aria-current="page">
                            <i class="fad fa-search px-2 text-2xl"></i>
                            Tra cứu <br class="md:block hidden">
                            Sản phẩm
                        </router-link>
                    </li>
                    <li class="flex items-center mb-4 md:mb-0">

                        <a href="#"
                            class="flex items-center py-2 px-3 text-white rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-blue-500 hover:underline">
                            <i class="fad fa-sparkles block text-white  px-2 text-2xl"></i>
                            Sản phẩm
                            <br class="md:block hidden">
                            mới nhất
                        </a>
                    </li>
                    <li class="flex items-center mb-4 md:mb-0">

                        <a href="#"
                            class="flex items-center py-2 px-3 text-white rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-blue-500 hover:underline">
                            <i class="fad fa-phone-rotary block text-white  px-2 text-2xl"></i>

                            Liên hệ
                            <br class="md:block hidden">
                            chúng tôi
                        </a>
                    </li>
                    <li class="flex items-center mb-4 md:mb-0">

                        <a href="#"
                            class="flex items-center py-2 px-3 text-white rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-blue-500 hover:underline">
                            <i class="fad fa-shopping-cart block text-white  px-2 text-2xl"></i>
                            Giỏ hàng
                            <br class="md:block hidden">
                            của bạn
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>

</template>


<script>
export default {
    name: 'headerApp', // Đổi tên thành AppFooter

    data() {
        return {
            isDropdownOpen: false,
            isMenuOpen: false,

        };
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
}
</script>

<style scoped>
/* CSS cho footer */
</style>