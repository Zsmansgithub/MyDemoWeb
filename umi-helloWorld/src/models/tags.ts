import { history } from 'umi';

export interface visitedViews {
    path: string;
    title: string;
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
          title: '首页',
          icon: ''
        },
      ],
      activeRoute: '/'
    },
    subscriptions: {
      setup({ dispatch, history }) {
        return history.listen(( { pathname } ) => {
            dispatch({
              type: 'updateActveRoute',
              payload: { activeRoute: pathname }
            })
        })
      },
  },
  reducers: {
    updateActveRoute(state: any, action: { payload: any; }) {
      return {
        ...state,
        ...action.payload,
      }
    },
    addTags(state: any, action: { payload: any; }) {
      let { visitedViews } = state;
      if(!visitedViews.some((view: any) => view.path === action.payload.path )) {
        visitedViews.push(action.payload)
      }
      return {
        ...state,
        visitedViews
      };
    },
    removeTags(state: any, action: { payload: any; }) {
      let { visitedViews } = state;
      const idx = visitedViews.findIndex((view: any) => view.path === action.payload.path );
      if(idx > 0) {
        visitedViews.splice(idx, 1);
        history.push(visitedViews[idx - 1].path)
      }
      return {
        ...state,
        visitedViews
      };
    },
  },
};
