<template>
    <div class="container mx-auto px-1 mt-2">
        <img class="border border-red-500 rounded mb-1" src="/image/bannerSale.svg" alt="">
        <div class="flex justify-between items-center bg-red-500 text-white py-2 px-4 rounded">
            <h2 class="text-lg font-bold">TOP MẶT HÀNG GIẢM GIÁ</h2>
            <div class="countdown">
                <span>Mua ngay </span>
                <span>Săn deal hời giảm đến 50%</span>
            </div>
        </div>
        <div class="flex flex-wrap mx-2 mt-4 border-red-500 border-2 rounded ">

            <div v-for="(p, i) in products" :key="i" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 p-2 ">
                <div class="bg-white rounded shadow-lg overflow-hidden">
                    <img :src="getPhoto(p.image)" alt="Product 1" class="w-full h-100 object-cover">
                    <div class="p-4">
                        <div class="flex justify-between items-center mb-2">
                            <span class="bg-red-600 text-white px-2 py-1 text-xs rounded">Giảm {{ p.discount }}%</span>
                        </div>
                        <a :href="`#/product/` + p.id" class="text-lg font-semibold hover:underline">{{ p.name }}</a>
                        <div class="flex items-baseline mb-2">
                            <span class="text-red-600 font-bold text-xl">{{ formatCurrency(p.price - (p.price *
                (p.discount
                    /
                    100))) }} </span>
                            <span class="text-gray-500 line-through ml-2">{{ formatCurrency(p.price) }}</span>
                        </div>
                        <p class="text-gray-600 text-sm mb-2 truncate">{{ p.descriptionSort }}</p>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center">
                                <button @click="addtocart(p.id)"
                                    class="text-red-600 flex items-center px-3 py-2 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white">
                                    <span class="material-icons"></span>
                                    Thêm vào giỏ hàng &nbsp;

                                </button>
                            </div>
                            <button @click="addToFavorites(p.id)"
                                class="text-red-600 flex items-center px-3 py-2 rounded-full bg-red-100 ">
                                <span class="material-icons"></span>
                                <i class="far fa-heart text-red-500 "></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Lặp lại div trên cho các sản phẩm khác -->
            <div class="">
                <div class="text-right ">
                    <p class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full text-sm m-2">
                        Xem thêm
                    </p>
                </div>
            </div>
        </div>

    </div>

</template>
<script>
import productService from '@/services/productService';
import { Notyf } from 'notyf';
import favoriteService from '@/services/favoriteService';
import CartService from '@/services/cartService';
import { formatCurrency, timeAgo } from '@/utils/utils';

import CONFIG from '@/services/config';





export default {
    name: "bestSale",
    data() {
        return {
            apiEndpoint: CONFIG.API_ENDPOINT,
            products: [],
            loading: false,
            filters: {
                scope: '',
                limit: 8,
                page: 0,
                sortField: 'discount',
                sortDirection: 'desc',
            }
        }
    },
    mounted() {
        this.loadProducts();
    },
    methods: {
        formatCurrency,
        timeAgo,
        async addtocart(itemId) {
            try {
                await CartService.addItemToCart(this.$store, itemId, 1);
            } catch (error) {
                console.error("Error updating item quantity:", error);
            }
        },
        async addToFavorites(productId) {
            try {
                // Gọi service và truyền vào id sản phẩm
                await favoriteService.favorite(this.$store, productId);
            } catch (error) {
                console.error('Error adding to favorites:', error);
            }
        },
        getPhoto(photo) {
            return `${this.apiEndpoint}/api/public/product/image/` + photo;
        },
        async loadProducts() {
            this.loading = true;
            this.filters.sort = this.filters.sortField + ',' + this.filters.sortDirection;
            var notyf = new Notyf();
            try {
                var resp = await productService.fetchProduct(this.filters);
                this.products = resp.data.content;
                this.filters.scope = resp.data;

            } catch (error) {
                if (error.response && error.response.status === 403) {
                    notyf.error('Bạn chưa đăng nhập. Vui lòng đăng nhập lại.');
                    await this.logoutUser();
                    this.$router.push('/login?session_expired=true');
                } else {
                    notyf.error(error.response?.data?.message || 'Đã xảy ra lỗi');
                }
            } finally {
                this.loading = false;
            }
        },
    }
}
</script>