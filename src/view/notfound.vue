<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
        <h1 class="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p class="text-xl font-medium text-gray-700 mb-4">Địa chỉ không tồn tại!</p>
        <router-link to="/"
            class="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition duration-300">
            Quay lại trang chủ
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
};
</script>

<style scoped>
/* Add additional styles here if needed */
</style>