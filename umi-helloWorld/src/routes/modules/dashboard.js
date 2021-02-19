const dashboard = [
    {
        path: '/dashboard',
        title: 'dashboard',
        component: '@/layouts/empty',
        authority: ['admin', 'user'],
        routes: [
            {
                path: '/',
                redirect: '/dashboard',
            },
            {
                path: '/dashboard',
                component: '@/pages/dasboard/index',
                title: '首页'
            },
            {
                path: '/dashboard/tab',
                title: '列表页',
                component: '@/layouts/empty',
                authority: ['admin', 'user'],
                routes: [
                    {
                        path: '/',
                        redirect: '/dashboard/tab/tableDef',
                    },
                    {
                        path: '/dashboard/tab/tableDef',
                        component: '@/pages/table-def/index',
                        title: '基础表格'
                    },
                    {
                        component: './404',
                    },
                ]
            },
            {
                component: './404',
            },
        ]
    },
]
export default dashboard
