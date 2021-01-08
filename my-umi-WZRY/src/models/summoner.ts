// import { Effect, Reducer, Subscriptions, request } from 'umi';

// interface summonerProps {
//   summoner_description: string,
//   summoner_id: number,
//   summoner_name: string,
//   summoner_rank: string
// }
// export interface SummonerModelState {
//   summoners: summonerProps[]
// }
// export interface SummonerModelType {
//   namespace: 'summoner';
//   state: SummonerModelState;
//   effects: {
//     query: Effect;
//     fetchSummoner: Effect;
//   };
//   reducers: {
//     save: Reducer<SummonerModelState>;
//   },
//   subscriptions: {
//     setup: Subscriptions
//   }
// }

// // @ts-ignore
// const SummonerModel: SummonerModelType = {
//   namespace: 'summoner',

//   state: {
//     summoners: []
//   },

//   effects: {
//     *query({ payload }, { call, put }) {

//     },
//     *fetchSummoner({ payload, type }, { call, put, select }) {
//       const data = yield request('/web201605/js/summoner.json')
//       const localData: never[] = [];
//       yield put({
//         type: 'save',
//         payload: {
//           summoners: data || localData
//         }
//       })
//     }
//   },
//   reducers: {
//     save(state: any, action: { payload: SummonerModelState }) {
//       return {
//         ...state,
//         ...action.payload
//       }
//     }
//   },
//   subscriptions: {
//     setup({ history, dispatch }) {
//       return history.listen(({ pathname }) => {
//         if(pathname === '/summoner') {
//           dispatch({
//             type: 'fetchSummoner'
//           })
//         }
//       })
//     }
//   }
// }

// export default SummonerModel;
