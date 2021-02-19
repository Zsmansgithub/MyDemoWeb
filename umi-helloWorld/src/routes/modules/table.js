const table = [
    {
        path: '/table',
        title: '列表页',
        component: '@/layouts/empty',
        authority: ['admin', 'user'],
        routes: [
            {
                path: '/table/tableDef',
                component: '@/pages/table-def/index',
                title: '基础表格',
                // hidden: true,
            },
            {
                component: './404',
            },
        ]
    },
]
export default table
