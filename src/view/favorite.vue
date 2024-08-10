<template>
    <Breadcrumb :crumbs="breadcrumbs" />

    <RouterLink to="/account" class="text-gray-500 hover:text-gray-700 px-4">
        <i class="fas fa-arrow-left px-5 py-10"></i>
        <span class="ml-10 text-red-500 font-bold">Quay lại</span>
    </RouterLink>

</template>
<script>
import Breadcrumb from '@/components/breadcrumb.vue';

export default {
    name: 'favoriteView',
    components: {
        Breadcrumb
    },
    data() {
        return {
            breadcrumbs: [
                { text: 'Trang chủ', link: '/' },
                { text: 'Quản lý tài khoản', link: '/account' },
                { text: 'Quản lý yêu thích', link: '/account/favorite' },
            ]
        }
    }
}
</script>