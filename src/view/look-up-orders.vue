<template>
    <Breadcrumb :crumbs="breadcrumbs" />
    <div class="bg-white  rounded px-8 pt-6 pb-8 mb-4">
        <form @submit.prevent="searchOrder" class="">
            <div class="mb-4">
                <label for="orderCode" class="block text-gray-700 text-sm font-bold mb-2">Mã đơn hàng :</label>
                <input type="text" v-model="orderCode" required
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="ORDER-745874...">
            </div>
            <div class="mb-6">
                <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">Số điện thoại :</label>
                <input type="number" v-model="phone" required
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="03547383...">
            </div>
            <div class="flex items-center justify-between">
                <Button :loading="loading" :text="loading ? 'Đang tải ' : 'Tìm đơn hàng'" type="submit"
                    class="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                </Button>
            </div>
        </form>

        <div v-if="order" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

            <div class="bg-white shadow-md rounded p-6 mb-4">
                <h2 class="text-2xl font-bold mb-4">Thông tin đơn hàng <span class="">{{
        order.orderCode
    }}</span></h2>

                <div class="mb-4">
                    <h3 class="text-lg font-semibold">Mã đơn hàng : <span
                            class=" bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{{
            order.orderCode
        }}</span></h3>
                </div>

                <div class="mb-4">
                    <h3 class="text-lg font-semibold">Tên người nhận :</h3>
                    <p class="text-gray-700">{{ order.fullName }}</p>
                </div>

                <div class="mb-4">
                    <h3 class="text-lg font-semibold">Địa chỉ :</h3>
                    <p class="text-gray-700">{{ order.address }}</p>
                </div>

                <div class="mb-4">
                    <h3 class="text-lg font-semibold">Số điện thoại :</h3>
                    <p class="text-gray-700">{{ order.phone }}</p>
                </div>
                <div class="mb-4">
                    <h3 class="text-lg font-semibold">Thời gian tạo đơn hàng :</h3>
                    <p class="text-gray-700">{{ timeAgo(order.createDate) }}</p>
                </div>
                <div class="mb-4">
                    <h3 class="text-lg font-semibold ">Trạng thái đơn hàng :</h3>
                    <span
                        class=" bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                        {{ order.orderStatus.status }}</span>
                </div>

                <div class="mb-4">
                    <h3 class="text-lg font-semibold">Tổng tiền :</h3>
                    <p class="text-red-500 text-2xl ">{{ formatCurrency(order.totalPrice) }}</p>
                </div>

                <div class="mb-4 ">
                    <h3 class="text-lg font-semibold">Nội dung đơn hàng :</h3>
                    <p class="text-yellow-700">{{ order.notes ? order.notes : 'Không có thông báo ' }}</p>
                </div>

                <div class="mb-4">
                    <h3 class="text-lg font-semibold">Thông tin các sản phẩm :</h3>
                    <ul class="list-disc list-inside text-gray-700">
                        <li v-for="item in order.orderDetails" :key="item.id" class="mb-2">
                            <strong>Tên sản phẩm :</strong> {{ item.product.name || 'No Name' }} <br>
                            <strong>Mô tả :</strong> {{ item.product.descriptionSort }} <br>
                            <strong>Giá tiền :</strong> {{ formatCurrency(item.price) }} <br>
                            <strong>Số lượng :</strong> {{ item.quantity }} <br>
                            <strong>Danh mục :</strong> {{ item.product.category.name }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="text-gray-500 text-center" v-if="message">{{ message }}</div>
    </div>
</template>
<script>
import orderService from '@/services/orderService';
import { formatCurrency, timeAgo } from '@/utils/utils';
import Button from '@/components/button.vue';
import Breadcrumb from '@/components/breadcrumb.vue';

export default {
    name: "lookUpOrderView",
    components: {
        Breadcrumb,
        Button
    },
    data() {
        return {
            loading: false,
            order: null,
            orderCode: null,
            phone: null,
            message: null,
            breadcrumbs: [
                { text: 'Trang chủ', link: '/' },
                { text: 'Tìm kiếm đơn hàng', link: '/find-order' },


            ],
        }
    },
    methods: {
        formatCurrency,
        timeAgo,
        async searchOrder() {
            this.loading = true;
            this.order = null;
            var params = {
                orderCode: this.orderCode,
                phone: this.phone,
            }
            try {
                const result = await orderService.lookupOrder(params);
                this.message = result.message;
                this.order = result.data;
            } catch (error) {
                this.message = 'Không tìm thấy đơn hàng';
                console.error(error);
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>