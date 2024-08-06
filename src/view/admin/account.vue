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
                                                aria-current="page"> Quản lý người dùng</span>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                            <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                                Quản lý người
                                dùng
                            </h1>
                        </div>
                        <div
                            class="block sm:flex items-center justify-between sm:divide-x sm:divide-gray-100 dark:divide-gray-700">
                            <div class="flex items-center mb-4 sm:mb-0 space-x-2">
                                <form
                                    class="flex flex-col w-full sm:flex-row items-center space-y-4 sm:space-y-0  md:space-x-2 sm:space-x-2 sm:pr-3"
                                    @submit.prevent="applyFilters">

                                    <!-- Search Input -->
                                    <div class="relative w-full sm:w-64 xl:w-80">
                                        <input type="text" v-model="filters.keyword" id="products-search"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Tìm kiếm người dùng">
                                    </div>

                                    <!-- Role Select -->
                                    <div class="w-full sm:w-64 xl:w-80">
                                        <select v-model="filters.roleName"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="" selected>Quyền -- Không xét</option>
                                            <option value="ROLE_ADMIN">Quyền admin</option>
                                            <option value="ROLE_STAFF">Quyền Nhân viên</option>
                                            <option value="ROLE_USER">Quyền Người dùng</option>
                                            <option value="">Người dùng chưa xác minh</option>
                                        </select>
                                    </div>

                                    <!-- Status Select -->
                                    <div class="w-full sm:w-64 xl:w-80">
                                        <select v-model="filters.available"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="" selected>Trạng thái -- không xét</option>
                                            <option value="true">Kích hoạt</option>
                                            <option value="false">Không kích hoạt</option>
                                        </select>
                                    </div>

                                    <!-- Submit Button -->
                                    <button type="submit"
                                        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                        Lọc
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- table sản phẩm  -->
                <div class="flex flex-col ">
                    <div class="overflow-x-auto">
                        <div class="inline-block min-w-full align-middle">
                            <div class="overflow-hidden shadow">
                                <table class="min-w-full  divide-y divide-gray-200 table-fixed dark:divide-gray-600">
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
                                                </i> Tên người dùng

                                            </th>
                                            <th @click="changeSort('email')" scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                <i v-if="filters.sortField === 'email'" :class="{
                                        'fas': true,
                                        'fa-sort-amount-up': filters.sortDirection === 'asc',
                                        'fa-sort-amount-down': filters.sortDirection === 'desc'
                                    }">
                                                </i>
                                                Tài khoản
                                            </th>
                                            <th @click="changeSort('createDate')" scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                <i v-if="filters.sortField === 'createDate'" :class="{
                                        'fas': true,
                                        'fa-sort-amount-up': filters.sortDirection === 'asc',
                                        'fa-sort-amount-down': filters.sortDirection === 'desc'
                                    }">
                                                </i> Thời gian tạo và cập nhật
                                            </th>
                                            <th @click="changeSort('userId')" scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                <i v-if="filters.sortField === 'userId'" :class="{
                                        'fas': true,
                                        'fa-sort-amount-up': filters.sortDirection === 'asc',
                                        'fa-sort-amount-down': filters.sortDirection === 'desc'
                                    }">
                                                </i>Mã Người dùng
                                            </th>
                                            <th scope="col"
                                                class="text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Quyền </th>
                                            <th scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Thông tin
                                            </th>
                                            <th scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Hành động
                                            </th>
                                            <th scope="col" @click="changeSort('available')"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                <i v-if="filters.sortField === 'available'" :class="{
                                        'fas': true,
                                        'fa-sort-amount-up': filters.sortDirection === 'asc',
                                        'fa-sort-amount-down': filters.sortDirection === 'desc'
                                    }">
                                                </i> Trạng Thái
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody
                                        class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">

                                        <tr v-for="(a, index) in accounts" :key="index"
                                            class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <td>
                                                <div
                                                    class="text-base text-center font-semibold text-gray-900 dark:text-white">
                                                    {{ index + 1 }}
                                                </div>
                                            </td>
                                            <td colspan="2"
                                                class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">

                                                <img v-if="a.photo" class="w-8 h-8 rounded-full"
                                                    :src="getPhoto(a.photo)" alt="user photo">
                                                <img v-else class="w-8 h-8 rounded-full"
                                                    src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
                                                    alt="user photo">

                                                <br>
                                                <div
                                                    class="text-base font-mono text-gray-900 whitespace-nowrap dark:text-white">
                                                    {{ a.fullName ? a.fullName : 'Người dùng Techvibes' }}</div>
                                            </td>
                                            <td
                                                class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                                {{ a.email }}
                                            </td>
                                            <td
                                                class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                                {{ timeAgo(a.createDate) }} / {{ a.updateDate ?
                                        timeAgo(a.updateDate) :
                                        'chưa cập nhật' }}
                                            </td>
                                            <td
                                                class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                                {{ a.userId }} </td>
                                            <td
                                                class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <span v-if="a.roles.length === 0"
                                                    class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Chưa
                                                    xác minh</span>
                                                <span
                                                    class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                                                    v-else v-for="(role, index) in a.roles" :key="index">{{
                                        role.name }} &nbsp; </span>
                                            </td>

                                            <td
                                                class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                                {{ a.extractInfo ? a.extractInfo : 'không' }} </td>

                                            <td class="p-4 space-x-2 whitespace-nowrap flex ">
                                                <button @click="toggleModal(), getAccountsById(a.userId)"
                                                    class="flex items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                                    type="button">
                                                    <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        fill="currentColor" viewBox="0 0 24 24">
                                                        <path fill-rule="evenodd"
                                                            d="M5 8a4 4 0 1 1 7.796 1.263l-2.533 2.534A4 4 0 0 1 5 8Zm4.06 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h2.172a2.999 2.999 0 0 1-.114-1.588l.674-3.372a3 3 0 0 1 .82-1.533L9.06 13Zm9.032-5a2.907 2.907 0 0 0-2.056.852L9.967 14.92a1 1 0 0 0-.273.51l-.675 3.373a1 1 0 0 0 1.177 1.177l3.372-.675a1 1 0 0 0 .511-.273l6.07-6.07a2.91 2.91 0 0 0-.944-4.742A2.907 2.907 0 0 0 18.092 8Z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    <span>Cập nhật</span>
                                                </button>

                                                <button @click="exportUsersToExcelById(a.userId)"
                                                    class="flex items-center text-white bg-gray-100 hover:bg-gray-500 focus:outline-none rounded-lg"
                                                    type="button">
                                                    <svg v-if="!this.export.loading" xmlns="http://www.w3.org/2000/svg"
                                                        x="0px" y="0px" width="100" height="40" viewBox="0 0 48 48">
                                                        <path fill="#4CAF50"
                                                            d="M41,10H25v28h16c0.553,0,1-0.447,1-1V11C42,10.447,41.553,10,41,10z">
                                                        </path>
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
                                                        viewBox="0 0 100 101" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                            fill="currentColor" />
                                                        <path
                                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                            fill="currentFill" />
                                                    </svg>
                                                </button>

                                            </td>
                                            <td class="p-4 space-x-2 whitespace-nowrap">
                                                <div>

                                                    <label :for="'toggleSwitch' + a.userId"
                                                        class="flex items-center cursor-pointer">
                                                        <div class="relative toggle-switch">
                                                            <input type="checkbox" :id="'toggleSwitch' + a.userId"
                                                                @click="toggleAvailability(a.userId)"
                                                                v-model="a.available" class="sr-only" />
                                                            <div class="toggle-slider"></div>
                                                        </div>
                                                        <div class="ml-3 font-medium"
                                                            :class="a.available ? 'text-green-500' : 'text-gray-700'">
                                                            {{ a.available ? 'Kích Hoạt' : 'Khóa ' }}
                                                        </div>
                                                    </label>

                                                </div>

                                            </td>
                                        </tr>
                                        <SkeletonTable :columns="10" :loading="user.loading" :item="4" />
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
                                        filters.page + 1 }} / {{ filters.scope ? filters.scope.totalPages : "" }} </span>
                        <form class="max-w-sm mx-auto flex items-center">

                            <select id="limit" v-model="filters.limit" @change="loadAccounts"
                                class="border border-1 mx-2 rounded-lg text-gray-900 text-sm  block w-full ">
                                <option value="5">5 Người dùng</option>
                                <option value="10">10 Người dùng</option>
                                <option value="15">15 Người dùng</option>
                                <option value="20">20 Người dùng</option>
                                <option value="25">25 Người dùng</option>
                            </select>
                        </form>
                        <button data-tooltip-target="tooltip-hover" data-tooltip-trigger="hover" type="button"
                            @click="exportUsersToExcel"
                            class="border border-2 hover:bg-gray-100 mx-2 rounded-lg text-gray-900 ">

                            <svg v-if="!this.export.loading" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
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

                <!-- edit người dùng -->
                <div v-if="isModalVisible" class="fixed inset-0 flex items-center justify-center z-50">
                    <div class="fixed inset-0 bg-gray-500 " @click="toggleModal" style="background-color:  #ccccccd0;">
                    </div>
                    <div class="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
                        <!-- Modal header -->
                        <div
                            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                Cập nhật người dùng # {{ user.userId }}
                            </h3>
                            <button type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                @click="toggleModal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <!--  body -->
                        <div class="p-4 md:p-5 space-y-4">
                            <form @submit.prevent="updateUser">
                                <div class="flex items-start mb-5">
                                    <div class="flex items-center h-5">
                                        <input id="terms" type="checkbox"
                                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                            required />
                                    </div>
                                    <label for="terms"
                                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Đồng với các
                                        rủi ro <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">Thay
                                            đổi đúng mục đích </a></label>
                                </div>
                                <div class="mb-5">
                                    <label for="email"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tài khoản
                                    </label>
                                    <input type="email" id="email" v-model="user.email"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Techvibes@gmail.com" required />
                                </div>
                                <div class="mb-5">
                                    <label for="fullname"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và
                                        tên</label>
                                    <input type="text" id="fullname" v-model="user.fullName"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required />
                                </div>
                                <Button type="submit" :text="user.loading ? 'Đang xử lý...' : 'Cập nhật người dùng này'"
                                    :loading="user.loading"
                                    class="w-full bg-gray-700 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"></Button>
                            </form>
                        </div>
                        <!--  footer -->
                        <div class=" p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button @click="toggleModal" type="button"
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
import accountService from "@/services/accountService";
import { Notyf } from 'notyf';
import Button from '@/components/button.vue';
import SkeletonTable from '@/components/SkeletonTable.vue';
import { timeAgo } from '@/utils/utils';

