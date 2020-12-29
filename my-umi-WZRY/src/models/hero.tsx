import { Effect, Reducer, Subscription, request } from 'umi';
export interface HeroModelState {
  name: String;
}

export interface HeroModelType {
  namespace: 'hero';
  state: HeroModelState;
  effects: {
    query: Effect;
    fetchHeros: Effect;
  };
  reducers: {
    save: Reducer<HeroModelState>;
  },
  subscriptions: {
    setup: Subscription
  }
}

// @ts-ignore
const HeroModel: HeroModelType = {
  namespace: 'hero',

  state: {
    name: 'hero',
    heros: []
  },

  effects: {
    *query({ payload }, { call, put }) {

    },
    *fetchHeros({ type, payload }, { call, put, select }) {
      // const data = yield request('/web201605/js/herolist.json');
      const data = yield request('/herodetails.json', {
        method: 'POST',
        body: JSON.stringify({
          ename: 110,
        }),
      });
      const localData = [
        {
          ename: 105,
          cname: '廉颇',
          title: '正义爆轰',
          new_type: 0,
          hero_type: 3,
          skin_name: '正义爆轰|地狱岩魂',
        },
        {
          ename: 106,
          cname: '小乔',
          title: '恋之微风',
          new_type: 0,
          hero_type: 2,
          skin_name: '恋之微风|万圣前夜|天鹅之梦|纯白花嫁|缤纷独角兽',
        },
      ];
      yield put({
        type: 'save',
        payload: {
          heros: data || localData
        }
      })
    }
  },
  reducers: {
    save(state: HeroModelState, action: { payload: HeroModelState; }) {
      return {
        ...state,
        ...action.payload,
      }
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(( { pathname, query } ) => {
        if(pathname === '/hero') {
          dispatch({
            type: 'fetchHeros'
          })
        }
      })
    }
  }
}

export default HeroModel;
