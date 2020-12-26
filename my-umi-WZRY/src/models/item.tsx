import { Effect, Reducer } from 'umi';
export interface ItemModelState {
  name: String;
}

export interface ItemModelType {
  namespace: 'item';
  state: ItemModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<ItemModelState>;
  }
}

const ItemModel: ItemModelType = {
  namespace: 'item',

  state: {
    name: 'item',
  },

  effects: {
    *query({ payload }, { call, put }) {

    }
  },
  reducers: {
    save(state: any, action: { payload: ItemModelState }) {
      return {
        ...state,
        ...action.payload
      }
    }
  }
}

export default ItemModel;
