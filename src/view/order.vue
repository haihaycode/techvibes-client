<template>
    <div>
        <Breadcrumb :crumbs="breadcrumbs" />


        <div class="p-4">
            <div id="main-content"
                class="relative w-full h-full overflow-y-auto overflow-x-hidden bg-gray-50 dark:bg-gray-900 mt-10">
                <main>
                    <!-- bộ lọc -->
                    <h1 class="text-2xl font-bold mb-2">
                        <i class="fad fa-shopping-cart"></i> Thông tin các đơn hàng đã đặt
                    </h1>
                    <i class="text-gray-500 text-sm mt-1 ">Tra cứu đơn hàng dụa trên Mã đơn hàng và tên người dùng *</i>
                    <div
                        class=" bg-white block sm:flex items-center justify-between border-b border-gray-200  dark:bg-gray-800 dark:border-gray-700">

                        <div class="w-full mb-1">
                            <div
                                class="flex flex-col sm:flex-row sm:items-center sm:justify-between md:divide-x md:divide-gray-100 dark:divide-gray-700">

                                <form
                                    class="flex flex-col sm:flex-row sm:items-center space-y-4 md:space-x-2 sm:space-y-0 sm:space-x-2 w-full sm:pr-3"
                                    @submit.prevent="applyFilters">

                                    <div class="w-full sm:w-auto">
                                        <label for="products-search"
                                            class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Tìm kiếm
                                        </label>
                                        <input type="text" v-model="filters.keyword" id="products-search"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Tìm kiếm sản phẩm">
                                    </div>

                                    <div class="w-full sm:w-auto">
                                        <label for="availability-select"
                                            class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Trạng thái
                                        </label>
                                        <select id="availability-select" v-model="filters.statusId"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="" selected>-- không xét</option>
                                            <option value="1">Đang xử lý</option>
                                            <option value="2">Đang vận chuyển</option>
                                            <option value="3">Đã giao hàng</option>
                                            <option value="4">Đã hủy</option>
                                            <option value="5">Đặt hàng thành công</option>
                                        </select>
                                    </div>
                                    <div
                                        class="flex flex-col sm:flex-row sm:items-center sm:space-x-2 md:space-x-2 w-full sm:w-auto">
                                        <div class="w-full sm:w-auto">
                                            <label for="start-date-time"
                                                class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Ngày bắt đầu
                                            </label>
                                            <input v-model="filters.startDate" type="datetime-local"
                                                id="start-date-time"
                                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        </div>

                                        <div class="w-full sm:w-auto">
                                            <label for="end-date-time"
                                                class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Ngày kết thúc
                                            </label>
                                            <input v-model="filters.endDate" type="datetime-local" id="end-date-time"
                                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        </div>
                                    </div>

                                    <div
                                        class="flex flex-col  sm:flex-row sm:items-center sm:space-x-2 md:space-x-2 w-full sm:w-auto">
                                        <div class="w-full sm:w-auto">
                                            <label for="min-price"
                                                class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Giá tối thiểu
                                            </label>
                                            <input v-model="filters.minPrice" type="number" id="min-price"
                                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        </div>
                                        <div class="w-full sm:w-auto">
                                            <label for="max-price"
                                                class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Giá tối đa
                                            </label>
                                            <input v-model="filters.maxPrice" type="number" id="max-price"
                                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        </div>
                                    </div>

                                    <div class="w-full sm:w-auto">
                                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Tìm kiếm
                                        </label>
                                        <Button :loading="loading" :text="loading ? 'Đang tải ...' : 'Lọc kết quả'"
                                            type="submit"
                                            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                            Lọc
                                        </Button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                    <!-- table sản phẩm  -->
                    <div class="flex flex-col ">
                        <div class="overflow-x-auto">
                            <div class="inline-block min-w-full align-middle">
                                <div class="overflow-hidden shadow">
                                    <table
                                        class="min-w-full  divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                                        <thead class="bg-gray-100 dark:bg-gray-700">
                                            <tr class="">
                                                <th scope="col" colspan="1"
                                                    class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                    STT
                                                </th>
                                                <th @click="changeSort('fullName')" scope="col" colspan="2"
                                                    class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                    <i v-if="filters.sortField === 'fullName'" :class="{
            'fas': true,
            'fa-sort-amount-up': filters.sortDirection === 'asc',
            'fa-sort-amount-down': filters.sortDirection === 'desc'
        }">
                                                    </i> Họ và tên

                                                </th>
                                                <th @click="changeSort('email')" scope="col"
                                                    class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                    <i v-if="filters.sortField === 'email'" :class="{
            'fas': true,
            'fa-sort-amount-up': filters.sortDirection === 'asc',
            'fa-sort-amount-down': filters.sortDirection === 'desc'
        }">
                                                    </i>
                                                    Thư điện tử
                                                </th>
                                                <th @click="changeSort('address')" scope="col"
                                                    class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                    <i v-if="filters.sortField === 'address'" :class="{
            'fas': true,
            'fa-sort-amount-up': filters.sortDirection === 'asc',
            'fa-sort-amount-down': filters.sortDirection === 'desc'
        }">
                                                    </i> Địa chỉ giao hàng
                                                </th>
                                                <th @click="changeSort('phone')" scope="col"
                                                    class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                    <i v-if="filters.sortField === 'phone'" :class="{
            'fas': true,
            'fa-sort-amount-up': filters.sortDirection === 'asc',
            'fa-sort-amount-down': filters.sortDirection === 'desc'
        }">
                                                    </i>Số điện thoại
                                                </th>
                                                <th @click="changeSort('totalPrice')" scope="col"
                                                    class="text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                    <i v-if="filters.sortField === 'totalPrice'" :class="{
            'fas': true,
            'fa-sort-amount-up': filters.sortDirection === 'asc',
            'fa-sort-amount-down': filters.sortDirection === 'desc'
        }">
                                                    </i> Tổng tiền đơn hàng
                                                </th>
                                                <th scope="col"
                                                    class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                    Ghi chú / thông báo
                                                </th>
                                                <th @click="changeSort('createDate')" scope="col"
                                                    class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                    <i v-if="filters.sortField === 'createDate'" :class="{
            'fas': true,
            'fa-sort-amount-up': filters.sortDirection === 'asc',
            'fa-sort-amount-down': filters.sortDirection === 'desc'
        }">
                                                    </i> Thời gian tạo đơn hàng
                                                </th>
                                                <th scope="col" @click="changeSort('orderCode')"
                                                    class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                    <i v-if="filters.sortField === 'orderCode'" :class="{
            'fas': true,
            'fa-sort-amount-up': filters.sortDirection === 'asc',
            'fa-sort-amount-down': filters.sortDirection === 'desc'
        }">
                                                    </i> Mã đơn hàng (để xem thông tin đơn hàng)
                                                </th>
                                                <th scope="col" @click="changeSort('orderStatus.id')"
                                                    class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                    <i v-if="filters.sortField === 'orderStatus.id'" :class="{
            'fas': true,
            'fa-sort-amount-up': filters.sortDirection === 'asc',
            'fa-sort-amount-down': filters.sortDirection === 'desc'
        }">
                                                    </i> Trạng thái đơn hàng
                                                </th>
                                                <th scope="col"
                                                    class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                    Xem thông tin đơn hàng
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody
                                            class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">

                                            <tr v-for="(o, index) in listOrder" :key="index"
                                                class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <td>
                                                    <div
                                                        class="text-base text-center font-semibold text-gray-900 dark:text-white">
                                                        {{ index + 1 }} / {{ o.id }}
                                                    </div>
                                                </td>
                                                <td colspan="2"
                                                    class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    <div
                                                        class="text-base font-mono text-gray-900 whitespace-nowrap dark:text-white">
                                                        {{ o.fullName ? o.fullName : 'Người dùng Techvibes' }}</div>
                                                </td>
                                                <td
                                                    class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                                    {{ o.email }}
                                                </td>
                                                <td
                                                    class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                                    {{ o.address }}
                                                </td>
                                                <td
                                                    class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                                    {{ o.phone }} </td>
                                                <td
                                                    class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {{ formatCurrency(o.totalPrice) }}
                                                </td>

                                                <td
                                                    class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                                    {{ o.notes ? o.notes : 'không có thông báo ' }} </td>

                                                <td
                                                    class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">

                                                    {{ o.createDate ? timeAgo(o.createDate) : '' }}
                                                </td>
                                                <td
                                                    class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                                    {{ o.orderCode }}

                                                </td>
                                                <td
                                                    class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">

                                                    <span
                                                        class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                                                        {{ o.orderStatus.status }}</span>
                                                </td>
                                                <td
                                                    class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                                    <button @click="modal(o)"
                                                        class=" text-white bg-gray-500 p-2 hover:bg-gray-500 focus:outline-none rounded-lg">
                                                        xem chi tiết
                                                    </button>
                                                </td>

                                            </tr>
                                            <tr v-if="listOrder.length === 0">
                                                <td colspan="12" class="text-center">Không có đơn hàng nào</td>
                                            </tr>


                                            <SkeletonTable :columns="10" :loading="loading" :item="4" />
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- phân trang và các tùy chỉnh -->
                    <div
                        class="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200  dark:bg-gray-800 dark:border-gray-700 text-end">


                        <Button :loading="loading" :text="loading ? 'đang tải ' : 'Tải thêm'" @click.prevent="loadMore"
                            class="text-end px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            <svg class="w-5 h-5 mr-1 -ml-1" fill=" currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            Tải thêm
                        </Button>


                    </div>

                    <!-- edit người dùng -->

                    <div v-if="isModalVisible" id="exampleModalScrollable" tabindex="-1"
                        aria-labelledby="exampleModalScrollableLabel"
                        class="z-40 fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden mx-auto overflow-y-auto">
                        <div class="fixed inset-0 bg-gray-500" style="background-color: #ccccccd0;">
                        </div>
                        <div
                            class="relative p-4 w-full mt-10 mx-auto max-w-3xl bg-white rounded-lg shadow dark:bg-gray-700 ">
                            <!-- Modal header -->
                            <div
                                class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    Chi tiết đơn hàng
                                </h3>
                                <button type="button"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    @click="modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <!-- Modal body -->
                            <div class="p-4 md:p-5 space-y-4">



                                <div class="relative overflow-x-auto">
                                    <table
                                        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <thead
                                            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    ID / Tên Sản Phẩm
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Giá tiền
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Danh mục
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Số lượng
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(od, index) in listOrderDetail" :key="index"
                                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row"
                                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {{ index + 1 }} / {{ od.product.name }}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {{ formatCurrency(od.price) }} <span
                                                        class="text-gray-500 line-through ml-2">{{
            formatCurrency(od.product.price)
        }}</span>
                                                </td>
                                                <td class="px-6 py-4">
                                                    {{ od.product.category.name }}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {{ od.quantity}}
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>


                            </div>
                            <!-- Modal footer -->
                            <div class="p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button @click="modal" type="button"
                                    class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    Đóng
                                </button>
                            </div>
                        </div>
                    </div>


                </main>
            </div>
        </div>
    </div>
