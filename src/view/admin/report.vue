<template>
    <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border bg-gray-100 rounded-lg dark:border-gray-700 mt-14">
            <!-- nhãn 1 -->
            <div>
                <h1 class="text-3xl font-extrabold mb-4 text-blue-600 flex items-center">
                    <i class="far fa-money-check-alt mr-2 text-blue-500"></i>
                    Thống kê tổng doanh thu (Lợi nhuận)
                </h1>
                <p class="text-4xl font-semibold text-green-500 mb-2">{{ formatCurrency(revenue) }} VND</p>
                <p class="text-gray-500 text-sm mt-1 italic">Theo ngày - tháng - năm</p>
            </div>

            <!-- bộ lọc 1 -->
            <div
                class=" block sm:flex items-center justify-between border-b border-gray-200  dark:bg-gray-800 dark:border-gray-700">
                <div class="w-full mb-1">
                    <div
                        class="flex flex-col sm:flex-row sm:items-center sm:justify-between md:divide-x md:divide-gray-100 dark:divide-gray-700">
                        <form
                            class="flex flex-col sm:flex-row sm:items-center space-y-4 md:space-x-2 sm:space-y-0 sm:space-x-2 w-full sm:pr-3"
                            @submit.prevent="applyFilters">
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
                            <div class="w-full sm:w-auto">
                                <label for="time-range-select"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Khoảng thời gian
                                </label>
                                <select id="time-range-select" v-model="filters.timeRange"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="">-- không xét</option>
                                    <option value="today">Hôm nay</option>
                                    <option value="yesterday">Hôm qua</option>
                                    <option value="this_week">Tuần này</option>
                                    <option value="last_week">Tuần trước</option>
                                    <option value="this_month">Tháng này</option>
                                    <option value="last_month">Tháng trước</option>
                                </select>

                            </div>
                            <div class="w-full sm:w-auto">
                                <label for="availability-select"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Người dùng
                                </label>
                                <select id="availability-select" v-model="filters.accountId"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="" selected>-- không xét</option>
                                    <option v-for="account in accounts" :key="account.userId" :value="account.userId">
                                        {{ account.userId }} / {{ account.fullName
                    ? account.fullName : 'Người dùng TechVibes' }}
                                    </option>

                                </select>
                            </div>
                            <div
                                class="flex flex-col sm:flex-row sm:items-center sm:space-x-2 md:space-x-2 w-full sm:w-auto">
                                <div class="w-full sm:w-auto">
                                    <label for="start-date-time"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Ngày bắt đầu
                                    </label>
                                    <input v-model="filters.startDate" type="datetime-local" id="start-date-time"
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
            <!-- biểu đồ  -->

            <div class="p-4 border-2 border-gray-200 border bg-gray-100 rounded-lg dark:border-gray-700 mt-14">
                <h1 class="text-3xl font-extrabold mb-4 text-blue-600">
                    Doanh thu 10 tháng gần nhất
                </h1>
                <div class="flex flex-col">
                    <!-- Biểu đồ hình cột -->
                    <div class="flex items-end space-x-2">
                        <div v-for="(revenue, index) in revenueList" :key="index" class="flex-1">
                            <div :style="{ height: calculateBarHeight(revenue) }"
                                class="bg-blue-500 text-white text-center rounded-md">
                                <span>{{ formatCurrency(revenue) }} </span>
                            </div>
                            <p class="text-center mt-1 text-sm">{{ months[index] }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="p-4 border-2 border-gray-200 border bg-gray-100 rounded-lg dark:border-gray-700 mt-14">
            <!-- nhãn 1 -->
            <div>
                <h1 class="text-3xl font-extrabold mb-4 text-blue-600 flex items-center">
                    <i class="fad fa-file-chart-line mr-2 text-blue-500"></i>

                    Thống kê số lượng bán ra của từng sản phẩm
                </h1>

                <p class="text-gray-500 text-sm mt-1 italic">Theo ngày - tháng - năm</p>
            </div>

            <!-- bộ lọc 1 -->
            <div
                class=" block sm:flex items-center justify-between border-b border-gray-200  dark:bg-gray-800 dark:border-gray-700">
                <div class="w-full mb-1">
                    <div
                        class="flex flex-col sm:flex-row sm:items-center sm:justify-between md:divide-x md:divide-gray-100 dark:divide-gray-700">
                        <form
                            class="flex flex-col sm:flex-row sm:items-center space-y-4 md:space-x-2 sm:space-y-0 sm:space-x-2 w-full sm:pr-3"
                            @submit.prevent="applyFilters1">
                            <div class="w-full sm:w-auto">
                                <label for="availability-select"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Trạng thái
                                </label>
                                <select id="availability-select" v-model="filters1.statusId"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="" selected>-- không xét</option>
                                    <option value="1">Đang xử lý</option>
                                    <option value="2">Đang vận chuyển</option>
                                    <option value="3">Đã giao hàng</option>
                                    <option value="4">Đã hủy</option>
                                    <option value="5">Đặt hàng thành công</option>
                                </select>
                            </div>
                            <div class="w-full sm:w-auto">
                                <label for="time-range-select"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Khoảng thời gian
                                </label>
                                <select id="time-range-select" v-model="filters1.timeRange"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="">-- không xét</option>
                                    <option value="today">Hôm nay</option>
                                    <option value="yesterday">Hôm qua</option>
                                    <option value="this_week">Tuần này</option>
                                    <option value="last_week">Tuần trước</option>
                                    <option value="this_month">Tháng này</option>
                                    <option value="last_month">Tháng trước</option>
                                </select>

                            </div>
                            <div class="w-full sm:w-auto">
                                <label for="availability-select"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Người dùng
                                </label>
                                <select id="availability-select" v-model="filters1.accountId"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="" selected>-- không xét</option>
                                    <option v-for="account in accounts" :key="account.userId" :value="account.userId">
                                        {{ account.userId }} / {{ account.fullName
                    ? account.fullName : 'Người dùng TechVibes' }}
                                    </option>

                                </select>
                            </div>
                            <div
                                class="flex flex-col sm:flex-row sm:items-center sm:space-x-2 md:space-x-2 w-full sm:w-auto">
                                <div class="w-full sm:w-auto">
                                    <label for="start-date-time"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Ngày bắt đầu
                                    </label>
                                    <input v-model="filters1.startDate" type="datetime-local" id="start-date-time"
                                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                </div>

                                <div class="w-full sm:w-auto">
                                    <label for="end-date-time"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Ngày kết thúc
                                    </label>
                                    <input v-model="filters1.endDate" type="datetime-local" id="end-date-time"
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
            <!-- biểu đồ  -->

            <div v-if="salesData.length">
                <h2>Dữ liệu bán ra theo số lượng từng sản phẩm </h2>
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th class="px-6 py-3  dark:bg-gray-800">Mã sản phẩm</th>
                            <th class="px-6 py-3 ">Tên sản phẩm</th>
                            <th class="px-6 py-3 dark:bg-gray-800">Số lượng bán ra</th>
                        </tr>
                    </thead>
                    <tbody class="border-b border-gray-200 dark:border-gray-700">
                        <tr v-for="item in salesData" :key="item.productId">
                            <td>{{ item.productId }}</td>
                            <td>{{ item.productName ? item.productName : 'Sản phẩm chưa đặt tên ' }}</td>
                            <td>{{ item.totalQuantity }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>



        </div>
    </div>
</template>
<script>
import reportService from "@/services/reportService";
import { formatCurrency, timeAgo } from '@/utils/utils';
import { Notyf } from 'notyf';
import Button from '@/components/button.vue';
import accountService from "@/services/accountService";
import { mapActions } from 'vuex';

export default {
    name: 'reportView',
    components: {
        Button
    },
    data() {
        return {
            salesData: [],
            revenue: 0,
            accounts: {},
            revenueList: [],
            months: [], // Tên tháng
            loading: false,
            filters: {
                limit: 10,
                page: 0,
                sortField: 'id',
                sortDirection: 'desc',
                timeRange: '',  // Thêm trường này để xử lý khoảng thời gian
                startDate: '',
                endDate: ''
            },

            filters1: {
                sortField: 'id',
                sortDirection: 'desc',
                timeRange: '',  // Thêm trường này để xử lý khoảng thời gian
                startDate: '',
                endDate: ''
            },
        }
    },
    async mounted() {
        this.loadAccounts();
        this.fetchTotalRevenue();
        this.fetchSalesData();
        const revenueData = await this.fetchLast10MonthsRevenue();
        this.revenueList = revenueData;
        this.months = this.getLast10Months();
    },
    methods: {
        ...mapActions({
            logoutUser: 'logout'
        }),
        timeAgo,
        formatCurrency,
        applyFilters() {
            let appliedFilters = { ...this.filters };

            // Xử lý tuỳ chọn thời gian
            if (appliedFilters.timeRange) {

                const now = new Date();
                let startDate, endDate;

                switch (appliedFilters.timeRange) {
                    case 'today':
                        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                        endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
                        break;
                    case 'yesterday':
                        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
                        endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 23, 59, 59);
                        break;
                    case 'this_week':
                        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay()); // Bắt đầu từ Chủ Nhật tuần này
                        endDate = new Date(now.getFullYear(), now.getMonth(), startDate.getDate() + 6, 23, 59, 59); // Kết thúc vào thứ Bảy tuần này
                        break;
                    case 'last_week':
                        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() - 7); // Bắt đầu từ Chủ Nhật tuần trước
                        endDate = new Date(now.getFullYear(), now.getMonth(), startDate.getDate() + 6, 23, 59, 59); // Kết thúc vào thứ Bảy tuần trước
                        break;
                    case 'this_month':
                        startDate = new Date(now.getFullYear(), now.getMonth(), 1); // Bắt đầu từ đầu tháng này
                        endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59); // Kết thúc vào cuối tháng này
                        break;
                    case 'last_month':
                        startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1); // Bắt đầu từ đầu tháng trước
                        endDate = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59); // Kết thúc vào cuối tháng trước
                        break;
                }
                if (startDate) {
                    appliedFilters.startDate = startDate.toISOString().slice(0, 19);
                }
                if (endDate) {
                    appliedFilters.endDate = endDate.toISOString().slice(0, 19);
                }
            }

            if (appliedFilters.startDate) {
                appliedFilters.startDate = new Date(appliedFilters.startDate).toISOString().slice(0, 19); // Chuyển đổi thành định dạng yyyy-MM-ddThh:mm:ss
            } else {
                delete appliedFilters.startDate;
            }

            if (appliedFilters.endDate) {
                appliedFilters.endDate = new Date(appliedFilters.endDate).toISOString().slice(0, 19); // Chuyển đổi thành định dạng yyyy-MM-ddThh:mm:ss
            } else {
                delete appliedFilters.endDate;
            }

            if (!appliedFilters.statusId) {
                delete appliedFilters.statusId;
            }

            this.filters = appliedFilters;
            this.fetchTotalRevenue();
        },
        applyFilters1() {
            let appliedFilters = { ...this.filters1 };

            // Xử lý tuỳ chọn thời gian
            if (appliedFilters.timeRange) {

                const now = new Date();
                let startDate, endDate;

                switch (appliedFilters.timeRange) {
                    case 'today':
                        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                        endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
                        break;
                    case 'yesterday':
                        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
                        endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 23, 59, 59);
                        break;
                    case 'this_week':
                        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay()); // Bắt đầu từ Chủ Nhật tuần này
                        endDate = new Date(now.getFullYear(), now.getMonth(), startDate.getDate() + 6, 23, 59, 59); // Kết thúc vào thứ Bảy tuần này
                        break;
                    case 'last_week':
                        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() - 7); // Bắt đầu từ Chủ Nhật tuần trước
                        endDate = new Date(now.getFullYear(), now.getMonth(), startDate.getDate() + 6, 23, 59, 59); // Kết thúc vào thứ Bảy tuần trước
                        break;
                    case 'this_month':
                        startDate = new Date(now.getFullYear(), now.getMonth(), 1); // Bắt đầu từ đầu tháng này
                        endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59); // Kết thúc vào cuối tháng này
                        break;
                    case 'last_month':
                        startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1); // Bắt đầu từ đầu tháng trước
                        endDate = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59); // Kết thúc vào cuối tháng trước
                        break;
                }
                if (startDate) {
                    appliedFilters.startDate = startDate.toISOString().slice(0, 19);
                }
                if (endDate) {
                    appliedFilters.endDate = endDate.toISOString().slice(0, 19);
                }
            }

            if (appliedFilters.startDate) {
                appliedFilters.startDate = new Date(appliedFilters.startDate).toISOString().slice(0, 19); // Chuyển đổi thành định dạng yyyy-MM-ddThh:mm:ss
            } else {
                delete appliedFilters.startDate;
            }

            if (appliedFilters.endDate) {
                appliedFilters.endDate = new Date(appliedFilters.endDate).toISOString().slice(0, 19); // Chuyển đổi thành định dạng yyyy-MM-ddThh:mm:ss
            } else {
                delete appliedFilters.endDate;
            }

            if (!appliedFilters.statusId) {
                delete appliedFilters.statusId;
            }

            this.filters1 = appliedFilters;
            this.fetchSalesData();
        },

        async loadAccounts() {
            try {
                var notyf = new Notyf();
                var resp = await accountService.getAccountsList(this.$store);
                this.accounts = resp.data.data;
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    notyf.error("có lỗi xảy ra")
                    await this.logoutUser();
                    this.$router.push('/login?session_expired=true');
                } else {
                    notyf.error("có lỗi xảy ra")
                }
            }
        },
        async fetchSalesData() {
            try {
                this.salesData = await reportService.getProductSales(this.$store, this.filters1);
            } catch (error) {
                console.error('Error fetching sales data:', error);
            }
        },
        async fetchTotalRevenue() {
            this.loading = true;
            try {
                this.revenue = await reportService.totalRevenue(this.$store, this.filters);
            } catch (error) {
                await this.logoutUser();
                this.$router.push('/login?session_expired=true');
                console.error(error);
            } finally {
                this.loading = false;
            }
        },
        async fetchLast10MonthsRevenue() {
            try {
                const now = new Date();
                const revenueList = [];

                for (let i = 0; i < 10; i++) {
                    const startDate = new Date(now.getFullYear(), now.getMonth() - i, 1);
                    const endDate = new Date(now.getFullYear(), now.getMonth() - i + 1, 0, 23, 59, 59);

                    const formattedStartDate = startDate.toISOString().slice(0, 19);
                    const formattedEndDate = endDate.toISOString().slice(0, 19);

                    const revenue = await reportService.totalRevenue(this.$store, {
                        startDate: formattedStartDate,
                        endDate: formattedEndDate
                    });

                    revenueList.push(revenue);
                }

                return revenueList;
            } catch (error) {
                console.error('Error fetching revenue:', error);
                return [];
            }
        },

        getLast10Months() {
            const now = new Date();
            const months = [];
            for (let i = 0; i < 10; i++) {
                const month = new Date(now.getFullYear(), now.getMonth() - i, 1);
                months.push(month.toLocaleString('default', { month: 'short', year: 'numeric' }));
            }
            return months.reverse();
        },
        calculateBarHeight(revenue) {
            if (this.revenueList.length === 0) return '0%'; // Tránh lỗi nếu mảng doanh thu rỗng
            const maxRevenue = Math.max(...this.revenueList); // Doanh thu cao nhất
            const barHeight = (revenue / maxRevenue) * 100; // Tính tỷ lệ phần trăm
            return barHeight + '%'; // Trả về giá trị phần trăm
        },



    }

}
</script>