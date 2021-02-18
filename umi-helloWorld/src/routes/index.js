// const modulesFiles = require.context('./modules', false, /\.js$/)

// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//     const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//     const value = modulesFiles(modulePath)
//     modules[moduleName] = value.default
//     return modules
// }, {})
// console.log(modules)
import dashboard from './modules/dashboard.js';
import table from './modules/table.js';
const routes = [
    { 
        path: '/',
        component: '@/layouts/index',
        title: 'pyy-首页',
        routes: [
            ...dashboard,
            ...table,
        ]
    },
    {
        component: './404',
    },
]
export default routes