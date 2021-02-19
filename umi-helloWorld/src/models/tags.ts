import { history, getDvaApp } from 'umi';

export interface visitedViews {
  path: string;
  title: string;
  key: string;
  icon: string;
  component: string;
}
export interface visitedViewState {
  visitedViews: visitedViews[];
  activeRoute: string;
}

export default {
  namespace: 'tagsview',
  state: {
    visitedViews: [
      {
        path: '/dashboard',
        component: '',
        key: '1',
        title: '首页',
        icon: '',
      },
    ],
    activeRoute: '/',
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (getDvaApp()._store.getState().tagsview.activeRoute !== pathname && pathname !== '/') {
          dispatch({
            type: 'updateActveRoute',
            payload: { activeRoute: pathname },
          });
        }
      });
    },
  },
  reducers: {
    updateActveRoute(state: any, action: { payload: any }) {
      return {
        ...state,
        ...action.payload,
      };
    },
    addTags(state: any, action: { payload: any }) {
      let { visitedViews } = state;
      if (
        action.payload && !visitedViews.some((view: any) => view.path === action.payload.path)
      ) {
        visitedViews.push(action.payload);
      }
      return {
        ...state,
        visitedViews,
      };
    },
    removeTags(state: any, action: { payload: any }) {
      let { visitedViews } = state;
      const idx = visitedViews.findIndex(
        (view: any) => view.path === action.payload.path,
      );
      if (idx > 0) {
        visitedViews.splice(idx, 1);
        history.push(visitedViews[idx - 1].path);
      }
      return {
        ...state,
        visitedViews,
      };
    },
  },
};
