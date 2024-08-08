<template>
    <div class="p-4 sm:ml-64">
        <div id="main-content"
            class="relative w-full h-full overflow-y-auto overflow-x-hidden bg-gray-50 lg:ml-64 dark:bg-gray-900 mt-14">
            <main>
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
                                                aria-current="page"> Quản lý danh mục</span>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div
                            class="flex flex-col sm:flex-row sm:items-center sm:justify-between md:divide-x md:divide-gray-100 dark:divide-gray-700">
                            <form
                                class="flex flex-col sm:flex-row sm:items-center space-y-4 md:space-x-2  sm:space-y-0 sm:space-x-2 w-full sm:pr-3"
                                @submit.prevent="applyFilters">
                                <div class="w-full sm:w-auto">
                                    <input type="text" v-model="category.filters.keyword" id="products-search"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Tìm kiếm danh mục">
                                </div>
                                <div class="w-full sm:w-auto">
                                    <select v-model="category.filters.available"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="" selected>Trạng thái -- không xét</option>
                                        <option value="true">Kích hoạt</option>
                                        <option value="false">Không kích hoạt</option>
                                    </select>
                                </div>
                                <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-2 w-full sm:w-auto">
                                    <div class="w-full sm:w-auto">
                                        <input v-model="category.filters.startDate" type="datetime-local"
                                            id="start-date-time"
                                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="hidden sm:block px-2">
                                        <i class="far fa-long-arrow-right"></i>
                                    </div>
                                    <div class="w-full sm:w-auto">
                                        <input v-model="category.filters.endDate" type="datetime-local"
                                            id="end-date-time"
                                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    </div>
                                </div>
                                <div class="w-full sm:w-auto">
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
                                            <th @click="changeSort('id')" scope="col" colspan="2"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                <i v-if="category.filters.sortField === 'id'" :class="{
                                    'fas': true,
                                    'fa-sort-amount-up': category.filters.sortDirection === 'asc',
                                    'fa-sort-amount-down': category.filters.sortDirection === 'desc'
                                }">
                                                </i> Mã danh mục

                                            </th>
                                            <th @click="changeSort('name')" scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                <i v-if="category.filters.sortField === 'name'" :class="{
                                    'fas': true,
                                    'fa-sort-amount-up': category.filters.sortDirection === 'asc',
                                    'fa-sort-amount-down': category.filters.sortDirection === 'desc'
                                }">
                                                </i>
                                                Tên danh mục
                                            </th>
                                            <th @click="changeSort('description')" scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                <i v-if="category.filters.sortField === 'description'" :class="{
                                    'fas': true,
                                    'fa-sort-amount-up': category.filters.sortDirection === 'asc',
                                    'fa-sort-amount-down': category.filters.sortDirection === 'desc'
                                }">
                                                </i>
                                                Mô tả
                                            </th>
                                            <th @click="changeSort('updateDate')" scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                <i v-if="category.filters.sortField === 'updateDate'" :class="{
                                    'fas': true,
                                    'fa-sort-amount-up': category.filters.sortDirection === 'asc',
                                    'fa-sort-amount-down': category.filters.sortDirection === 'desc'
                                }">
                                                </i> Thời gian tạo / cập nhật

                                            </th>
                                            <th scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                hình ảnh danh mục

                                            </th>
                                            <th scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Thao tác
                                            </th>
                                            <th @click="changeSort('available')" scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                <i v-if="category.filters.sortField === 'available'" :class="{
                                    'fas': true,
                                    'fa-sort-amount-up': category.filters.sortDirection === 'asc',
                                    'fa-sort-amount-down': category.filters.sortDirection === 'desc'
                                }">
                                                </i> Trạng thái
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody
                                        class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">

                                        <tr v-for="(ca, i) in category.list" :key="i"
                                            class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <td>
                                                <div
                                                    class="text-base text-center font-semibold text-gray-900 dark:text-white">
                                                    {{ i + 1 }}
                                                </div>
                                            </td>
                                            <td colspan="2"
                                                class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                <div
                                                    class="text-base font-mono text-gray-900 whitespace-nowrap dark:text-white">
                                                    {{ ca.id }}
                                                </div>
                                            </td>
                                            <td
                                                class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                                {{ ca.name }}
                                            </td>
                                            <td
                                                class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                                <button @click="modalUpdate(), getCategoryById(ca.id)"
                                                    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                                    type="button">

                                                    <i class="fad fa-edit"></i> Xem thông tin chi tiết
                                                </button>
                                            </td>
                                            <td
                                                class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                                {{ ca.createDate ? timeAgo(ca.createDate) : 'Chưa cập nhật' }} / {{
                                    ca.updateDate
                                        ? timeAgo(ca.updateDate) : 'Chưa cập nhật'
                                }}
                                            </td>
                                            <td
                                                class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500  truncate xl:max-w-xs dark:text-gray-400">

                                                <img v-if="ca.image" class=" w-10 h-10 rounded-full"
                                                    :src="getPhoto(ca.image)" alt="user photo">
                                                <img v-else class=" w-10 h-10 rounded-full"
                                                    src="https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg"
                                                    alt="category photo">
                                            </td>
                                            <td class="p-4 space-x-2 whitespace-nowrap flex ">
                                                <button @click="modalUpdate(), getCategoryById(ca.id)"
                                                    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                                    type="button">

                                                    <i class="fad fa-edit"></i> Cập nhật
                                                </button>

                                                <button @click="exportCategoryToExcelById(ca.id)"
                                                    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                                    type="button">
                                                    <i v-if="!category.export.loading"
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
                                            <td class="p-4 space-x-2 whitespace-nowrap">
                                                <div
                                                    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">

                                                    <label :for="'toggleSwitch' + ca.id"
                                                        class="flex items-center cursor-pointer">
                                                        <div class="relative toggle-switch">
                                                            <input type="checkbox" :id="'toggleSwitch' + ca.id"
                                                                @click="toggleAvailability(ca.id)"
                                                                v-model="ca.available" class="sr-only" />
                                                            <div class="toggle-slider"></div>
                                                        </div>
                                                        <div class="ml-3 font-medium"
                                                            :class="ca.available ? 'text-green-500' : 'text-gray-700'">
                                                            {{ ca.available ? 'Kích Hoạt' : 'Khóa ' }}
                                                        </div>
                                                    </label>

                                                </div>
                                            </td>



                                        </tr>
                                        <SkeletonTable :columns="10" :loading="category.loading" :item="4" />
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
                                    category.filters.page + 1 }} / {{ category.filters.scope ? category.filters.scope.totalPages
                                    : "" }}
                        </span>
                        <form class="max-w-sm mx-auto flex items-center">

                            <select id="limit" v-model="category.filters.limit" @change="loadCategory"
                                class="border border-1 mx-2 rounded-lg text-gray-900 text-sm  block w-full ">
                                <option value="5">5 Đối tượng</option>
                                <option value="10">10 Đối tượng</option>
                                <option value="15">15 Đối tượng</option>
                                <option value="20">20 Đối tượng</option>
                                <option value="25">25 Đối tượng</option>
                            </select>
                        </form>
                        <button data-tooltip-target="tooltip-hover" data-tooltip-trigger="hover" type="button"
                            @click="exportCategoryToExcel"
                            class="border border-2 hover:bg-gray-100 mx-2 rounded-lg text-gray-900 ">

                            <svg v-if="!this.category.export.loading" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
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
                            <i class="fal fa-folder-plus"></i> Thêm danh mục
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
                                Cập nhật danh mục # {{ category.newCategory.object.id }}
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
                            <DefaultSkeleton :loading="category.newCategory.loading" />
                            <form v-if="!category.newCategory.loading" @submit.prevent="newOrUpdateCategory"
                                enctype="multipart/form-data">
                                <!-- Tên danh mục -->
                                <div class="mb-4">
                                    <label for="name" class="block text-sm font-medium text-gray-700">Tên danh
                                        mục</label>
                                    <input type="text" id="name" v-model="category.newCategory.object.name"
                                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Nhập tên danh mục" required />
                                </div>

                                <!-- Mô tả -->
                                <div class="mb-4">
                                    <label for="description" class="block text-sm font-medium text-gray-700">Mô
                                        tả</label>
                                    <div>
                                        <CKEditorComponent id="description"
                                            v-model="category.newCategory.object.description"
                                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="Nhập mô tả" rows="4" required>
                                        </CKEditorComponent>
                                    </div>
                                </div>

                                <!-- Hình ảnh -->
                                <div class="mb-4">
                                    <label for="file" class="block text-sm font-medium text-gray-700">Hình ảnh</label>
                                    <input type="file" id="file" @change="handleFileChange"
                                        class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                </div>

                                <!-- Nút gửi -->
                                <button type="submit"
                                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">
                                    {{ category.newCategory.object.id ? 'Cập nhật' : 'Thêm' }}
                                </button>
                            </form>
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
import categoryService from '@/services/categoryService';
import { Notyf } from 'notyf';
import SkeletonTable from '@/components/SkeletonTable.vue';
import DefaultSkeleton from '@/components/defaultSekeleton.vue';
import CKEditorComponent from '@/components/CKEditor.vue';
import { timeAgo } from '@/utils/utils';

