<template>


    <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">
                    <a href="/" class="flex items-center">
                        <img src="/image/logos.png" class="h-8 me-3" alt="FlowBite Logo" />
                        <span
                            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Techvibes</span>

                    </a>
                    <span class="px-2">
                        &nbsp;&nbsp; &nbsp;&nbsp;<i>Một dự án trang web bán hàng online - công nghệ SpringBoot & Vue
                        </i>

                    </span>
                </div>
                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Sản Phẩm</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="https://flowbite.com/" class="hover:underline">Thiết bị công nghệ</a>
                            </li>
                            <li>
                                <a href="https://tailwindcss.com/" class="hover:underline">Sản phẩm công nghệ</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Về chúng tôi</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="https://github.com/haihaycode" class="hover:underline ">Github</a>
                            </li>
                            <li>
                                <a href="https://github.com/haihaycode" class="hover:underline">Techvibes trên
                                    github</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Assignment java 6
                        </h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Spring Boot </a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Vue</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Trang bán hàng Online</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/"
                        class="hover:underline">Techvibes</a>. Haihaycode.
                </span>

            </div>
        </div>
    </footer>

</template>

<script>
export default {
    name: 'footerApp'
}
</script>

<style scoped></style>