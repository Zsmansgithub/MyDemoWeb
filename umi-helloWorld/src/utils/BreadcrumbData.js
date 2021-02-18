import routes from '@/routes/index.js';
const breadcrumbData = {};
function addBreadcrumb(route, name) {
    route.forEach(function(item) {
        const newName = [...name, item.title]
        if(item.routes && item.routes.length) {
            addBreadcrumb(item.routes, newName)
        }
        if(item.path && item.path !== '/') { breadcrumbData[item.path] = newName}
    });
}
addBreadcrumb(routes[0].routes, [routes[0].title])
export default breadcrumbData