import routes from '@/routes/index.js';

export let menuData = routes[0].routes;

const breadcrumbList = {};
let key = 0;
function addBreadcrumb(route, name) {
    route.forEach(function(item) {
        item.key = `menu_${++key}`;
        const newName = [...name, item.title];
        if(item.routes && item.routes.length) {
            addBreadcrumb(item.routes, newName);
        }
        if(item.path && item.path !== '/') { breadcrumbList[item.path] = newName}
    });
}
addBreadcrumb(menuData, [routes[0].title]);
export const breadcrumbData = breadcrumbList;

export const rootSubmenuKeys = menuData.map(item => item.key);

export default {
    menuData,
    rootSubmenuKeys,
    breadcrumbData,
}