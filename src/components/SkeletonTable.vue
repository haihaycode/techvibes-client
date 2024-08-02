<template>
    <tr v-if="loading" role="status" class="animate-pulse">
        <td :colspan="columns">
            <div class="flex items-center justify-between  border-b-2 p-5 mb-1" v-for="(i) in item" :key="i">
                <div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-60 mb-2.5">
                    </div>
                    <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                    </div>
                </div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-70">
                </div>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'SkeletonTable',
    props: {
        columns: {
            type: Number,
            default: 10,
        },
        item: {
            type: Number,
            default: 4,
        },
        loading: {
            type: Boolean,
            default: false,
        }
    },
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>