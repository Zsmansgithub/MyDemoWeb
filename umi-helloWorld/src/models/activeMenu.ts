import { getDvaApp } from 'umi';
import { menuData } from '@/utils/tools.js';

export interface activeMenuState {
    openKeys: [];
    activePath: string;
}

export default {
    namespace: 'activeMenu',
    state: {
        openKeys: [],
        activePath: [],
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(( { pathname } ) => {
                if(getDvaApp()._store.getState().activeMenu.activePath !== pathname && pathname !== '/') {
                    let activePath: string;
                    let activeMenu: any;
                    let openKeys: any;
                    function findPathName(data: any, key: any) {
                            data.forEach((item: any) => {
                            if(item.path === pathname) {
                                openKeys = key;
                                activeMenu = item;
                                activePath = item.key;
                                return;
                            }
                            if(item.routes) {
                                findPathName(item.routes, [...key, item.key])
                            }
                        });
                    }
                    menuData.forEach((item: any) => {
                        const key = [item.key];
                        if(!activePath) findPathName(item.routes, key)
                    })
                    dispatch({
                        type: 'tagsview/addTags',
                        payload: activeMenu
                    })
                    dispatch({
                        type: 'saveMenu',
                        payload: { activePath, openKeys }
                    })
                }
            })
        },
    },
    reducers: {
        saveMenu(state: any, action: { payload: any; }) {
            return {
            ...state,
            ...action.payload,
            }
        },
    },
};
