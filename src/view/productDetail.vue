<template>
    <div class="container mx-auto p-4">
        <!-- Kiểm tra nếu sản phẩm đã được tải -->
        <div v-if="product" class="flex flex-col lg:flex-row">
            <!-- Hình ảnh sản phẩm -->
            <div class="w-full lg:w-1/2">
                <img :src="getPhoto(product.image)" alt="Product Image"
                    class="w-full h-auto object-cover rounded-lg shadow-lg">
            </div>

            <!-- Thông tin sản phẩm -->
            <div class="w-full lg:w-1/2 lg:pl-8 mt-4 lg:mt-0">
                <h1 class="text-2xl font-bold mb-2">{{ product.name }}</h1>
                <div class="flex items-baseline mb-4">
                    <span class="text-red-600 font-bold text-2xl">{{ formatCurrency(product.price - (product.price *
            (product.discount / 100))) }} VNĐ</span>
                    <span class="text-gray-500 line-through ml-2">{{ formatCurrency(product.price) }}</span>
                </div>
                <p class="text-gray-600 mb-4" v-html="product.description"> </p>

                <div class="flex items-center mb-4">
                    <button @click="addtocart(product.id)"
                        class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                        Thêm vào giỏ hàng
                    </button>
                    <button @click="addToFavorites(product.id)"
                        class="ml-4 p-2 border border-red-500 text-red-500 rounded hover:bg-red-100">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Thông báo nếu sản phẩm không có -->
        <div v-else class="flex items-center justify-center p-4">
            <p class="text-gray-600 text-lg">Sản phẩm không tồn tại</p>
        </div>
    </div>
</template>
<script>
import favoriteService from '@/services/favoriteService';
import productService from '@/services/productService';
import { Notyf } from 'notyf';
import { formatCurrency, timeAgo } from '@/utils/utils';
import CartService from '@/services/cartService';
export default {
    name: 'ProductDetailView',
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            product: null,
            loading: false,

        }
    },
    mounted() {
        this.fetchProductById(this.$props.id);
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
            return "http://localhost:8080/api/public/product/image/" + photo;
        },
        async fetchProductById(id) {
            console.log(id);
            this.loading = true;
            var notyf = new Notyf();
            try {
                var resp = await productService.fetchProductByID(id);
                this.product = resp.data;
                console.log(resp.data);
            } catch (error) {
                console.log(error);
                notyf.error(error.response?.data?.message || 'Đã xảy ra lỗi');
            } finally {
                this.loading = false;
            }

        },
        async addToFavorites(productId) {
            try {
                // Gọi service và truyền vào id sản phẩm
                await favoriteService.favorite(this.$store, productId);
            } catch (error) {
                console.error('Error adding to favorites:', error);
            }
        }
    }
}


</script>