export default {
    name: "categoryComponent",
    components: {
        CKEditorComponent,
        SkeletonTable,
        DefaultSkeleton,

    },
    data() {
        return {
            isModalVisible: false,
            category: {
                list: [],
                loading: false,
                filters: {
                    keyword: '',
                    page: 0,
                    limit: 5,
                    scope: "",
                    sortField: 'id',
                    sortDirection: 'desc',

                },
                export: {
                    loading: false,
                },
                newCategory: {
                    loading: false,
                    object: {
                        id: '',
                        name: '',
                        description: '',
                        file: null

                    }
                }
            },

        }
    },
    mounted() {
        this.loadCategory();
    },
    methods: {
        timeAgo,
        getPhoto(photo) {
            return "http://localhost:8080/api/public/category/image/" + photo;
        },
        async loadCategory() {
            this.category.loading = true;
            var notyf = new Notyf();
            try {
                var resp = await categoryService.getCategory(this.$store, this.category.filters);
                this.category.list = resp.data.content;
                this.category.filters.scope = resp.data;
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
        applyFilters() {
            let appliedFilters = { ...this.category.filters };
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
            this.category.filters = appliedFilters;
            this.loadCategory();
        },
        prevPage() {
            if (this.category.filters.page > 0) {
                this.category.filters.page--;
                this.loadCategory();
            }
        },
        nextPage() {
            const maxPage = Math.ceil(this.category.filters.scope.totalElements / this.category.filters.limit);
            if (this.category.filters.page < maxPage - 1) {
                this.category.filters.page++;
                this.loadCategory();
            }
        },
        changeSort(field) {
            if (this.category.filters.sortField === field) {
                this.category.filters.sortDirection = this.category.filters.sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                this.category.filters.sortField = field;
                this.category.filters.sortDirection = 'asc';
            }
            this.category.filters.sort = this.category.filters.sortField + ',' + this.category.filters.sortDirection;
            this.loadCategory();
        },
        async toggleAvailability(id) {
            var notyf = new Notyf();
            try {
                var resp = await categoryService.toggleAvailability(this.$store, id);
                notyf.success(resp.message);
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    notyf.error('Bạn chưa đăng nhập. Vui lòng đăng nhập lại.' + resp);
                } else {
                    notyf.error(error.response?.data?.message || 'Đã xảy ra lỗi');
                }
            }
        },
        async exportCategoryToExcel() {
            this.category.export.loading = true;
            const notyf = new Notyf();
            try {
                const data = await categoryService.exportCategoryToExcel(this.$store);
                const url = window.URL.createObjectURL(new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'category.xlsx');
                document.body.appendChild(link);
                link.click();
                notyf.success('Xuất excel thành công');
            } catch (error) {
                notyf.error('Có lỗi xảy ra');
            } finally {
                this.category.export.loading = false;
            }
        }, async exportCategoryToExcelById(userId) {
            this.category.export.loading = true;
            const notyf = new Notyf();
            try {
                const data = await categoryService.exportCategoryToExcelById(this.$store, userId);
                const url = window.URL.createObjectURL(new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'category_' + userId + '.xlsx');
                document.body.appendChild(link);
                link.click();
                notyf.success('Xuất excel thành công');
            } catch (error) {
                notyf.error('Có lỗi xảy ra');
            } finally {
                this.category.export.loading = false;
            }
        },
        modalUpdate() {
            if (this.isModalVisible) {
                this.resetForm();
            }
            this.isModalVisible = !this.isModalVisible;
        },
        async getCategoryById(userId) {
            this.category.newCategory.loading = true;
            var notyf = new Notyf();
            try {
                var resp = await categoryService.getCategoryById(this.$store, userId);
                this.category.newCategory.object = resp.data;
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    notyf.error('Bạn chưa đăng nhập. Vui lòng đăng nhập lại.');
                } else {
                    notyf.error(error.response?.data?.message || 'Đã xảy ra lỗi');
                }
            } finally {
                this.category.newCategory.loading = false;
            }
        },
        resetForm() {
            this.category.newCategory.object = {
                id: null,
                name: '',
                description: '',
                image: '',
            };
        },
        handleFileChange(event) {
            this.category.newCategory.object.file = event.target.files[0];
        },
        async newOrUpdateCategory() {

            if (this.category.newCategory.object.id) {
                this.category.newCategory.loading = true;
                let notyf = new Notyf();
                try {
                    let resp = await categoryService.updateCategory(this.$store, this.category.newCategory.object);
                    notyf.success(resp);

                } catch (error) {
                    if (error.response && error.response.status === 403) {
                        notyf.error('Bạn chưa đăng nhập. Vui lòng đăng nhập lại.');
                    } else {
                        notyf.error(error);
                    }
                } finally {
                    this.category.newCategory.loading = false;
                    this.resetForm();
                    this.modalUpdate();
                    this.loadCategory();
                }
            } else {
                let notyf = new Notyf();
                this.category.newCategory.loading = true;
                try {
                    let resp = await categoryService.newCategory(this.$store, this.category.newCategory.object);
                    notyf.success(resp);
                } catch (error) {
                    if (error.response && error.response.status === 403) {
                        notyf.error('Bạn chưa đăng nhập. Vui lòng đăng nhập lại.');
                    } else {
                        notyf.error(error);
                    }
                } finally {
                    this.category.newCategory.loading = false;
                    this.resetForm();
                    this.modalUpdate();
                    this.loadCategory();
                }
            }
        }
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