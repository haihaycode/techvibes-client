<template>
    <Breadcrumb :crumbs="breadcrumbs" />
    <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 md:pr-8">
                <h1 class="text-4xl font-bold mb-4">Giới thiệu về TechVibes</h1>
                <p class="text-lg mb-6">
                    Chào mừng bạn đến với <strong>TechVibes</strong> - điểm đến hàng đầu cho tất cả nhu cầu công nghệ
                    của bạn!
                    Chúng tôi tự hào là đơn vị cung cấp giải pháp công nghệ tiên tiến nhất với sự kết hợp hoàn hảo giữa
                    hiệu suất và phong cách.
                </p>
                <h2 class="text-2xl font-semibold mb-4">Về Chúng Tôi</h2>
                <p class="text-lg mb-6">
                    Tại TechVibes, chúng tôi mang đến một trải nghiệm mua sắm trực tuyến tuyệt vời với công nghệ
                    <strong>SpringBoot</strong> và <strong>Vue.js</strong>. Với đội ngũ kỹ thuật viên giàu kinh nghiệm
                    và đam mê,
                    chúng tôi cam kết cung cấp các sản phẩm và dịch vụ chất lượng cao nhất. Từ phần cứng máy tính đến
                    các giải pháp phần mềm,
                    chúng tôi có tất cả những gì bạn cần để nâng cao hiệu suất và trải nghiệm công nghệ của mình.
                </p>
                <h2 class="text-2xl font-semibold mb-4">Sản Phẩm và Dịch Vụ</h2>
                <ul class="list-disc list-inside mb-6 pl-6">
                    <li><strong>Phần Cứng Máy Tính:</strong> Từ máy tính xách tay đến các linh kiện phần cứng, chúng tôi
                        cung cấp sản phẩm từ những thương hiệu hàng đầu với chất lượng đảm bảo.</li>
                    <li><strong>Phần Mềm:</strong> Đem đến những giải pháp phần mềm tốt nhất giúp tối ưu hóa công việc
                        và giải trí, bao gồm phần mềm bảo mật, ứng dụng văn phòng, và nhiều hơn nữa.</li>
                    <li><strong>Dịch Vụ Hỗ Trợ Kỹ Thuật:</strong> Chúng tôi cung cấp dịch vụ hỗ trợ kỹ thuật chuyên
                        nghiệp để đảm bảo hệ thống của bạn hoạt động mượt mà và hiệu quả.</li>
                </ul>
                <h2 class="text-2xl font-semibold mb-4">Tại Sao Chọn Chúng Tôi?</h2>
                <ul class="list-disc list-inside mb-6 pl-6">
                    <li><strong>Công Nghệ Tiên Tiến:</strong> Chúng tôi sử dụng công nghệ <strong>SpringBoot</strong> và
                        <strong>Vue.js</strong> để mang đến trải nghiệm mua sắm trực tuyến mượt mà và an toàn.
                    </li>
                    <li><strong>Dịch Vụ Khách Hàng Tận Tâm:</strong> Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng lắng
                        nghe và giúp đỡ bạn trong mọi vấn đề.</li>
                    <li><strong>Chất Lượng Đảm Bảo:</strong> Chúng tôi cam kết cung cấp các sản phẩm và dịch vụ với chất
                        lượng tốt nhất, giúp bạn yên tâm khi sử dụng.</li>
                </ul>
                <h2 class="text-2xl font-semibold mb-4">Liên Hệ Với Chúng Tôi</h2>
                <p class="text-lg mb-6">
                    Nếu bạn có bất kỳ câu hỏi nào hoặc cần hỗ trợ, đừng ngần ngại liên hệ với chúng tôi qua
                    <a href="mailto:contact@techvibes.com" class="text-blue-500 hover:underline">email</a> hoặc
                    <a href="tel:+1234567890" class="text-blue-500 hover:underline">số điện thoại</a>. Chúng tôi luôn
                    sẵn sàng giúp đỡ bạn!
                </p>
            </div>
            <div class="md:w-1/2 md:pl-8 flex justify-center">
                <img src="/image/logos.png" alt="TechVibes" class="w-full max-w-sm " />
            </div>
        </div>
    </div>

    <div class="flex items-center justify-between p-6">
        <!-- Phần giới thiệu ở bên trái -->
        <div class="w-1/2 text-left">
            <h1 class="text-3xl font-bold mb-4">Thông tin về dự án</h1>
            <p class="italic text-gray-600 mb-6">
                Một dự án trang web bán hàng online - công nghệ SpringBoot & Vue.
            </p>
            <ul class="list-disc list-inside space-y-4 pl-6">
                <li>
                    <strong class="text-lg text-blue-600">Spring Boot Starter Security:</strong>
                    <span class="text-gray-700">org.springframework.boot:spring-boot-starter-security:3.3.2</span>
                </li>
                <li>
                    <strong class="text-lg text-blue-600">Spring Boot Starter Web:</strong>
                    <span class="text-gray-700">org.springframework.boot:spring-boot-starter-web:3.3.2</span>
                </li>
                <li>
                    <strong class="text-lg text-blue-600">Spring Boot Starter Thymeleaf:</strong>
                    <span class="text-gray-700">org.springframework.boot:spring-boot-starter-thymeleaf:3.3.2</span>
                </li>
                <li>
                    <strong class="text-lg text-blue-600">JSON:</strong>
                    <span class="text-gray-700">org.json:json:20230227</span>
                </li>
                <li>
                    <strong class="text-lg text-blue-600">Lombok:</strong>
                    <span class="text-gray-700">org.projectlombok:lombok:1.18.34</span>
                </li>
                <li>
                    <strong class="text-lg text-blue-600">Spring Boot Starter Test:</strong>
                    <span class="text-gray-700">org.springframework.boot:spring-boot-starter-test:3.3.2 (test)</span>
                </li>
                <li>
                    <strong class="text-lg text-blue-600">Spring Security Test:</strong>
                    <span class="text-gray-700">org.springframework.security:spring-security-test:6.3.1 (test)</span>
                </li>
                <li>
                    <strong class="text-lg text-blue-600">Spring Boot Starter Validation:</strong>
                    <span class="text-gray-700">org.springframework.boot:spring-boot-starter-validation:3.3.2</span>
                </li>
                <li>
                    <strong class="text-lg text-blue-600">Java JWT:</strong>
                    <span class="text-gray-700">com.auth0:java-jwt:4.4.0</span>
                </li>
                <li>
                    <strong class="text-lg text-blue-600">Spring Boot Configuration Processor:</strong>
                    <span
                        class="text-gray-700">org.springframework.boot:spring-boot-configuration-processor:3.3.2</span>
                </li>
                <li>
                    <strong class="text-lg text-blue-600">MySQL Connector:</strong>
                    <span class="text-gray-700">com.mysql.mysql-connector-j:8.3.0 (runtime)</span>
                </li>
                <li>
                    <strong class="text-lg text-blue-600">Spring Boot Starter Data JPA:</strong>
                    <span class="text-gray-700">org.springframework.boot:spring-boot-starter-data-jpa:3.3.2</span>
                </li>
                <li>
                    <strong class="text-lg text-blue-600">Spring Boot Starter Mail:</strong>
                    <span class="text-gray-700">org.springframework.boot:spring-boot-starter-mail:3.3.2</span>
                </li>
                <li>
                    <strong class="text-lg text-blue-600">Apache POI (OOXML):</strong>
                    <span class="text-gray-700">org.apache.poi:poi-ooxml:5.0.0</span>
                </li>
            </ul>
        </div>

        <!-- Phần hình ảnh bên phải -->
        <div class="w-1/2 flex justify-center">
            <img src="https://avatars.githubusercontent.com/u/126437144?v=4" alt="Team Representative"
                class="w-1/2 rounded-lg shadow-md">
        </div>
    </div>

    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-6">Quyền Hạn Người Dùng</h1>

        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">ROLE_ADMIN</h2>
            <ul class="list-disc list-inside space-y-4 pl-6">
                <li><strong>Quản Lý Sản Phẩm:</strong> Admin có thể thêm, sửa đổi hoặc xóa sản phẩm trong danh mục.</li>
                <li><strong>Quản Lý Danh Mục:</strong> Admin có thể tạo, sửa đổi và xóa các danh mục sản phẩm.</li>
                <li><strong>Quản Lý Đơn Hàng:</strong> Admin có thể xem tất cả các đơn hàng, thay đổi trạng thái đơn
                    hàng và xử lý các đơn hàng.</li>
                <li><strong>Quản Lý Người Dùng:</strong> Admin có thể xem và quản lý thông tin người dùng, bao gồm việc
                    cấp quyền cho các người dùng khác và xóa tài khoản nếu cần.</li>
                <li><strong>Quản Lý Quyền:</strong> Admin có thể cấp quyền cho các vai trò khác như nhân viên và khách
                    hàng.</li>
                <li><strong>Xem Báo Cáo:</strong> Admin có thể xem báo cáo về doanh thu, sản phẩm bán chạy, và các số
                    liệu liên quan khác.</li>
            </ul>
        </div>

        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">ROLE_USER</h2>
            <ul class="list-disc list-inside space-y-4 pl-6">
                <li><strong>Xem Sản Phẩm:</strong> Khách hàng có thể duyệt và xem thông tin sản phẩm, bao gồm hình ảnh,
                    mô tả, giá cả và các thông tin khác.</li>
                <li><strong>Thêm Sản Phẩm vào Giỏ Hàng:</strong> Khách hàng có thể thêm sản phẩm vào giỏ hàng và quản lý
                    nội dung giỏ hàng của mình.</li>
                <li><strong>Đặt Hàng:</strong> Khách hàng có thể tạo đơn hàng và theo dõi trạng thái đơn hàng của mình.
                </li>
                <li><strong>Quản Lý Tài Khoản:</strong> Khách hàng có thể xem và cập nhật thông tin cá nhân, bao gồm địa
                    chỉ và thông tin liên lạc.</li>
                <li><strong>Danh Sách Yêu Thích:</strong> Khách hàng có thể thêm sản phẩm vào danh sách yêu thích và xem
                    danh sách yêu thích của mình.</li>
            </ul>
        </div>

        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">ROLE_OTHER</h2>
            <p class="text-lg text-gray-700">Quyền hạn khác, có thể được định nghĩa theo yêu cầu cụ thể của hệ thống.
            </p>
        </div>

        <div>
            <h2 class="text-2xl font-semibold mb-4">ROLE_STAFF</h2>
            <ul class="list-disc list-inside space-y-4 pl-6">
                <li><strong>Quản Lý Sản Phẩm:</strong> Nhân viên có thể thêm, sửa đổi hoặc xóa sản phẩm trong danh mục,
                    nhưng có thể không có quyền xóa sản phẩm hoặc sửa đổi thông tin quan trọng mà admin có thể làm.</li>
                <li><strong>Quản Lý Đơn Hàng:</strong> Nhân viên có thể xem và xử lý các đơn hàng, bao gồm cập nhật
                    trạng thái đơn hàng và chuẩn bị đơn hàng để vận chuyển.</li>
                <li><strong>Xem Báo Cáo Cơ Bản:</strong> Nhân viên có thể xem một số báo cáo cơ bản liên quan đến đơn
                    hàng hoặc sản phẩm, nhưng không có quyền xem báo cáo tài chính hoặc doanh thu chi tiết.</li>
                <li><strong>Hỗ Trợ Khách Hàng:</strong> Nhân viên có thể trả lời các câu hỏi và hỗ trợ khách hàng qua
                    các kênh liên lạc như email hoặc chat.</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/breadcrumb.vue';

export default {
    name: "AboutUsView",
    components: {
        Breadcrumb,

    },
    data() {
        return {
            breadcrumbs: [
                { text: 'Trang chủ', link: '/' },
                { text: 'Giới thiệu về Techvibes', link: '/abous-us' },


            ],
        }
    },
}
</script>
