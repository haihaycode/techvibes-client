<template>
    <Breadcrumb :crumbs="breadcrumbs" />

    <div class="flex mx-10 space-x-1 mt-2">
        <!-- Thanh bộ lọc bên trái -->
        <form class="w-1/5 h-full rounded border-2 px-4 py-1" @submit.prevent="filterUpdate">
            <h2 class="text-lg font-extralight mb-4"><i class="fad fa-filter"></i> Bộ lọc sản phẩm</h2>
            <hr>
            <!-- Bộ lọc theo giá -->
            <div class="mb-4">
                <label for="minPrice" class="block font-extralight mb-1">Giá tối thiểu :</label>
                <input type="number" v-model.number="filters.minPrice" class="p-2 w-full border rounded" id="minPrice">
            </div>
            <div class="mb-4">
                <label for="maxPrice" class="block font-extralight mb-1">Giá tối đa :</label>
                <input type="number" v-model.number="filters.maxPrice" class="p-2 w-full border rounded" id="maxPrice">
            </div>
            <!-- Bộ lọc theo danh mục -->
            <div class="mb-4">
                <label for="categoryId" class="block font-extralight mb-1">Danh mục :</label>
                <select v-model="filters.categoryId" class="p-2 w-full border font-extralight rounded" id="categoryId">
                    <option value="">Tất cả</option>
                    <option v-for="category in category.list" :key="category.id" :value="category.id">
                        {{ category.name }}
                    </option>
                </select>
            </div>
            <!-- Bộ lọc theo từ khóa -->
            <div class="mb-4">
                <label for="keyword" class="block font-extralight mb-1">Từ khóa :</label>
                <input type="text" v-model="filters.keyword" class="p-2 w-full border rounded" id="keyword"
                    placeholder="chuột không dây ...">
            </div>
            <!-- Sắp xếp -->
            <div class="mb-4">
                <label for="sort" class="block font-extralight mb-1">Sắp xếp:</label>
                <select v-model="filters.sortField" class="p-2 w-full border rounded font-extralight" id="sort">
                    <option value="id">Mặc định</option>
                    <option value="price">Giá</option>
                    <option value="name">Tên</option>
                    <option value="discount">Giảm giá</option>
                    <option value="quantity">Số lượng</option>
                    <option value="createdAt">Ngày đăng</option>
                </select>
                <select v-model="filters.sortDirection" class="p-2 w-full border rounded mt-2 font-extralight">
                    <option value="asc">Tăng dần</option>
                    <option value="desc">Giảm dần</option>
                </select>
            </div>
            <div class="flex justify-between space-x-1">
                <button type="submit"
                    class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 w-full rounded text-sm">
                    Lọc sản phẩm
                </button>
                <button @click="resetFilters"
                    class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 w-full rounded text-sm">
                    Hủy lọc
                </button>
            </div>
        </form>

        <!-- Danh sách sản phẩm -->
        <div class="w-3/5 flex-grow flex flex-wrap">

            <CategoryGrid style="margin-top: 0 !important; padding-top: 0;"></CategoryGrid>

            <div v-if="products.length === 0" class="w-full flex items-center justify-center p-4">
                <p class="text-gray-600 text-lg">Không có sản phẩm nào</p>
            </div>


            <div v-else v-for="(p, i) in   products  " :key="i" class="sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                <div class="bg-white rounded shadow-lg overflow-hidden">
                    <img :src="getPhoto(p.image)" alt="Product 1" class="w-full h-100 object-cover">
                    <div class="p-4">
                        <div class="flex justify-between items-center mb-2">
                            <span class="bg-red-600 text-white px-2 py-1 text-xs rounded">Giảm {{ p.discount }}%</span>
                        </div>
                        <a :href="`/product/` + p.id" class="text-lg font-semibold hover:underline">{{ p.name }}</a>
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

            <div class=" flex items-center mb-4 sm:mb-0">
                <a @click.prevent="prevPage"
                    class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
                <span
                    class="border border-1 mx-2 rounded-lg text-gray-900 text-sm py-2 px-3 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{{
        filters.page + 1 }} / {{ filters.scope ? filters.scope.totalPages
                    : "" }}
                </span>
                <a @click.prevent="nextPage"
                    class="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>



            </div>

        </div>


    </div>
