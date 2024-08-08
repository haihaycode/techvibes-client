<template>
    <div id="k">
        <router-view name="header" />
        <router-view />
        <router-view name="footer" />
    </div>
</template>

<script>
export default {
    name: 'ClientLayout'
}
</script>
