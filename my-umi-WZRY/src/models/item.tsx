import { Effect, Reducer, Subscription, request } from 'umi';
export interface ItemModelState {
  name: String;
}

export interface ItemModelType {
  namespace: 'item';
  state: ItemModelState;
  effects: {
    query: Effect;
    fetchItem: Effect;
  };
  reducers: {
    save: Reducer<ItemModelState>;
  },
  subscriptions: {
    setup: Subscription
  }
}

const ItemModel: ItemModelType = {
  namespace: 'item',

  state: {
    items: [],
  },

  effects: {
    *query({ payload }, { call, put }) {

    },
    *fetchItem({ type, payload }, { call, put, select }) {
      const data = yield request('/item.json', {
        method: "POST",
        body: JSON.stringify({a: 111})
      })
     const localData = [
       {
         name: 'item'
       }
     ];
     yield put({
       type: 'save',
       payload: {
         items: data
       }
     })
    }
  },
  reducers: {
    save(state: any, action: { payload: ItemModelState }) {
      return {
        ...state,
        ...action.payload
      }
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if(pathname === '/item') {
          dispatch({
            type: 'fetchItem'
          })
        }
      })
    }
  }
}

export default ItemModel;