</template>

<script>
import orderService from "@/services/orderService";

import Breadcrumb from '@/components/breadcrumb.vue';
// import DefaultSkeleton from '@/components/defaultSekeleton.vue'
import Button from '@/components/button.vue';
import SkeletonTable from '@/components/SkeletonTable.vue';
// import { Notyf } from 'notyf';
import { formatCurrency, timeAgo } from '@/utils/utils';
export default {
    name: "OrdersView",
    components: {
        Breadcrumb,
        // DefaultSkeleton,
        Button,
        SkeletonTable,

    },
    data() {
        return {
            isModalVisible: false,
            listOrder: {},
            listOrderDetail: {},
            loading: false,
            filters: {
                scope: '',
                limit: 10,
                page: 0,
                sortField: 'id',
                sortDirection: 'desc',
            },
            breadcrumbs: [
                { text: 'Trang chủ', link: '/' },
                { text: 'Quản lý tài khoản', link: '/account' },
                { text: 'Quản lý đơn hàng', link: '/account/order' },
            ],
        }
    },
    mounted() {
        this.getOrders();
    },
    methods: {
        formatCurrency,
        timeAgo,
        getPhoto(photo) {
            return "http://localhost:8080/api/public/product/image/" + photo;
        },
        modal(o) {
            if (this.isModalVisible) {
                this.listOrderDetail = {};
            }
            else {
                this.listOrderDetail = o.orderDetails;
                console.log(this.listOrderDetail);
            }
            this.isModalVisible = !this.isModalVisible;
        },
        applyFilters() {
            let appliedFilters = { ...this.filters };
            if (appliedFilters.startDate) {
                const startDate = new Date(appliedFilters.startDate);
                appliedFilters.startDate = startDate.toISOString().slice(0, 19);  // Chuyển đổi thành định dạng yyyy-MM-ddThh:mm:ss
            } else {
                delete appliedFilters.startDate;
            }
            if (appliedFilters.endDate) {
                const endDate = new Date(appliedFilters.endDate);
                appliedFilters.endDate = endDate.toISOString().slice(0, 19);  // Chuyển đổi thành định dạng yyyy-MM-ddThh:mm:ss
            } else {
                delete appliedFilters.endDate;
            }
            if (!appliedFilters.statusId) {
                delete appliedFilters.statusId;
            }
            if (!appliedFilters.minPrice) {
                delete appliedFilters.minPrice;
            }
            if (!appliedFilters.maxPrice) {
                delete appliedFilters.maxPrice;
            }
            this.filters = appliedFilters;
            this.getOrders();
        },
        changeSort(field) {
            if (this.filters.sortField === field) {
                this.filters.sortDirection = this.filters.sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                this.filters.sortField = field;
                this.filters.sortDirection = 'asc';
            }
            this.filters.sort = this.filters.sortField + ',' + this.filters.sortDirection;
            this.getOrders();
        },
        async getOrders() {
            this.loading = true
            try {
                const response = await orderService.getOrders(this.$store, this.filters);
                this.listOrder = response.data.content;
                this.filters.scope = response.data;
                console.log(this.filters);
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false
            }
        },
        loadMore() {
            this.filters.limit += 5;
            this.getOrders();
        },

    }
}
</script>