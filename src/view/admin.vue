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

}
</script>
