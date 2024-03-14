export const adminMenu = [
    { //Quản lý người dùng 
        name: 'menu.admin.manage-shit', menus: [
            {
                name: 'menu.admin.crud', link: '/system/user-manage'
            },
            {
                name: 'menu.admin.crud-redux', link: '/system/user-redux'
            },
            {
                name: 'menu.admin.manage-doctor', link: '/system/manage-doctor',
            },
            {
                name: 'menu.doctor.manage-schedule', link: '/doctor/manage-schedule'
            },
        ]
        // ]
    },
    { //Quản lý phòng khám 
        name: 'menu.admin.clinic', menus: [
            {
                name: 'menu.admin.manage-clinic', link: '/system/manane-clinic'
            },
        ]
    },
    { //Quản lý chuyên khoa
        name: 'menu.admin.specialty',
        menus: [
            {
                name: 'menu.admin.manage-specialty', link: '/system/manane-specialty'
            },
        ]
    },
    { //Quản lý cẩm nang 
        name: 'menu.admin.handbook', menus: [
            {
                name: 'menu.admin.manage-handbook', link: '/system/manane-handbook'
            },
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