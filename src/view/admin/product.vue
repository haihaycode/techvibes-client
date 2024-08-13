<template>
    <div class="p-4 sm:ml-64">
        <div id="main-content"
            class="relative w-full h-full overflow-y-auto overflow-x-hidden bg-gray-50 lg:ml-64 dark:bg-gray-900 mt-14">
            <main>
                <!-- bộ lọc -->
                <div
                    class=" bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
                    <div class="w-full mb-1">
                        <div class="mb-4">
                            <!-- breakcrum -->
                            <nav class="flex mb-5" aria-label="Breadcrumb">
                                <ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                                    <li class="inline-flex items-center">
                                        <a href="#"
                                            class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                                            <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                                                </path>
                                            </svg>
                                            Trang chủ
                                        </a>
                                    </li>
                                    <li>
                                        <div class="flex items-center">
                                            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                            <a href="#"
                                                class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">Quản
                                                lý</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="flex items-center">
                                            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="ml-1 text-gray-400 md:ml-2 dark:text-gray-500"
                                                aria-current="page"> Quản lý sản phẩm</span>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div
                            class="flex flex-col sm:flex-row sm:items-center sm:justify-between md:divide-x md:divide-gray-100 dark:divide-gray-700">
                            <form
                                class="flex flex-col sm:flex-row sm:items-center space-y-4 md:space-x-2 sm:space-y-0 sm:space-x-2 w-full sm:pr-3"
                                @submit.prevent="applyFilters">

                                <div class="w-full sm:w-auto">
                                    <label for="products-search"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Tìm kiếm sản phẩm
                                    </label>
                                    <input type="text" v-model="product.filters.keyword" id="products-search"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Tìm kiếm sản phẩm">
                                </div>

                                <div class="w-full sm:w-auto">
                                    <label for="availability-select"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Trạng thái
                                    </label>
                                    <select id="availability-select" v-model="product.filters.available"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="" selected>-- không xét</option>
                                        <option value="true">Kích hoạt</option>
                                        <option value="false">Không kích hoạt</option>
                                    </select>
                                </div>

                                <div class="w-full sm:w-auto">
                                    <label for="category-select"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Danh mục
                                    </label>
                                    <select id="category-select" v-model="product.filters.categoryId"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="" selected>-- không xét</option>
                                        <option v-for="(c, i) in category.list" :key="i" :value="c.id">
                                            {{ c.name }}
                                        </option>
                                    </select>
                                </div>

                                <div class="w-full sm:w-auto">
                                    <label for="available-category-select"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        TT danh mục
                                    </label>
                                    <select id="available-category-select" v-model="product.filters.availableCategory"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="" selected>-- không xét</option>
                                        <option value="true">Kích hoạt</option>
                                        <option value="false">Không kích hoạt</option>
                                    </select>
                                </div>

                                <div
                                    class="flex flex-col sm:flex-row sm:items-center sm:space-x-2 md:space-x-2 w-full sm:w-auto">
                                    <div class="w-full sm:w-auto">
                                        <label for="start-date-time"
                                            class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Ngày bắt đầu
                                        </label>
                                        <input v-model="product.filters.startDate" type="datetime-local"
                                            id="start-date-time"
                                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    </div>

                                    <div class="w-full sm:w-auto">
                                        <label for="end-date-time"
                                            class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Ngày kết thúc
                                        </label>
                                        <input v-model="product.filters.endDate" type="datetime-local"
                                            id="end-date-time"
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
                                        <input v-model="product.filters.minPrice" type="number" id="min-price"
                                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="w-full sm:w-auto">
                                        <label for="max-price"
                                            class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Giá tối đa
                                        </label>
                                        <input v-model="product.filters.maxPrice" type="number" id="max-price"
                                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    </div>
                                </div>

                                <div class="w-full sm:w-auto">
                                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        <i class="fad fa-file-search"></i>
                                    </label>
                                    <button type="submit"
                                        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                        Lọc
                                    </button>
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
                                <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                                    <thead class="bg-gray-100 dark:bg-gray-700">
                                        <tr class="">
                                            <th scope="col" colspan="1"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                STT
                                            </th>
                                            <th @click="changeSort('id')" scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                <i v-if="product.filters.sortField === 'id'" :class="{
                                    'fas': true,
                                    'fa-sort-amount-up': product.filters.sortDirection === 'asc',
                                    'fa-sort-amount-down': product.filters.sortDirection === 'desc'
                                }">
                                                </i> Mã sản phẩm

                                            </th>
                                            <th @click="changeSort('name')" scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                <i v-if="product.filters.sortField === 'name'" :class="{
                                    'fas': true,
                                    'fa-sort-amount-up': product.filters.sortDirection === 'asc',
                                    'fa-sort-amount-down': product.filters.sortDirection === 'desc'
                                }">
                                                </i>
                                                Tiêu đề sản phẩm
                                            </th>
                                            <th @click="changeSort('price')" scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                <i v-if="product.filters.sortField === 'price'" :class="{
                                    'fas': true,
                                    'fa-sort-amount-up': product.filters.sortDirection === 'asc',
                                    'fa-sort-amount-down': product.filters.sortDirection === 'desc'
                                }">
                                                </i>
                                                Giá / 1
                                            </th>
                                            <th @click="changeSort('quantity')" scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                <i v-if="product.filters.sortField === 'quantity'" :class="{
                                    'fas': true,
                                    'fa-sort-amount-up': product.filters.sortDirection === 'asc',
                                    'fa-sort-amount-down': product.filters.sortDirection === 'desc'
                                }">
                                                </i> Số lượng hiện có

                                            </th>
                                            <th @click="changeSort('discount')" scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                <i v-if="product.filters.sortField === 'discount'" :class="{
                                    'fas': true,
                                    'fa-sort-amount-up': product.filters.sortDirection === 'asc',
                                    'fa-sort-amount-down': product.filters.sortDirection === 'desc'
                                }">
                                                </i> Giảm giá (%)
                                            </th>
                                            <th @click="changeSort('descriptionSort')" scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                <i v-if="product.filters.sortField === 'descriptionSort'" :class="{
                                    'fas': true,
                                    'fa-sort-amount-up': product.filters.sortDirection === 'asc',
                                    'fa-sort-amount-down': product.filters.sortDirection === 'desc'
                                }">
                                                </i>
                                                Mô tả ngắn / xem thông tin mô tả
                                            </th>
                                            <th @click="changeSort('createDate')" scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                <i v-if="product.filters.sortField === 'createDate'" :class="{
                                    'fas': true,
                                    'fa-sort-amount-up': product.filters.sortDirection === 'asc',
                                    'fa-sort-amount-down': product.filters.sortDirection === 'desc'
                                }">
                                                </i> Thời gian tạo và cập nhật
                                            </th>
                                            <th @click="changeSort('category.id')" scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                <i v-if="product.filters.sortField === 'category.id'" :class="{
                                    'fas': true,
                                    'fa-sort-amount-up': product.filters.sortDirection === 'asc',
                                    'fa-sort-amount-down': product.filters.sortDirection === 'desc'
                                }">
                                                </i> Danh mục / (id)
                                            </th>
                                            <th scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Giá sau khi tính cả giảm giá
                                            </th>
                                            <th scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Ảnh tiêu đề sản phẩm
                                            </th>
                                            <th @click="changeSort('available')" scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Thao tác / <i v-if="product.filters.sortField === 'available'" :class="{
                                    'fas': true,
                                    'fa-sort-amount-up': product.filters.sortDirection === 'asc',
                                    'fa-sort-amount-down': product.filters.sortDirection === 'desc'
                                }">
                                                </i> Trạng thái
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody
                                        class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                        <!-- 11 cột -->
                                        <tr v-for="(p, i) in product.list" :key="i"
                                            class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <td>
                                                <div
                                                    class="text-base text-center font-semibold text-gray-900 dark:text-white">
                                                    {{ i + 1 }}
                                                </div>
                                            </td>
                                            <td colspan="1"
                                                class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                <div
                                                    class="text-base font-mono text-gray-900 whitespace-nowrap dark:text-white">
                                                    {{ p.id }}
                                                </div>
                                            </td>
                                            <td
                                                class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                                {{ p.name }}
                                            </td>
                                            <td
                                                class="max-w-sm p-4 overflow-hidden text-xl font-normal text-red-500 text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                                {{ formatCurrency(p.price) }}
                                            </td>
                                            <td
                                                class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                                {{ p.quantity }}
                                            </td>
                                            <td
                                                class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500  truncate xl:max-w-xs dark:text-gray-400">

                                                {{ p.discount }}
                                            </td>
                                            <td
                                                class="flex max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500  truncate xl:max-w-xs dark:text-gray-400">
                                                <div>
                                                    {{ p.descriptionSort }}
                                                </div>
                                                <div>
                                                    <button>Xem thông tin thêm</button>
                                                </div>
                                            </td>
                                            <td
                                                class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500  truncate xl:max-w-xs dark:text-gray-400">
                                                {{ timeAgo(p.createDate) ? timeAgo(p.createDate) : 'chưa cập nhật' }} -
                                                {{
                                    timeAgo(p.updateDate) ?
                                        timeAgo(p.updateDate) : 'chưa cập nhật' }}
                                            </td>
                                            <td
                                                class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500  truncate xl:max-w-xs dark:text-gray-400">
                                                {{ p.category.name }} &nbsp; ( {{ p.category.id }} )
                                            </td>
                                            <td
                                                class="max-w-sm p-4 overflow-hidden text-xl font-normal  text-red-500 text-gray-500  truncate xl:max-w-xs dark:text-gray-400">
                                                <p>{{ formatCurrency(p.price - (p.price * (p.discount
                                    /
                                    100))) }} VNĐ</p>
                                            </td>
                                            <td
                                                class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500  truncate xl:max-w-xs dark:text-gray-400">
                                                <img v-if="p.image" class=" w-10 h-10 rounded-full"
                                                    :src="getPhoto(p.image)" alt="user photo">
                                                <img v-else class=" w-10 h-10 rounded-full"
                                                    src="https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg"
                                                    alt="product photo">
                                            </td>

                                            <td
                                                class="max-w-sm p-4 flex overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                                <button type="button" @click="modalUpdate(), getProductById(p.id)"
                                                    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Cập
                                                    nhật</button>
                                                <div
                                                    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                                    <label :for="'toggleSwitch' + p.id"
                                                        class="flex items-center cursor-pointer">
                                                        <div class="relative toggle-switch">
                                                            <input type="checkbox" :id="'toggleSwitch' + p.id"
                                                                @click="toggleAvailability(p.id)" v-model="p.available"
                                                                class="sr-only" />
                                                            <div class="toggle-slider"></div>
                                                        </div>
                                                        <div class="ml-3 font-medium"
                                                            :class="p.available ? 'text-green-500' : 'text-gray-700'">
                                                            {{ p.available ? 'Kích Hoạt' : 'Khóa ' }}
                                                        </div>
                                                    </label>
                                                </div>
                                                <button type="button" @click="exportProductToExcelById(p.id)"
                                                    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                                    <i v-if="!product.export.loading"
                                                        class="fad fa-file-excel text-2xl text-green-700"></i>
                                                    <div v-else role="status">
                                                        <svg aria-hidden="true"
                                                            class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                                                            viewBox="0 0 100 101" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                                fill="currentColor" />
                                                            <path
                                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                                fill="currentFill" />
                                                        </svg>
                                                        <span class="sr-only">Loading...</span>
                                                    </div>
                                                </button>


                                            </td>


                                        </tr>
                                        <SkeletonTable :columns="10" :loading="product.loading" :item="4" />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- phân trang và các tùy chỉnh -->
                <div
                    class="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex items-center mb-4 sm:mb-0">
                        <a @click.prevent="prevPage"
                            class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>

                        <span
                            class="border border-1 mx-2 rounded-lg text-gray-900 text-sm py-2 px-3 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{{
                                    product.filters.page + 1 }} / {{ product.filters.scope ? product.filters.scope.totalPages
                                    : "" }}
                        </span>
                        <form class="max-w-sm mx-auto flex items-center">

                            <select id="limit" v-model="product.filters.limit" @change="loadProducts"
                                class="border border-1 mx-2 rounded-lg text-gray-900 text-sm  block w-full ">
                                <option value="5">5 Đối tượng</option>
                                <option value="10">10 Đối tượng</option>
                                <option value="15">15 Đối tượng</option>
                                <option value="20">20 Đối tượng</option>
                                <option value="25">25 Đối tượng</option>
                            </select>
                        </form>
                        <button data-tooltip-target="tooltip-hover" data-tooltip-trigger="hover" type="button"
                            @click="exportProductsToExcel"
                            class="border border-2 hover:bg-gray-100 mx-2 rounded-lg text-gray-900 ">

                            <svg v-if="!this.product.export.loading" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="100" height="40" viewBox="0 0 48 48">
                                <path fill="#4CAF50"
                                    d="M41,10H25v28h16c0.553,0,1-0.447,1-1V11C42,10.447,41.553,10,41,10z"></path>
                                <path fill="#FFF"
                                    d="M32 15H39V18H32zM32 25H39V28H32zM32 30H39V33H32zM32 20H39V23H32zM25 15H30V18H25zM25 25H30V28H25zM25 30H30V33H25zM25 20H30V23H25z">
                                </path>
                                <path fill="#2E7D32" d="M27 42L6 38 6 10 27 6z"></path>
                                <path fill="#FFF"
                                    d="M19.129,31l-2.411-4.561c-0.092-0.171-0.186-0.483-0.284-0.938h-0.037c-0.046,0.215-0.154,0.541-0.324,0.979L13.652,31H9.895l4.462-7.001L10.274,17h3.837l2.001,4.196c0.156,0.331,0.296,0.725,0.42,1.179h0.04c0.078-0.271,0.224-0.68,0.439-1.22L19.237,17h3.515l-4.199,6.939l4.316,7.059h-3.74V31z">
                                </path>
                            </svg>

                            <svg v-else aria-hidden="true"
                                class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 px-3"
                                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill" />
                            </svg>




                        </button>
                        <div id="tooltip-hover" role="tooltip"
                            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Xuất Excel
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>


                        <a @click.prevent="nextPage"
                            class="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>



                    </div>
                    <div class="flex items-center space-x-3">
                        <button @click="modalUpdate"
                            class=" px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            type="button">
                            <i class="fal fa-folder-plus"></i> Thêm sản phẩm
                        </button>

                        <a @click.prevent="prevPage"
                            class="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            <svg class="w-5 h-5 mr-1 -ml-1" fill=" currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            Trước
                        </a>
                        <a @click.prevent="nextPage"
                            class="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Sau
                            <svg class="w-5 h-5 ml-1 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>


                    </div>
                </div>
                <!--  crud -->
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
                                {{ product.productEditor.object.id ? 'Cập nhật sản phẩm : ' +
                                    product.productEditor.object.id :
                                    'Tạo mới sản phẩm' }}
                            </h3>
                            <button type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                @click="modalUpdate">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <!-- Modal body -->
                        <div class="p-4 md:p-5 space-y-4">
                            <DefaultSkeleton :loading="product.productEditor.loading" />
                            <form v-if="!product.productEditor.loading" @submit.prevent="newOrUpdateProduct"
                                enctype="multipart/form-data">


                                <!-- Tên sản phẩm -->
                                <div>
                                    <label for="name" class="block text-sm font-medium text-gray-700">Tên sản
                                        phẩm</label>
                                    <input v-model="product.productEditor.object.name" type="text" id="name" name="name"
                                        class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        required />
                                </div>

                                <!-- Giá -->
                                <div>
                                    <label for="price" class="block text-sm font-medium text-gray-700">Giá*
                                        (VNĐ)</label>
                                    <input v-model="product.productEditor.object.price" type="number" id="price"
                                        name="price"
                                        class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        required />
                                </div>



                                <!-- Mô tả ngắn gọn -->
                                <div>
                                    <label for="descriptionSort" class="block text-sm font-medium text-gray-700">Mô tả
                                        ngắn gọn (Không khả dụng HTML)</label>
                                    <textarea v-model="product.productEditor.object.descriptionSort"
                                        id="descriptionSort" name="descriptionSort"
                                        class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        required></textarea>
                                </div>

                                <!-- ID danh mục -->
                                <div>
                                    <label for="categoryId" class="block text-sm font-medium text-gray-700">ID danh
                                        mục</label>

                                    <select id="category-select" v-model="product.productEditor.object.category.id"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option v-for="(c, i) in category.list" :key="i" :value="c.id">
                                            {{ c.name }}
                                        </option>
                                    </select>
                                </div>

                                <!-- Số lượng -->
                                <div>
                                    <label for="quantity" class="block text-sm font-medium text-gray-700">Số
                                        lượng</label>
                                    <input v-model="product.productEditor.object.quantity" type="number" id="quantity"
                                        name="quantity"
                                        class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        required />
                                </div>

                                <!-- Giảm giá -->
                                <div>
                                    <label for="discount" class="block text-sm font-medium text-gray-700">Giảm
                                        giá</label>
                                    <input v-model="product.productEditor.object.discount" type="number" id="discount"
                                        name="discount"
                                        class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        required />
                                </div>

                                <div>
                                    <label for="description" class="block text-sm font-medium text-gray-700">Ước tính
                                        giá trị thực tế</label>
                                    <div
                                        class="mt-1 p-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                        {{ formatCurrency(product.productEditor.object.price -
                                    (product.productEditor.object.price * (product.productEditor.object.discount
                                        /
                                        100))) }}</div>
                                </div>
                                <!-- Hình ảnh -->
                                <div class="mb-4">
                                    <label for="file" class="block text-sm font-medium text-gray-700">Hình ảnh</label>
                                    <input type="file" id="file" @change="handleFileChange"
                                        class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                </div>

                                <!-- Mô tả -->
                                <div>
                                    <label for="description" class="block text-sm font-medium text-gray-700">Mô
                                        tả (HTML)</label>
                                    <CKEditorComponent v-model="product.productEditor.object.description"
                                        id="description" name="description"
                                        class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        required></CKEditorComponent>
                                </div>

                                <!-- Nút gửi -->
                                <button type="submit"
                                    class="mt-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">
                                    {{ product.productEditor.object.id ? 'Cập nhật' : 'Thêm' }}
                                </button>
                            </form>

                            <div>
                                <form @submit.prevent="confirmUpload">
                                    <div class="mb-4">
                                        <label for="file" class="block text-sm font-medium text-gray-700">Upload Excel
                                            File</label>
                                        <input type="file" id="file" ref="fileInput" @change="handleFileChangeImport"
                                            class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                    </div>

                                    <div v-if="product.import.xmlContent">
                                        <h3 class="text-lg font-medium text-gray-900">File Preview:</h3>
                                        <pre class="mt-2 p-2 bg-gray-100 border border-gray-300 rounded"
                                            v-html="product.import.xmlContent"></pre>
                                    </div>

                                    <div v-if="product.import.file">
                                        <button type="button" @click="confirmUpload"
                                            class="mt-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">
                                            Cập nhật
                                        </button>
                                        <button type="button" @click="cancelUpload"
                                            class="mt-3 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2">
                                            Hủy
                                        </button>
                                    </div>

                                    <p v-if="product.import.message">{{ product.import.message }}</p>
                                </form>
                            </div>
                        </div>
                        <!-- Modal footer -->
                        <div class="p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button @click="modalUpdate" type="button"
                                class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
