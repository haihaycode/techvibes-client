<template>
    <Breadcrumb :crumbs="breadcrumbs" />

    <div class="container mx-auto p-4">
        <!-- Kiểm tra nếu sản phẩm đã được tải -->
        <div v-if="product && product.category && product.category.id" class="flex flex-col lg:flex-row">
            <!-- Hình ảnh sản phẩm -->
            <div class="w-full lg:w-1/2">
                <img :src="getPhoto(product.image)" alt="Product Image"
                    class="w-full h-auto object-cover rounded-lg shadow-lg">
            </div>

            <!-- Thông tin sản phẩm -->
            <div class="w-full lg:w-1/2 lg:pl-8 mt-4 lg:mt-0">
                <h1 class="text-2xl font-bold mb-2">{{ product.name }}
                    <span class="bg-red-600 text-white px-2 py-1 text-xs rounded">Giảm {{ product.discount }}%</span>
                </h1>

                <div class="flex items-baseline mb-4">
                    <span class="text-red-600 font-bold text-2xl">
                        {{ formatCurrency(product.price - (product.price * (product.discount / 100))) }} VNĐ
                    </span>
                    <span class="text-gray-500 line-through ml-2">{{ formatCurrency(product.price) }}</span>
                </div>
                <p class="text-gray-600 mb-4"><span class="text-xl">Số lượng</span> : {{ product.quantity > 0 ?
        product.quantity : 'hết hàng' }}</p>
                <p class="text-gray-600 mb-4" v-html="product.description"></p>

                <div class="flex items-center mb-4">
                    <button @click="addtocart(product.id)"
                        class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                        Thêm vào giỏ hàng
                    </button>
                    <button @click="addToFavorites(product.id)"
                        class="ml-4 p-2 border border-red-500 text-red-500 rounded hover:bg-red-100">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Thông báo nếu sản phẩm không có -->
        <div v-else class="flex items-center justify-center p-4">
            <p class="text-gray-600 text-lg">...</p>
        </div>

        <!-- Chỉ hiển thị khi categoryId đã được load -->
        <RelatedProductView v-if="product.category && product.category.id" :categoryId="product.category.id" />
    </div>
</template>

<script>
import favoriteService from '@/services/favoriteService';
import productService from '@/services/productService';
import Breadcrumb from '@/components/breadcrumb.vue';
import { Notyf } from 'notyf';
import { formatCurrency, timeAgo } from '@/utils/utils';
import RelatedProductView from '@/components/relatedProduct.vue';
import CartService from '@/services/cartService';
import CONFIG from '@/services/config';


export default {
    name: 'ProductDetailView',
    components: {
        RelatedProductView,
        Breadcrumb
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            apiEndpoint: CONFIG.API_ENDPOINT,
            product: {},
            loading: false,
            breadcrumbs: [
                { text: 'Trang chủ', link: '/' },
                { text: 'Sản Phẩm', link: '/product' },
                { text: '', link: '/' },
            ],
        }
    },
    mounted() {
        this.fetchProductById(this.$props.id);
    },
    watch: {
        product(newValue) {
            if (newValue.name) {
                this.breadcrumbs[2].text = newValue.name;
            }
        }
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
        getPhoto(photo) {
            return `${this.apiEndpoint}/api/public/product/image/` + photo;
        },
        async fetchProductById(id) {
            this.loading = true;
            var notyf = new Notyf();
            try {
                var resp = await productService.fetchProductByID(id);
                this.product = resp.data;
            } catch (error) {
                console.log(error);
                notyf.error(error.response?.data?.message || 'Đã xảy ra lỗi');
            } finally {
                this.loading = false;
            }
        },
        async addToFavorites(productId) {
            try {
                await favoriteService.favorite(this.$store, productId);
            } catch (error) {
                console.error('Error adding to favorites:', error);
            }
        }
    }
}
</script>
