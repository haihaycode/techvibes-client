<template>
    <div class="container mx-auto px-2 mt-2 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <!-- Banner 1 -->
        <div
            class="flex flex-col md:flex-row items-center justify-between bg-red-500 text-white p-4 rounded-lg w-full md:w-1/2">
            <div>
                <h2 class="text-2xl font-bold">Techvibes - Công nghệ trong tay bạn</h2>
                <p class="text-lg">Khai trương GIẢM 50% </p>
                <div class="flex space-x-2 mt-2">
                    <span>Giảm sâu lên đến 30%</span>
                    <span>Các mặt hàng công nghệ</span>

                </div>
                <p class="text-sm mt-2">Điện thoại - Máy tính bảng - Máy ảnh <RouterLink to="/product"
                        class="underline"> Xem chi tiết
                    </RouterLink>
                </p>
            </div>
            <div class="flex space-x-2 mt-4 md:mt-0">
                <img src="/image/logos.png" alt="iPhone 15 Pro Max" class="h-40 mt-4 md:mt-0">
            </div>
        </div>

        <!-- Banner 2 -->
        <div
            class="flex flex-col md:flex-row items-center justify-between bg-yellow-400 text-white p-4 rounded-lg w-full md:w-1/2">
            <div>
                <h2 class="text-xl font-bold">Điện thoại - Máy tính bảng - Máy ảnh </h2>
                <p class="text-lg">Ai nói tiền không mua được hạnh phúc chắc hẳn không biết <br> chỗ nào để mua sắm</p>
                <p class="text-xl mt-2">Đồ cũ giảm tới <Strong class="text-3xl">50%</Strong> </p>

            </div>
            <img src="/image/saleLogo50.svg" alt="iPhone 15 Pro Max" class="h-40 mt-4 md:mt-0">
        </div>
    </div>
</template>

<script>
export default {
    name: 'BannerComponent'
};
</script>

<style scoped>
/* Add any additional styling if needed */
</style>