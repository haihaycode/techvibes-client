<template>


    <div class="p-2 container mx-auto px-2 mt-2">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            <div v-for="(category, index) in categories" :key="index"
                class="flex items-center justify-center border  border-blue-500 rounded p-2 hover:bg-gray-100">
                <img :src="getPhoto(category.image)" :alt="category.name" class="h-8 mr-1" />
                <a :href="`/product?categoryId=${category.id}`" class="text-sm font-normal text-black">
                    {{ category.name }}
                </a>

            </div>
            <div class="flex items-center justify-center border  border-red-500 rounded p-2 hover:bg-gray-100">
                <a :href="`#/product`" class="text-sm font-normal text-black">
                    Tất cả
                </a>

            </div>
            <div class="flex items-center justify-center border rounded-md " v-if="filters.scope.totalPages != 1">
                <a @click.prevent="prevPage" class="">
                    <svg class="w-5 h-5 mr-1 -ml-1" fill=" currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
                <a @click.prevent="nextPage" class="">

                    <svg class="w-5 h-5 ml-1 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
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
import categoryService from '@/services/categoryService';
import { Notyf } from 'notyf';
import CONFIG from '@/services/config';
export default {
    name: 'CategoryGrid',
    data() {
        return {
            apiEndpoint: CONFIG.API_ENDPOINT,
            categories: [],
            loading: false,
            filters: {
                scope: '',
                limit: 5,
                page: 0
            }
        }
    },
    mounted() {
        this.loadCategory();
    },
    methods: {
        getPhoto(photo) {
            return `${this.apiEndpoint}/api/public/category/image/` + photo;
        },
        async loadCategory() {
            this.loading = true;
            var notyf = new Notyf();
            try {
                var resp = await categoryService.fetchCategory(this.filters);
                this.categories = resp.data.content;
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
        prevPage() {
            if (this.filters.page > 0) {
                this.filters.page--;
                this.loadCategory();
            }
        },
        nextPage() {
            const maxPage = Math.ceil(this.filters.scope.totalElements / this.filters.limit);
            if (this.filters.page < maxPage - 1) {
                this.filters.page++;
                this.loadCategory();
            }
        },
    },
}

</script>
