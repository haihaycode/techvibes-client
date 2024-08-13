<template>


    <div class="address-container p-6 mt-2">
        <Breadcrumb :crumbs="breadcrumbs" />
        <!-- Header -->
        <div class="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
            <h2 class="text-xl font-bold">Địa chỉ giao hàng</h2>

            <button @click="modalUpdate"
                class="flex items-center bg-red-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                <i class="fas fa-plus mr-2"></i>
                Thêm địa chỉ mới
            </button>
        </div>

        <!-- Content -->
        <div v-if="addresses.length === 0" class="flex flex-col items-center justify-center h-64">
            <i class="fad fa-map-marker-alt opacity-50 text-red-500"></i>
            <p class="text-gray-500">Bạn chưa có địa chỉ.</p>
        </div>


        <!-- Address List -->
        <div v-else class="space-y-4">
            <div v-for="address in addresses" :key="address.id"
                class="p-4 border border-gray-300 rounded-md shadow-sm bg-white flex flex-col md:flex-row justify-between items-start md:items-end">

                <!-- Address Information -->
                <div class="flex-grow mb-4 md:mb-0">
                    <div class="flex items-center mb-2">
                        <input type="radio" :id="'address-' + address.id" v-model="selectedAddressId"
                            :value="address.id" @change="setDefaultAddress(address.id)" class="mr-2">
                        <label :for="'address-' + address.id" class="text-lg font-semibold">{{ address.name }}</label>
                    </div>
                    <p class="text-gray-600">Địa chỉ : <i> {{ address.address }}</i></p>
                    <p class="text-gray-600">Số điện thoại: <i>{{ address.phone }}</i></p>
                    <p class="text-gray-600">Thư : <i>{{ address.email }}</i></p>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-col md:flex-row items-end md:space-x-4">
                    <!-- Update Button -->
                    <button @click="editAddress(address.id)" class="text-blue-500 hover:text-blue-700 mb-2 md:mb-0">
                        <i class="fad fa-map-marker-alt"></i> Cập nhật
                    </button>
                    <!-- Delete Button -->
                    <button @click="deleteAddress(address.id)" class="text-red-500 hover:text-red-700">
                        <i class="fas fa-trash"></i> Xóa địa chỉ
                    </button>
                </div>
            </div>
        </div>



        <!-- Modal for Adding Address -->
        <div v-if="isModalVisible" id="exampleModalScrollable" tabindex="-1"
            aria-labelledby="exampleModalScrollableLabel"
            class="z-40 fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden mx-auto overflow-y-auto">
            <div class="fixed inset-0 bg-gray-500" style="background-color: #ccccccd0;"></div>
            <div class="relative p-4 w-full mt-10 mx-auto max-w-3xl bg-white rounded-lg shadow dark:bg-gray-700 ">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        {{ addressForm.id ? 'Cập nhật địa chỉ' : 'Thêm địa chỉ' }}
                        <i class="fad fa-map-marker-alt text-red-500"></i>
                    </h3>
                    <br>


                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        @click="modalUpdate">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 md:p-5 space-y-4">
                    <form @submit.prevent="newOrUpdateAddress">
                        <!-- Name Field -->
                        <div class="mb-4">
                            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Họ và
                                tên (*)</label>
                            <i class="text-gray-500 text-sm mt-1 ">Điền đúng tên người nhận hàng *</i>
                            <input type="text" id="name" v-model="addressForm.name" required
                                class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                        </div>
                        <!-- Address Field -->
                        <div class="mb-4">
                            <label for="address" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Địa
                                chỉ</label>
                            <i class="text-gray-500 text-sm mt-1 ">Điền đúng địa chỉ nhận hàng *</i>

                            <input type="text" id="address" v-model="addressForm.address" required
                                class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                        </div>
                        <!-- Phone Field -->
                        <div class="mb-4">
                            <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Điện
                                thoại (*)</label>
                            <i class="text-gray-500 text-sm mt-1 ">Người giao hàng sẽ gọi đến số điện thoại này *</i>

                            <input type="text" id="phone" v-model="addressForm.phone" required
                                class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                        </div>
                        <!-- Email Field -->
                        <div class="mb-4">
                            <label for="email"
                                class="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                            <input type="email" id="email" v-model="addressForm.email" required
                                class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                        </div>
                        <!-- Submit Button -->
                        <div class="flex justify-end">
                            <button type="submit"
                                class="py-2.5 px-5 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none">
                                {{ addressForm.id ? 'Cập nhật' : 'Thêm' }}
                            </button>
                        </div>
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
    </div>
