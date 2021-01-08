import { Effect, Reducer, request } from 'umi';
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
export default {
    namespace: 'item',

    state: {
        items: [],
        filterKey: 0
    },

    effects: {
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
        return history.listen(({ pathname }) => {
            if(pathname === '/item') {
            dispatch({
                type: 'fetchItem'
            })
            }
        })
        }
    }
  };