<script>
import productService from '@/services/productService';
import categoryService from '@/services/categoryService';
import { Notyf } from 'notyf';
import SkeletonTable from '@/components/SkeletonTable.vue';
import DefaultSkeleton from '@/components/defaultSekeleton.vue';
import { formatCurrency, timeAgo } from '@/utils/utils';
import CKEditorComponent from '@/components/CKEditor.vue';
import { readXMLFile } from '@/utils/xmlService';
import * as Yup from 'yup';
export default {
    name: 'productView',
    components: {
        CKEditorComponent,
        SkeletonTable,
        DefaultSkeleton
    },
    data() {
        const schema = Yup.object().shape({
            name: Yup.string().required('Tên sản phẩm là bắt buộc'),
            price: Yup.number().required('Giá sản phẩm là bắt buộc').positive('Giá phải là số dương'),
            description: Yup.string().required('Mô tả là bắt buộc'),
            descriptionSort: Yup.string().required('Mô tả ngắn gọn là bắt buộc'),
            categoryId: Yup.number().required('Danh mục là bắt buộc').positive('ID danh mục phải là số dương'),
            quantity: Yup.number().required('Số lượng là bắt buộc').positive('Số lượng phải là số dương'),
            discount: Yup.number().required('Giảm giá là bắt buộc').min(0, 'Giảm giá không được nhỏ hơn 0').max(100, 'Giảm giá không được lớn hơn 100')
        });
        return {
            schema,
            isModalVisible: false,
            product: {
                list: [],
                loading: false,
                filters: {
                    keyword: '',
                    page: 0,
                    limit: 5,
                    scope: "",
                    sortField: 'createDate',
                    sortDirection: 'desc'
                },
                export: {
                    loading: false,
                },
                import: {
                    file: null,
                    xmlContent: '',
                    message: '',
                },
                productEditor: {
                    loading: false,
                    object: {
                        id: '',
                        name: '',                // String
                        price: 0,                // Long
                        description: '',         // String
                        descriptionSort: '',     // String
                        categoryId: 0,           // Long
                        quantity: 0,             // Long
                        discount: 0,
                        file: null,
                        category: {
                            id: 1,
                        }             // Long
                    }
                }
            },
            category: {
                loading: false,
                list: [],
                filters: {
                    limit: 1000
                }
            }

        }
    },
    mounted() {
        this.loadProducts();
        this.loadCategory();
    },
    methods: {
        timeAgo,
        formatCurrency,
        getPhoto(photo) {
            return "http://localhost:8080/api/public/product/image/" + photo;
        },
        resetForm() {
            this.product.productEditor.object = {
                id: '',
                name: '',                // String
                price: 0,                // Long
                description: '',         // String
                descriptionSort: '',     // String
                categoryId: null,           // Long
                quantity: 0,             // Long
                discount: 0,
                category: {
                    id: 1,
                }              // Long
            }
        },
        async loadCategory() {
            this.category.loading = true;
            var notyf = new Notyf();
            try {
                var resp = await categoryService.getCategory(this.$store, this.category.filters);
                this.category.list = resp.data.content;
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    notyf.error('Bạn chưa đăng nhập. Vui lòng đăng nhập lại.');
                    await this.logoutUser();
                    this.$router.push('/login?session_expired=true');
                } else {
                    notyf.error(error.response?.data?.message || 'Đã xảy ra lỗi');
                }
            } finally {
                this.category.loading = false;
            }
        },
        async getProductById(id) {
            this.product.productEditor.loading = true;
            var notyf = new Notyf();
            try {
                var resp = await productService.getProductById(this.$store, id);
                this.product.productEditor.object = resp.data;
                console.log(this.product.productEditor.object);
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    notyf.error('Bạn chưa đăng nhập. Vui lòng đăng nhập lại.');
                } else {
                    notyf.error(error.response?.data?.message || 'Đã xảy ra lỗi');
                }
            } finally {
                this.product.productEditor.loading = false;
            }
        },
        modalUpdate() {
            console.log(this.product.productEditor.object);
            if (this.isModalVisible) {
                this.resetForm();
            }
            this.isModalVisible = !this.isModalVisible;
        },
        handleFileChange(event) {
            this.product.productEditor.object.file = event.target.files[0];
        },
        applyFilters() {
            let appliedFilters = { ...this.product.filters };
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
            if (!appliedFilters.available) {
                delete appliedFilters.available;
            }
            if (!appliedFilters.availableCategory) {
                delete appliedFilters.availableCategory;
            }
            if (!appliedFilters.categoryId) {
                delete appliedFilters.categoryId;
            }
            if (!appliedFilters.minPrice) {
                delete appliedFilters.minPrice;
            }
            if (!appliedFilters.maxPrice) {
                delete appliedFilters.maxPrice;
            }
            this.product.filters = appliedFilters;
            this.loadProducts();
        },
        async loadProducts() {
            this.product.loading = true;
            var notyf = new Notyf();
            try {
                var resp = await productService.getAllProducts(this.$store, this.product.filters);
                this.product.list = resp.data.content;
                this.product.filters.scope = resp.data;
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    notyf.error('Bạn chưa đăng nhập. Vui lòng đăng nhập lại.');
                    await this.logoutUser();
                    this.$router.push('/login?session_expired=true');
                } else {
                    notyf.error(error.response?.data?.message || 'Đã xảy ra lỗi');
                }
            } finally {
                this.product.loading = false;
            }
        },
        changeSort(field) {
            if (this.product.filters.sortField === field) {
                this.product.filters.sortDirection = this.product.filters.sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                this.product.filters.sortField = field;
                this.product.filters.sortDirection = 'asc';
            }
            this.product.filters.sort = this.product.filters.sortField + ',' + this.product.filters.sortDirection;
            this.loadProducts();
        },
        prevPage() {
            if (this.product.filters.page > 0) {
                this.product.filters.page--;
                this.loadProducts();
            }
        },
        nextPage() {
            const maxPage = Math.ceil(this.product.filters.scope.totalElements / this.product.filters.limit);
            if (this.product.filters.page < maxPage - 1) {
                this.product.filters.page++;
                this.loadProducts();
            }
        },
        async exportProductsToExcel() {
            this.product.export.loading = true;
            const notyf = new Notyf();
            try {
                const data = await productService.exportProductsToExcel(this.$store);
                const url = window.URL.createObjectURL(new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'products.xlsx');
                document.body.appendChild(link);
                link.click();
                notyf.success('Xuất excel thành công');
            } catch (error) {
                notyf.error('Có lỗi xảy ra');
            } finally {
                this.product.export.loading = false;
            }
        },
        async exportProductToExcelById(id) {
            this.product.export.loading = true;
            const notyf = new Notyf();
            try {
                const data = await productService.exportProductToExcelById(this.$store, id);
                const url = window.URL.createObjectURL(new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'category_' + id + '.xlsx');
                document.body.appendChild(link);
                link.click();
                notyf.success('Xuất excel thành công');
            } catch (error) {
                notyf.error('Có lỗi xảy ra');
            } finally {
                this.product.export.loading = false;
            }
        },
        async toggleAvailability(id) {
            var notyf = new Notyf();
            try {
                var resp = await productService.toggleAvailability(this.$store, id);
                notyf.success(resp.message);
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    notyf.error('Bạn chưa đăng nhập. Vui lòng đăng nhập lại.' + resp);
                } else {
                    notyf.error(error.response?.data?.message || 'Đã xảy ra lỗi');
                }
            }
        },
        async newOrUpdateProduct() {
            if (this.product.productEditor.object.id) {
                this.product.productEditor.loading = true;
                let notyf = new Notyf();
                try {
                    let resp = await productService.updateProduct(this.$store, this.product.productEditor.object);
                    notyf.success(resp);
                } catch (error) {
                    if (error.response && error.response.status === 403) {
                        notyf.error('Bạn chưa đăng nhập. Vui lòng đăng nhập lại.');
                    } else {
                        console.log(error)
                        notyf.error(error.data);
                    }
                } finally {
                    this.product.productEditor.loading = false;
                    this.resetForm();
                    this.modalUpdate();
                    this.loadProducts();
                }
            } else {
                let notyf = new Notyf();
                this.product.productEditor.loading = true;
                try {
                    let resp = await productService.createProduct(this.$store, this.product.productEditor.object);
                    notyf.success(resp);
                } catch (error) {
                    if (error.response && error.response.status === 403) {
                        notyf.error('Bạn chưa đăng nhập. Vui lòng đăng nhập lại.');
                    } else {
                        notyf.error(error);
                    }
                } finally {
                    this.product.productEditor.loading = false;
                    this.resetForm();
                    this.modalUpdate();
                    this.loadProducts();
                }
            }
        },
        async handleFileChangeImport(event) {
            this.product.import.file = event.target.files[0];
            try {
                const xml = await readXMLFile(this.product.import.file);
                this.product.import.xmlContent = new XMLSerializer().serializeToString(xml.documentElement);
                this.product.import.message = '';
            } catch (error) {
                console.error(error);
                this.product.import.message = 'Failed to read file: ' + error.message;
                this.product.import.xmlContent = ''; // Clear the previous content in case of error
            }
        },
        async confirmUpload() {
            if (!this.product.import.file) {
                this.product.import.message = 'Please select a file first';
                return;
            }

            try {
                const response = await productService.importExcel(this.$store, this.product.import.file);
                this.product.import.message = response;
                this.product.import.file = null;
                this.product.import.xmlContent = '';
            } catch (error) {
                console.error(error);
                this.message = 'Failed to upload file';
            }
        },
        cancelUpload() {
            this.product.import.file = null;
            this.product.import.xmlContent = '';
            this.product.import.message = 'Upload canceled';
        },
    },
}

</script>

<style scoped>
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

.toggle-switch {
    display: inline-block;
    width: 44px;
    height: 24px;
    position: relative;
}

.toggle-slider {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #ccc;
    border-radius: 24px;
    cursor: pointer;
    transition: background-color 0.2s;

}

.toggle-slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.2s;

}

input:checked+.toggle-slider {
    background-color: #48bb78;
    /* green-500 */
}

input:checked+.toggle-slider:before {
    transform: translateX(20px);
}
</style>