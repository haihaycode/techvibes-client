<template>
    <div class="container mx-auto px-2 mt-2 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <!-- Banner 1 -->
        <div
            class="flex flex-col md:flex-row items-center justify-between bg-red-500 text-white p-4 rounded-lg w-full md:w-1/2">
            <div>
                <h2 class="text-xl font-bold">Đặc Quyền S-Student</h2>
                <p class="text-lg">TỰU TRƯỜNG LÊN DEAL CHIẾN</p>
                <div class="flex space-x-2 mt-2">
                    <span>Giảm thêm 10%</span>
                    <span>Trả góp 0%</span>
                    <span>Thu cũ lên đời 5 triệu</span>
                </div>
                <p class="text-sm mt-2">15.8 - 31.10 | <a href="#" class="underline">XEM CHI TIẾT</a></p>
            </div>
            <div class="flex space-x-2 mt-4 md:mt-0">
                <img src="https://asset.msi.com/resize/image/global/product/product_16897537971a5bf13cb50e1e26b0c835af9ad4e311.png62405b38c58fe0f07fcef2367d8a9ba1/400.png"
                    alt="iPhone 15 Pro Max" class="h-20 mt-4 md:mt-0">
            </div>
        </div>

        <!-- Banner 2 -->
        <div
            class="flex flex-col md:flex-row items-center justify-between bg-black text-white p-4 rounded-lg w-full md:w-1/2">
            <div>
                <h2 class="text-xl font-bold">iPhone 15 Pro Max</h2>
                <p class="text-lg">Sạc iPhone 15 với chính sợi cáp USB-C bạn dùng để sạc các thiết bị khác.</p>
                <p class="text-sm mt-2">Lên đời từ 27.09 Triệu</p>
                <button class="mt-2 px-4 py-2 bg-gray-700 text-white rounded">Nâng cấp ngay</button>
            </div>
            <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Phone/Apple/iphone_15/Apple-iPhone-15-Pro-9.jpg"
                alt="iPhone 15 Pro Max" class="h-20 mt-4 md:mt-0">
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