export const adminMenu = [
    { //Quản lý người dùng 
        name: 'Quản lý người dùng', menus: [
            {
                name: 'Quản lý người dùng', link: '/system/user-manage'
            },
        ]
        // ]
    },
    { //Quản lý sách
        name: 'Quản lý sách', menus: [
            {
                name: 'Thêm sách', link: '/system/manane-clinic'
            },
            {
                name: 'Quản lý sách', link: '/system/manane-b'
            }
        ]
    },
    { //Quản lý mượn sách
        name: 'Quản lý mượn sách',
        menus: [
            {
                name: 'Thêm đơn mượn sách', link: '/system/manane-specialty'
            },
            {
                name: 'Quản lý mượn sách', link: '/system/manane-specialty'
            },
        ]
    },
    { //Quản lý Content 
        name: 'Quản lý nội dung trang', menus: [
            {
                name: 'Sách', link: '/system/manane-handbook'
            },
            {
                name: 'Loại Sách', link: '/system/manane-handbook'
            },
            {
                name: 'Thông tin thêm', link: '/system/manane-handbook'
            }
        ]
    },
];

export const doctorMenu = [
    {
        //Quản lý kế hoạch khám bệnh
        name: 'menu.doctor.doctor', menus: [
            {
                name: 'menu.doctor.manage-schedule', link: '/doctor/manage-schedule'
            },
            {
                name: 'menu.doctor.manage-patient', link: '/doctor/manage-patient'
            },
        ]
    }
];