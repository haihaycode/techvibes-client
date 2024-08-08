<template>
    <nav aria-label="breadcrumb" class="shadow-xl px-4">
        <ol class="flex space-x-4 px-2 py-1">
            <li v-for="(crumb, index) in crumbs" :key="index" class="flex items-center ">
                <router-link v-if="crumb.link" :to="crumb.link" class="text-gray-600 hover:text-blue-800"
                    style="color: black !important;">
                    {{ crumb.text }}
                </router-link>
                <span v-else class="text-black-500">
                    {{ crumb.text }}
                </span>
                <svg v-if="index < crumbs.length - 1" class="w-4 h-4 text-gray-400 mx-2"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    name: 'BreadcrumbComponent',
    props: {
        crumbs: {
            type: Array,
            required: true,
            validator: function (value) {
                return value.every(crumb => 'text' in crumb);
            }
        }
    }
};
</script>

<style scoped>
/* Add any additional styling if needed */
</style>