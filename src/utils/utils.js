// src/utils.js
export function formatCurrency(value) {
    // Kiểm tra nếu giá trị không phải là số hoặc là null/undefined
    if (value === null || value === undefined || isNaN(value)) {
        return 'Không xác định'; // Hoặc một giá trị mặc định khác
    }

    // Đảm bảo giá trị là số
    const numberValue = Number(value);

    // Định dạng giá trị thành tiền tệ Việt Nam
    return numberValue.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}
export function timeAgo(input) {
    const units = [
        { name: 'năm', millis: 31536000000 },
        { name: 'tháng', millis: 2592000000 },
        { name: 'ngày', millis: 86400000 },
        { name: 'giờ', millis: 3600000 },
        { name: 'phút', millis: 60000 },
        { name: 'giây', millis: 1000 }
    ];

    const now = new Date();
    const past = new Date(input);
    const diff = now - past;

    for (let unit of units) {
        const elapsed = Math.floor(diff / unit.millis);
        if (elapsed >= 1) {
            return `${elapsed} ${unit.name} trước`;
        }
    }

    return 'vừa xong';
}