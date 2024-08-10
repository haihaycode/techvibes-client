<template>
    <Breadcrumb :crumbs="breadcrumbs" />

    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Giỏ hàng của bạn</h2>

            <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">

                    <div v-if="cartItems.length === 0" class="space-y-6 text-center">
                        <span class="text-red-400">Giỏ hàng trống </span> <a href="/product"
                            class="underline text-blue-500">Quay lại
                            mua hàng </a>
                    </div>
                    <div v-else class="space-y-6">
                        <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
                            v-for="item in cartItems" :key="item.id">
                            <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                <a href="#" class="shrink-0 md:order-1">
                                    <img class="h-20 w-20 dark:hidden" :src="getPhoto(item.product.image)"
                                        alt="product image" />

                                </a>

                                <label for="counter-input" class="sr-only">Choose quantity:</label>
                                <div class="flex items-center justify-between md:order-3 md:justify-end">
                                    <div class="flex items-center">
                                        <button type="button"
                                            @click="updateQuantity(item.product.id, item.quantity - 1)"
                                            class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                            <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                            </svg>
                                        </button>
                                        <input type="text" id="counter-input" data-input-counter
                                            class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                                            :value="item.quantity" readonly />
                                        <button type="button"
                                            @click="updateQuantity(item.product.id, item.quantity + 1)"
                                            class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                            <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div class="text-end md:order-4 md:w-32 ml-2">
                                        <div class=" text-right mb-2">
                                            <span class="text-red-600 font-bold text-xl">{{ formatCurrency(item.price *
        item.quantity
    ) }} </span> <br>
                                            <span class="text-gray-500 line-through ml-2">{{
        formatCurrency(item.product.price)
    }}</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                    <a :href="`/product/` + item.product.id"
                                        class="text-base font-medium text-gray-900 hover:underline dark:text-white">{{
        item.product.name }}</a>

                                    <div class="flex items-center gap-4">
                                        <button @click="addToFavorites(item.product.id)" type="button"
                                            class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                                            <svg class="me-1.5 h-5 w-5" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2"
                                                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                            </svg>
                                            &nbsp; Thêm vào yêu thích
                                        </button>

                                        <button type="button" @click="removeItem(item.product.id)"
                                            class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                            <svg class="me-1.5 h-5 w-5" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2"
                                                    d="M6 18 17.94 6M18 18 6.06 6" />
                                            </svg>
                                            &nbsp; Xóa
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a v-if="cartItems.length > 0" @click="clearCart"
                        class="mt-6 flex justify-end items-center text-red-500 hover:underline cursor-pointer">
                        <i class="fad fa-trash-alt"></i> &nbsp; Xóa giỏ hàng
                    </a>


                </div>

                <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                    <div
                        class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                        <p class="text-xl font-semibold text-gray-900 dark:text-white">Tóm tắt đơn hàng</p>

                        <div class="space-y-4">
                            <div class="space-y-2">
                                <dl class="flex items-center justify-between gap-4">
                                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Giá gốc :
                                    </dt>
                                    <dd class="text-base font-medium text-gray-900 dark:text-white">{{
        formatCurrency(totalPriceStock) }} </dd>
                                </dl>
                                <dl class="flex items-center justify-between gap-4">
                                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Tiết kiệm được :
                                    </dt>
                                    <dd class="text-base font-medium text-gray-900 dark:text-white">{{
        formatCurrency(totalPriceStock - totalPrice) }} </dd>
                                </dl>

                                <dl class="flex items-center justify-between gap-4">
                                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Tổng tiền :
                                    </dt>
                                    <dd class="text-base font-extrabold text-red-500 dark:text-white ">{{
                                        formatCurrency(totalPrice) }} VNĐ</dd>
                                </dl>




                            </div>

                            <dl
                                class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                <dt class="text-base font-bold text-gray-900 dark:text-white">Tổng tiền : </dt>
                                <dd class="text-base font-bold text-gray-900 dark:text-white">{{
                                    formatCurrency(totalPrice)
                                    }}</dd>
                            </dl>
                            <a v-if="cartItems.length===0" href="/product"
                                class="w-full rounded-lg bg-gray-500 px-4 py-3 text-base font-semibold text-white shadow-sm ring-blue-600 ring-offset-1 transition hover:ring-offset-2 dark:bg-blue-500 dark:ring-offset-gray-800 dark:ring-blue-400 dark:hover:ring-offset-gray-700 sm:px-8 sm:py-5 sm:text-lg"
                                :disabled="isLoading">
                                Giỏ hàng trống
                            </a>

                            <button v-else type="button"
                                class="w-full rounded-lg bg-red-500 px-4 py-3 text-base font-semibold text-white shadow-sm ring-blue-600 ring-offset-1 transition hover:ring-offset-2 dark:bg-blue-500 dark:ring-offset-gray-800 dark:ring-blue-400 dark:hover:ring-offset-gray-700 sm:px-8 sm:py-5 sm:text-lg"
                                :disabled="isLoading">
                                Tiến hàng đặt hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CartService from '@/services/cartService'; // Import CartService
import favoriteService from '@/services/favoriteService';
import Breadcrumb from '@/components/breadcrumb.vue';
import { formatCurrency, timeAgo } from '@/utils/utils';

export default {
    name: "cartView",
    components: {
        Breadcrumb,

    },
    data() {
        return {
            breadcrumbs: [
                { text: 'Trang chủ', link: '/' },
                { text: 'Quản lý tài khoản', link: '/account' },
                { text: 'Quản lý giỏ hàng', link: '/account/cart' },

            ],
            cartItems: [],
            totalPrice: 0,
            totalPriceStock: 0,
            isLoading: false,
        };
    },
    methods: {
        formatCurrency,
        timeAgo,
        getPhoto(photo) {
            return "http://localhost:8080/api/public/product/image/" + photo;
        },
        async addToFavorites(productId) {
            try {
                await favoriteService.favorite(this.$store, productId);
            } catch (error) {
                console.error('Error adding to favorites:', error);
            }
        },
        async loadCart() {
            this.isLoading = true;
            try {
                // Lấy dữ liệu giỏ hàng từ CartService
                var response = await CartService.getCartItems(this.$store);
                this.cartItems = response.data;
                this.calculateTotalPrice();
                this.calculateTotalPriceStock();
            } catch (error) {
                console.error("Error loading cart items:", error);
            } finally {
                this.isLoading = false;
            }
        },
        calculateTotalPrice() {
            this.totalPrice = this.cartItems.reduce((total, item) => {
                return total + item.price * item.quantity;
            }, 0);
        },
        calculateTotalPriceStock() {
            this.totalPriceStock = this.cartItems.reduce((total, item) => {
                return total + item.product.price * item.quantity;
            }, 0);
        },
        async removeItem(itemId) {
            try {
                await CartService.removeItemFromCart(this.$store, itemId);
                this.loadCart();
            } catch (error) {
                console.error("Error removing item:", error);
            }
        },
        async updateQuantity(itemId, quantity) {
            try {
                await CartService.addItemToCart(this.$store, itemId, quantity);
                this.loadCart();
            } catch (error) {
                console.error("Error updating item quantity:", error);
            }
        },
        async clearCart() {
            try {
                await CartService.clearCart(this.$store);
                this.loadCart();
            } catch (error) {
                console.error("Error updating item quantity:", error);
            }
        },

    },
    mounted() {
        this.loadCart();
    },
};

</script>
