<template>
    <Breadcrumb :crumbs="breadcrumbs" />

    <RouterLink to="/account" class="text-gray-500 hover:text-gray-700 px-4">
        <i class="fas fa-arrow-left px-5 py-10"></i>
        <span class="ml-10 text-red-500 font-bold">Quay lại</span>
    </RouterLink>

    <div v-if="favorites.length === 0" class="text-center">
        Không có sản phẩm nào
    </div>

    <div v-else class="flex flex-wrap mx-2 mt-4  ">

        <div v-for="(p, i) in favorites" :key="i" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 ">
            <div class="bg-white rounded shadow-lg overflow-hidden">
                <img :src="getPhoto(p.image)" alt="Product 1" class="w-full h-100 object-cover">
                <div class="p-4">
                    <div class="flex justify-between items-center mb-2">
                        <span class="bg-red-600 text-white px-2 py-1 text-xs rounded">Giảm {{ p.discount }}%</span>
                    </div>
                    <h3 class="text-lg font-semibold">{{ p.name }}</h3>
                    <div class="flex items-baseline mb-2">
                        <span class="text-red-600 font-bold text-xl">{{ formatCurrency(p.price - (p.price *
        (p.discount
            /
            100))) }} VNĐ</span>
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
                            class="text-red-600 flex items-center justify-center px-3 py-2 rounded-full bg-red-100 ">
                            <span class="material-icons"> Bỏ</span>
                            <i class="fad fa-heart-broken text-red-500 "></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Lặp lại div trên cho các sản phẩm khác -->
        <div class="">
            <div class="text-right ">
                <p @click="loadMore"
                    class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full text-sm m-2">
                    Xem thêm
                </p>
            </div>
        </div>
    </div>

</template>
<script>
import Breadcrumb from '@/components/breadcrumb.vue';
import favoriteService from '@/services/favoriteService';
import { formatCurrency, timeAgo } from '@/utils/utils';
import CartService from '@/services/cartService';
import { Notyf } from 'notyf';
import CONFIG from '@/services/config';
export default {
    name: 'favoriteView',
    components: {
        Breadcrumb
    },
    data() {
        return {
            apiEndpoint: CONFIG.API_ENDPOINT,
            breadcrumbs: [
                { text: 'Trang chủ', link: '/' },
                { text: 'Quản lý tài khoản', link: '/account' },
                { text: 'Quản lý yêu thích', link: '/account/favorite' },
            ],
            favorites: [],
            loading: false,
            filters: {
                limit: 8,
                page: 0,
                scope: '',
                sortField: 'id',
                sortDirection: 'desc',
            }
        }
    },
    mounted() {
        this.loadFavorites();
    },
    methods: {
        formatCurrency,
        timeAgo,
        getPhoto(photo) {
            return `${this.apiEndpoint}/api/public/product/image/` + photo;
        },
        async loadFavorites() {
            this.loading = true;
            this.filters.sort = this.filters.sortField + ',' + this.filters.sortDirection;
            var notyf = new Notyf();
            try {
                const response = await favoriteService.getFavoritesUser(this.$store, this.filters);
                this.favorites = response.data.content;
                this.filters.scope = response.data;
                console.log(this.favorites);
            } catch (error) {
                console.log(error);
                notyf.error(error.response?.data?.message || 'Đã xảy ra lỗi');
            } finally {
                this.loading = false;

            }
        },
        async addtocart(itemId) {
            try {
                await CartService.addItemToCart(this.$store, itemId, 1);
            } catch (error) {
                console.error("Error updating item quantity:", error);
            }
        },
        async addToFavorites(productId) {
            try {
                await favoriteService.favorite(this.$store, productId);

            } catch (error) {
                console.error('Error adding to favorites:', error);
            } finally {
                this.loadFavorites();
            }
        },
        prevPage() {
            if (this.filters.page > 0) {
                this.filters.page--;
                this.loadFavorites();
            }
        },
        nextPage() {
            const maxPage = Math.ceil(this.filters.scope.totalElements / this.filters.limit);
            if (this.filters.page < maxPage - 1) {
                this.filters.page++;
                this.loadFavorites();
            }
        },
        loadMore() {
            this.filters.limit += 5;
            this.loadFavorites();
        }

    }
}
</script>