// notify.js
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

// Tùy chỉnh giao diện bằng cách ghi đè CSS
const notyf = new Notyf({
    duration: 4000,  // Thời gian hiển thị mặc định là 4 giây
    position: {
        x: 'right',
        y: 'top',
    },
    types: [
        {
            type: 'success',
            background: '#28a745',
            icon: {
                className: 'material-icons',
                tagName: 'i',
                text: 'check_circle',
            },
        },
        {
            type: 'error',
            background: '#dc3545',
            icon: {
                className: 'material-icons',
                tagName: 'i',
                text: 'error_outline',
            },
        },
        {
            type: 'info',
            background: '#17a2b8',
            icon: {
                className: 'material-icons',
                tagName: 'i',
                text: 'info_outline',
            },
        }
    ]
});

export const notify = {
    success: (message) => {
        notyf.success(message);
    },
    error: (message) => {
        notyf.error(message);
    },
    info: (message) => {
        notyf.open({
            type: 'info',
            message: message,
            duration: 5000,
            dismissible: true,
            position: {
                x: 'right',
                y: 'top'
            }
        });
    }
};
