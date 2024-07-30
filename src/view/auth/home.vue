<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
            <button v-if="isLoggedIn" @click="logout">Logout</button>
            <span v-if="isLoggedIn"> | Roles: {{ roles.join(', ') }}</span>
            <span v-if="isLoggedIn"> email : {{ currentUser.email }}</span>
        </nav>


    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'App',
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