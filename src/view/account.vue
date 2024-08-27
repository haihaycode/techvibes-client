<template>
    <Breadcrumb :crumbs="breadcrumbs" />

    <RouterLink to="/" class="text-gray-500 hover:text-gray-700 px-4">
        <i class="fas fa-arrow-left px-5 py-10"></i>
        <span class="ml-10 text-red-500 font-bold">Quay lại</span>
    </RouterLink>

    <div class="min-h-screen flex flex-col justify-center items-center mt-1 p-2">
        <!-- Hình ảnh Mascot và Tiêu đề -->
        <div class="w-full max-w-md flex flex-col items-center text-center">
            <img :src="getPhoto(user.photo)" alt="Mascot" class="w-32 h-32 rounded-full" />
            <h1 class="text-2xl font-bold mt-4">Cập nhật thông tin tài khoản</h1>
            <RouterLink to="/account/address" class="text-xs font-bold mt-1 text-red-500">Cập nhật địa chỉ giao
                hàng <i class="fad fa-map-marker-alt"></i></RouterLink>
        </div>

        <!-- Form cập nhật thông tin -->

        <DefaultSkeleton :loading="loading" />
        <form v-if="!loading" @submit.prevent="updateUser" class="w-full md:w-full bg-white p-8 mt-4 rounded-lg">
            <div class="mb-4">
                <label for="fullName" class="block text-gray-700 font-bold mb-2">Họ và Tên (*)</label>
                <input type="text" id="fullName" v-model="user.fullName"
                    class="border border-gray-300 p-2 w-full rounded-lg" />
            </div>
            <div class="mb-4">
                <label for="file" class="block text-sm font-medium text-gray-700">Hình ảnh</label>
                <input type="file" id="file" @change="handleFileChange"
                    class="mt-1 block w-full bg-gray-100  text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>

            <div class="mb-4">
                <label for="email" class="block text-gray-700 font-bold mb-2">Email (*)</label>
                <div class="border border-gray-300 p-2 w-full rounded-lg">{{ user.email }}</div>
                <i class="text-gray-500 text-sm mt-1 ">Hóa đơn VAT khi mua hàng sẽ được gửi qua email này</i>
            </div>

            <div class="mb-4">
                <label for="email" class="block text-gray-700 font-bold mb-2">
                    <RouterLink to="/forgot-password" class="text-red-500"> Nhấn vào đây để đổi mật khẩu
                    </RouterLink>
                </label>
                <div class="border border-gray-300 p-2 w-full rounded-lg">************</div>
            </div>

            <div>
                <label for="email" class="block text-gray-700 font-bold mb-2">Địa chỉ giao hàng (*)</label>
                <i class="text-gray-500 text-sm mt-1 ">Các đơn hàng của bạn sẽ được giao đến địa chỉ này</i>
                <div v-for="(address, index) in user.addresses" :key="index" class="mb-6">
                    <div
                        :class="['bg-gray-50 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300', address.defaultAddress ? 'bg-white ' : '']">
                        <div class="flex justify-between items-center mb-2">
                            <h3 class="text-lg font-semibold text-red-800">
                                <span class="text-red-600"><i class="fad fa-map-marker-alt"></i> Đ/c : {{ index +
        1 }}</span>
                            </h3>
                            <button class="text-red-500 hover:text-indigo-700">
                                <i class="fas fa-edit"></i> Chỉnh sửa
                            </button>
                        </div>
                        <div class="text-gray-600">
                            <p class="flex items-center mb-1">
                                <i class="fas fa-user mr-2 text-red-500"></i>
                                <strong class="mr-2">Tên :</strong> {{ address.name }}
                            </p>
                            <p class="flex items-center mb-1">
                                <i class="fas fa-map-marker-alt mr-2 text-red-500"></i>
                                <strong class="mr-2">Địa chỉ :</strong> {{ address.address }}
                            </p>
                            <p class="flex items-center mb-1">
                                <i class="fas fa-phone mr-2 text-red-500"></i>
                                <strong class="mr-2">Điện thoại :</strong> {{ address.phone }}
                            </p>
                            <p class="flex items-center">
                                <i class="fas fa-envelope mr-2 text-red-500"></i>
                                <strong class="mr-2">sử dụng :</strong> {{ address.defaultAddress ? "có" : "không" }}
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div class="mb-4">
                <label class="inline-flex items-center">
                    <input type="checkbox" required class="form-checkbox text-red-600" />
                    <span class="ml-2">Tôi đồng ý với các điều khoản bảo mật cá nhân</span>
                </label>
            </div>



            <button type="submit" class="w-full bg-red-600 text-white py-2 rounded-lg font-bold hover:bg-red-700">
                Xác nhận
            </button>
        </form>
    </div>
</template>

<script>
import Breadcrumb from '@/components/breadcrumb.vue';
import accountService from '@/services/accountService';
import DefaultSkeleton from '@/components/defaultSekeleton.vue'
import { Notyf } from 'notyf';
import CONFIG from '@/services/config';

export default {
    name: 'AccountView',
    components: {
        Breadcrumb,
        DefaultSkeleton
    },
    data() {
        return {
            apiEndpoint: CONFIG.API_ENDPOINT,
            breadcrumbs: [
                { text: 'Trang chủ', link: '/' },
                { text: 'Quản lý tài khoản', link: '/account' },

            ],
            loading: false,
            user: {
                fullName: '',
                email: '',
                file: null
            }
        }
    },

    methods: {
        getPhoto(photo) {
            return `${this.apiEndpoint}/api/public/account/image/` + photo;
        },
        handleFileChange(event) {
            this.user.file = event.target.files[0];
        },
        async getUser() {
            this.loading = true;
            try {
                const response = await accountService.info(this.$store);
                this.user = response.data;
            } catch (error) {
                console.error('Error fetching user:', error);
            } finally {
                this.loading = false;
            }
        },
        async updateUser() {
            var notyf = new Notyf();
            this.loading = true;
            try {
                const response = await accountService.updateUserClient(this.$store, this.user);
                notyf.success(response);
            } catch (error) {
                console.error('Error fetching user:', error);
            } finally {
                this.getUser()
                this.loading = false;
            }
        },
    },
    mounted() {
        this.getUser();
    },
}

</script>