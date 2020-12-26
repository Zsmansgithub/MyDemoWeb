import { Effect, Reducer } from 'umi';
export interface HeroModelState {
  name: String;
}

export interface HeroModelType {
  namespace: 'hero';
  state: HeroModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<HeroModelState>;
  }
}

// @ts-ignore
const HeroModel: HeroModelType = {
  namespace: 'hero',

  state: {
    name: 'hero',
  },

  effects: {
    *query({ payload }, { call, put }) {

    }
  },
  reducers: {
    save(state: HeroModelState, action: { payload: HeroModelState; }) {
      return {
        ...state,
        ...action.payload,
      }
    }
  }
}

export default HeroModel;
