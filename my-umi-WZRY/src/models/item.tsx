import { Effect, Reducer, Subscription, request } from 'umi';
interface itemProps {
  des1: string,
  item_id: number,
  item_name: string,
  item_type: number,
  price: number,
  total_price: number
}
export interface ItemModelState {
  items: itemProps[];
  filterKey: number;
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
    filterKey: 0
  },

  effects: {
    *query({ payload }, { call, put }) {

    },
    *fetchItem({ type, payload }, { call, put, select }) {
       const data = yield request('/web201605/js/item.json')
       const localData = [];
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