export default {
    name: "accountView",
    components: {
        Button,
        SkeletonTable
    },
    mounted() {
        this.loadAccounts();
    },
    computed: {
        startItem() {
            return (this.filters.page - 1) * this.filters.limit + 1;
        },
        endItem() {
            return Math.min(this.filters.page * this.filters.limit, this.filters.scope.totalElements);
        }
    },
    data() {
        return {
            isModalVisible: false,
            accounts: [],

            user: {
                userId: '...',
                fullName: "",
                email: "",
                address: "",
                phone: null,
                loading: false,

            },
            export: {
                loading: false,
            },
            filters: {
                keyword: "",
                page: 0,
                limit: 5,
                scope: "",
                sortField: 'userId',
                sortDirection: 'desc'
            }
        };
    },
    methods: {
        timeAgo,
        async loadAccounts() {
            this.user.loading = true;
            var notyf = new Notyf();
            try {
                var resp = await accountService.getAccounts(this.$store, this.filters);
                this.accounts = resp.data.content;
                this.filters.scope = resp.data;
                console.log(this.filters);
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    notyf.error('Bạn chưa đăng nhập. Vui lòng đăng nhập lại.');
                    await this.logoutUser();
                    this.$router.push('/login?session_expired=true');
                } else {
                    notyf.error(error.response?.data?.message || 'Đã xảy ra lỗi');
                }
            } finally {
                this.user.loading = false;
            }
        },
        prevPage() {
            if (this.filters.page > 0) {
                this.filters.page--;
                this.loadAccounts();
            }
        },
        nextPage() {
            const maxPage = Math.ceil(this.filters.scope.totalElements / this.filters.limit);
            if (this.filters.page < maxPage - 1) {
                this.filters.page++;
                this.loadAccounts();
            }
        },
        getPhoto(photo) {
            return "http://localhost:8080/api/public/account/image/" + photo;
        },
        applyFilters() {
            let appliedFilters = { ...this.filters };
            if (!appliedFilters.roleName) delete this.filters.roleName;
            if (!appliedFilters.available) delete this.filters.available;
            this.loadAccounts();
        },
        async toggleAvailability(userId) {
            var notyf = new Notyf();
            try {
                var resp = await accountService.toggleAvailability(this.$store, userId);
                notyf.success(resp.message);
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    notyf.error('Bạn chưa đăng nhập. Vui lòng đăng nhập lại.' + resp);
                } else {
                    notyf.error(error.response?.data?.message || 'Đã xảy ra lỗi');
                }
            }
        },
        async getAccountsById(userId) {
            this.user.loading = true;
            var notyf = new Notyf();
            try {
                var resp = await accountService.getAccountsById(this.$store, userId);
                this.user = resp.data;
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    notyf.error('Bạn chưa đăng nhập. Vui lòng đăng nhập lại.');
                } else {
                    notyf.error(error.response?.data?.message || 'Đã xảy ra lỗi');
                }
            } finally {
                this.user.loading = false;
            }
        },
        async updateUser() {
            this.user.loading = true;
            var notyf = new Notyf();
            try {
                var resp = await accountService.updateUser(this.$store, this.user.userId, this.user);
                notyf.success(resp.message);
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    notyf.error('Bạn chưa đăng nhập. Vui lòng đăng nhập lại.');
                } else {
                    notyf.error(error.response?.data?.message || 'Đã xảy ra lỗi');
                }
            } finally {
                this.loadAccounts()
                this.toggleModal()
                this.user.loading = false;
            }
        },
        changeSort(field) {
            if (this.filters.sortField === field) {
                this.filters.sortDirection = this.filters.sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                this.filters.sortField = field;
                this.filters.sortDirection = 'asc';
            }
            this.filters.sort = this.filters.sortField + ',' + this.filters.sortDirection;
            this.loadAccounts();
        },
        toggleModal() {
            this.isModalVisible = !this.isModalVisible;
        },
        async exportUsersToExcel() {
            this.export.loading = true;
            const notyf = new Notyf();
            try {
                const data = await accountService.exportUsersToExcel(this.$store);
                const url = window.URL.createObjectURL(new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'accounts.xlsx');
                document.body.appendChild(link);
                link.click();
                notyf.success('Xuất excel thành công');
            } catch (error) {
                notyf.error('Có lỗi xảy ra');
            } finally {
                this.export.loading = false;
            }
        },
        async exportUsersToExcelById(userId) {
            this.export.loading = true;
            const notyf = new Notyf();
            try {
                const data = await accountService.exportUsersToExcelById(this.$store, userId);
                const url = window.URL.createObjectURL(new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'accounts_' + userId + '.xlsx');
                document.body.appendChild(link);
                link.click();
                notyf.success('Xuất excel thành công');
            } catch (error) {
                notyf.error('Có lỗi xảy ra');
            } finally {
                this.export.loading = false;
            }
        }
    },
}
</script>

<style>
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