import { Effect, Reducer, Subscriptions, request } from 'umi';
export interface SummonerModelState {
  name: String;
}

export interface SummonerModelType {
  namespace: 'summoner';
  state: SummonerModelState;
  effects: {
    query: Effect;
    fetchSummoner: Effect;
  };
  reducers: {
    save: Reducer<SummonerModelState>;
  },
  subscriptions: {
    setup: Subscriptions
  }
}

const SummonerModel: SummonerModelType = {
  namespace: 'summoner',

  state: {
    summoner: []
  },

  effects: {
    *query({ payload }, { call, put }) {

    },
    *fetchSummoner({ payload, type }, { call, put, select }) {
      const data = yield request('/summoner.json')
      const localData = [
        {
          summoner: 'sum'
        }
      ];
      yield put({
        type: 'save',
        payload: {
          summoner: data
        }
      })
    }
  },
  reducers: {
    save(state: any, action: { payload: SummonerModelState }) {
      return {
        ...state,
        ...action.payload
      }
    }
  },
  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname, query }) => {
        if(pathname === '/summoner') {
          dispatch({
            type: 'fetchSummoner'
          })
        }
      })
    }
  }
}

export default SummonerModel;