</template>
<script>
import Breadcrumb from '@/components/breadcrumb.vue';
import CategoryGrid from '@/components/categoryGrid.vue';
import favoriteService from '@/services/favoriteService';
import productService from '@/services/productService';
import categoryService from '@/services/categoryService';
import CartService from '@/services/cartService';
import { Notyf } from 'notyf';
import { formatCurrency, timeAgo } from '@/utils/utils';
export default {
    name: 'ProductView',
    components: {
        Breadcrumb,
        CategoryGrid
    },
    data() {
        return {
            breadcrumbs: [
                { text: 'Trang chủ', link: '/' },
                { text: 'Sản Phẩm', link: '/product' },
                { text: this.keyword },

            ],
            products: [],
            loading: false,
            filters: {
                scope: '',
                limit: 8,
                page: 0,
                sortField: 'id',
                sortDirection: 'desc',
            },
            category: {
                filters: {
                    limit: 1000
                },
                list: []
            }
        }
    },
    props: {
        minPrice: {
            type: Number,
            required: false
        },
        maxPrice: {
            type: Number,
            required: false
        },
        sortF: {
            type: String,
            required: false
        },
        sortD: {
            type: String,
            required: false
        },
        categoryId: {
            type: Number,
            required: false
        },
        keyword: {
            type: String,
            required: false
        }
    },
    mounted() {

        if (this.$props.minPrice !== undefined) {
            this.filters.minPrice = this.minPrice;
        }
        if (this.$props.maxPrice !== undefined) {
            this.filters.maxPrice = this.maxPrice;
        }
        if (this.$props.sortF !== undefined) {
            this.filters.sortField = this.sortF;
        }
        if (this.$props.sortD !== undefined) {
            this.filters.sortDirection = this.sortD;
        }
        if (this.$props.categoryId !== undefined) {
            this.filters.categoryId = this.categoryId;
        }
        if (this.$props.keyword !== undefined) {
            this.filters.keyword = this.keyword;
        }
        this.fetchProducts();
        this.loadCategory();
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
        async addToFavorites(productId) {
            try {
                await favoriteService.favorite(this.$store, productId);
            } catch (error) {
                console.error('Error adding to favorites:', error);
            }
        },
        filterUpdate() {
            let filtersToSend = {};
            for (let key in this.filters) {
                if (this.filters[key] !== null && this.filters[key] !== '' && this.filters[key] !== undefined) {
                    filtersToSend[key] = this.filters[key];
                }
            }
            this.filters = filtersToSend;
            this.fetchProducts();  // gọi hàm để cập nhật danh sách sản phẩm theo bộ lọc mới
        },
        resetFilters() {
            this.filters = {
                scope: '',
                limit: 12,
                page: 0,
                sortField: 'id',
                sortDirection: 'desc',
            };
            this.fetchProducts();
        },
        async loadCategory() {
            this.category.loading = true;
            var notyf = new Notyf();
            try {
                var resp = await categoryService.fetchCategory(this.category.filters);
                this.category.list = resp.data.content;
            } catch (error) {
                notyf.error(error.response?.data?.message || 'Đã xảy ra lỗi');
            } finally {
                this.category.loading = false;
            }
        },
        async fetchProducts() {
            this.loading = true;
            this.filters.sort = this.filters.sortField + ',' + this.filters.sortDirection;
            var notyf = new Notyf();
            try {
                var resp = await productService.fetchProduct(this.filters);
                this.products = resp.data.content;
                this.filters.scope = resp.data;
            } catch (error) {
                notyf.error(error.response?.data?.message || 'Đã xảy ra lỗi');
            } finally {
                this.loading = false;
            }
        },
        prevPage() {
            if (this.filters.page > 0) {
                this.filters.page--;
                this.fetchProducts();
            }
        },
        nextPage() {
            const maxPage = Math.ceil(this.filters.scope.totalElements / this.filters.limit);
            if (this.filters.page < maxPage - 1) {
                this.filters.page++;
                this.fetchProducts();
            }
        },
    }

}
</script>