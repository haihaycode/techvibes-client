<template>

    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
        <div class="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto text-center">
            <div class="flex justify-center items-center mb-6">
                <div class="bg-red-500 text-white p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Cảm ơn bạn đã đặt hàng !</h2>
            <p class="text-gray-500 mb-8"> Chúng tôi đã nhận được đơn hàng của bạn và sẽ xử lý ngay lập tức. </p>

            <div class="flex justify-center space-x-4">
                <a href="http://localhost:8081/account/order"
                    class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">Xem đơn hàng</a>
                <a href="http://localhost:8081/product"
                    class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Tiếp tục mua sắm</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goToHome() {
            this.$router.push('/'); // Thay đổi 'HomePage' thành tên route của trang chủ
        }
    }
}
</script>
