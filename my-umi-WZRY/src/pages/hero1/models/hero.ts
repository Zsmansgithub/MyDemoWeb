// import { Effect, Reducer, Subscription, request } from 'umi';
// import { queryHeroList, getHeroDetails, getFreeHeros } from 'services/api';

// export interface HeroProps1 {
//   ename: number;
//   cname: string;
//   title: string;
//   new_type: number;
//   hero_type: number;
//   skin_name: string;
// }
// export interface HeroModelState1 {
//   heros: HeroProps1[];
//   freeheros: HeroProps1[];
//   filterKey: number;
//   itemHover: number;
// }

// export interface HeroModelType1 {
//   namespace: 'hero1';
//   state: HeroModelState1;
//   effects: {
//     fetchHeros: Effect;
//   };
//   reducers: {
//     save: Reducer<HeroModelState1>;
//   },
//   subscriptions: {
//     setup: Subscription
//   }
// }
// const HeroModel1: HeroModelType1 = {
// // export default {
//     namespace: 'hero1',
//     state: {
//       heros: [],
//       freeheros: [],
//       filterKey: 0,
//       itemHover: 0  //因为周免英雄列表里面有一个一直是详情图，所以这里给一个标记
//     },
//     subscriptions: {
//         setup({ dispatch, history }) {
//           return history.listen(( { pathname, query } ) => {
//             if(pathname === '/hero1') {
//               dispatch({
//                 type: 'fetchHeros'
//               })
//             }
//           })
//         }
//     },
//     reducers: {
//       save(state: any, action: { payload: any; }) {
//         return {
//           ...state,
//           ...action.payload,
//         }
//       }
//     },
//     effects: {
//       *fetchHeros({ type, payload }, { put, call, select }) {
//         // const herolist = yield request('/web201605/js/herolist.json');
//         const herolist = yield call(queryHeroList);
//         const herodetails = yield call(getHeroDetails, { ename: 110 });
//         const freeheros = yield call(getFreeHeros, JSON.stringify({
//           number: 5,
//         }))
//         yield put({
//           type: 'save',
//           payload: {
//             heros: herolist,
//             freeheros: freeheros
//           },
//         });
//       },
//     },
//   };

//   export default HeroModel1

import { Effect, Reducer, request } from 'umi';
import { queryHeroList, getHeroDetails, getFreeHeros } from 'services/api';

export interface HeroProps1 {
  ename: number;
  cname: string;
  title: string;
  new_type: number;
  hero_type: number;
  skin_name: string;
}
export interface HeroModelState1 {
  heros: HeroProps1[];
  freeheros: HeroProps1[];
  filterKey: number;
  itemHover: number;
}

export default {
    namespace: 'herocopy',
    state: {
      heros: [],
      freeheros: [],
      filterKey: 0,
      itemHover: 0  //因为周免英雄列表里面有一个一直是详情图，所以这里给一个标记
    },
    subscriptions: {
        setup({ dispatch, history }) {
          return history.listen(( { pathname, query } ) => {
            if(pathname === '/hero1') {
              dispatch({
                type: 'fetchHeros'
              })
            }
          })
        }
    },
    reducers: {
      save(state: any, action: { payload: any; }) {
        console.log(action)
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
          number: 5,
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


