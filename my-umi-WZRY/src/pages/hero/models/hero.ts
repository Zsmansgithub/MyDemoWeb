import { Effect, Reducer, request } from 'umi';
import { queryHeroList, getHeroDetails, getFreeHeros } from 'services/api';

export interface HeroProps {
  ename: number;
  cname: string;
  title: string;
  new_type: number;
  hero_type: number;
  skin_name: string;
}
export interface HeroModelState {
  heros: HeroProps[];
  freeheros: HeroProps[];
  filterKey: number;
  itemHover: number;
}

export default {
    state: {
      heros: [],
      freeheros: [],
      filterKey: 0,
      itemHover: 0  //因为周免英雄列表里面有一个一直是详情图，所以这里给一个标记
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
    },
    reducers: {
      save(state: any, action: { payload: any; }) {
        return {
          ...state,
          ...action.payload,
        }
      }
    },
    effects: {
      *fetchHeros({ type, payload }, { put, call, select }) {
        // const herolist = yield request('/web201605/js/herolist.json');
        const herolist = yield call(queryHeroList);
        const herodetails = yield call(getHeroDetails, { ename: 110 });
        const freeheros = yield call(getFreeHeros, JSON.stringify({
          number: 10,
        }))
        yield put({
          type: 'save',
          payload: {
            heros: herolist,
            freeheros: freeheros
          },
        });
      },
    },
  };