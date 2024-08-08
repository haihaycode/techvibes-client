<template>
    <div>



        <!-- <nav>
            <router-link to="/">Home</router-link>
            <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
            <button v-if="isLoggedIn" @click="logout">Logout</button>
            <span v-if="isLoggedIn"> | Roles: {{ roles.join(', ') }}</span>
            <span v-if="isLoggedIn"> email : {{ currentUser.email }}</span>
        </nav> -->
        <Breadcrumb :crumbs="breadcrumbs" />
        <Banner></Banner>
        <CategoryGrid></CategoryGrid>
        <bestSale></bestSale>
        <productNew></productNew>



    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import bestSale from '@/components/bestSale.vue'
import Breadcrumb from '@/components/breadcrumb.vue';
import Banner from '@/components/banner.vue';
import CategoryGrid from '@/components/categoryGrid.vue';
import productNew from '@/components/productNew.vue';

export default {
    name: 'App',
    components: {
        bestSale,
        Breadcrumb,
        Banner,
        CategoryGrid,
        productNew
    },
    data() {
        return {
            breadcrumbs: [
                { text: 'Trang chủ', link: '/' },
                { text: 'Sản phẩm', link: '/product' },

            ]
        }
    },
    computed: {
        ...mapGetters(['isLoggedIn', 'userRoles', 'hasRole', 'currentUser']),
        roles() {
            return this.userRoles || [];
        },
        user() {
            return this.currentUser || null;
        }
    },
    methods: {
        ...mapActions(['logout']),
    },
};
</script>