</template>

<script>
import { Notyf } from 'notyf';
import addressService from '@/services/addressService';
import Breadcrumb from '@/components/breadcrumb.vue';

export default {
    name: 'AddressView',
    comoponents: {
        Breadcrumb
    },
    data() {
        return {
            breadcrumbs: [
                { text: 'Trang chủ', link: '/' },
                { text: 'Quản lý tài khoản', link: '/account' },
                { text: 'Quản lý địa chỉ giao hàng', link: '/account/address' },

            ],
            isModalVisible: false,
            addresses: [],
            loading: false,
            addressForm: {
                id: '',
                name: '',
                address: '',
                phone: '',
                email: '',
            },
            selectedAddressId: null,

        };
    },
    async created() {
        await this.fetchAddresses();
    },
    methods: {
        async fetchAddresses() {
            this.loading = true;
            try {
                const response = await addressService.getAddresses(this.$store);
                this.addresses = response.data.data;
                this.selectedAddressId = this.addresses.find(address => address.defaultAddress)?.id || null; // Thiết lập địa chỉ mặc định khi tải
                console.log('Addresses:', this.addresses);
            } catch (error) {
                console.error('Error fetching addresses:', error);
            } finally {
                this.loading = false;
            }
        },
        resetForm() {
            this.addressForm = {
                name: '',
                address: '',
                phone: '',
                email: '',
            }
        },
        modalUpdate() {
            if (this.isModalVisible) {
                this.resetForm();
            }
            this.isModalVisible = !this.isModalVisible;
        },
        async newOrUpdateAddress() {
            if (this.addressForm.id) {
                this.loading = true;
                try {
                    await addressService.updateAddress(this.$store, this.addressForm.id, this.addressForm);
                    const notyf = new Notyf();
                    notyf.success('Địa chỉ đã được cập nhật thành công!');
                    this.modalUpdate();
                    this.resetForm();
                } catch (error) {
                    console.error('Error adding address:', error);
                } finally {
                    this.fetchAddresses();
                    this.loading = false;
                }
            } else {
                this.loading = true;
                try {
                    await addressService.addAddress(this.$store, this.addressForm);
                    const notyf = new Notyf();
                    notyf.success('Địa chỉ đã được thêm thành công!');
                    this.modalUpdate();
                    this.resetForm();
                } catch (error) {
                    console.error('Error adding address:', error);
                } finally {
                    this.fetchAddresses();
                    this.loading = false;
                }
            }
        },
        async setDefaultAddress(id) {
            this.loading = true;
            try {
                await addressService.setDefaultAddress(this.$store, id); // Gọi API để cập nhật địa chỉ mặc định
                this.addresses.forEach(address => address.defaultAddress = address.id === id); // Cập nhật trạng thái địa chỉ mặc định trong danh sách
                this.selectedAddressId = id; // Cập nhật địa chỉ được chọn
                const notyf = new Notyf();
                notyf.success('Địa chỉ mặc định đã được cập nhật!');
            } catch (error) {
                console.error('Error setting default address:', error);
            } finally {
                this.fetchAddresses();
                this.loading = false;
            }
        },
        editAddress(id) {
            const address = this.addresses.find(addr => addr.id === id);
            this.addressForm = { ...address };
            this.modalUpdate();
        },
        async deleteAddress(id) {
            this.loading = true;
            try {
                await addressService.deleteAddress(this.$store, id);
                this.addresses = this.addresses.filter(address => address.id !== id);
                const notyf = new Notyf();
                notyf.success('Địa chỉ đã được xóa thành công!');
            } catch (error) {
                console.error('Error deleting address:', error);
            } finally {
                this.loading = false;
            }
        },
    }
}
</script>

<style scoped>
/* Custom styles if needed */
</style>
