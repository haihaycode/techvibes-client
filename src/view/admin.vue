<template>
    <div>
        <router-view name="NavAndSideBarAdmin" />
        <router-view />
        <router-view name="footerAdmin" />
    </div>
</template>


<script>
export default {
    name: 'AdminLayout',
    watch: {
        '$route'(to) {
            this.updateCSSBasedOnURL(to.path);
        }
    },
    mounted() {
        this.updateCSSBasedOnURL(this.$route.path);
    },
    methods: {
        updateCSSBasedOnURL(path) {
            const tailwindCSS = document.getElementById('tailwindcssww');
            const flowbiteCSS = document.getElementById('flowbitecssww');
            if (path.includes('admin')) {
                flowbiteCSS.disabled = false;
                tailwindCSS.disabled = true;
            } else {
                flowbiteCSS.disabled = true;
                tailwindCSS.disabled = false;
            }
        }
    }
}



</script>
<style>
.my-custom-active-class {
    /* background-color: rgba(143, 138, 138, 0.11); */
    color: rgba(61, 56, 129, 0.951);
}

.my-custom-exact-active-class {
    background-color: rgba(143, 138, 138, 0.11);
}
</style>