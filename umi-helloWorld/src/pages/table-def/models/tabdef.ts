import { getTableDefList } from '@/services/api.js';

export interface TableProps {
    key: string;
    age: string;
    name: string;
    address: string;
    tag: string;
}
export interface QueryProps {
    age: number;
    name: string;
    tag: string;
    page: number;
    limit: number;
}
export interface TableModelState {
    data: TableProps[];
    query: QueryProps;
}

export default {
    namespace: 'tableDef',
    state: {
        data: [],
        query: {
            age: undefined,
            // name: null,
            name: 'Jim',
            tag: undefined,
            page: 1,
            limit: 20,
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(( { pathname, query } ) => {
                if(pathname === '/table/tableDef') {
                    dispatch({
                        type: 'fetchTableData'
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
      *fetchTableData({ type, payload }, { put, call, select }) {
        const query = yield select(state => state.tableDef.query);
        const data = yield call(getTableDefList, JSON.stringify(query));
        yield put({
            type: 'save',
            payload: {
                data,
            },
        });
      },
    },
  };
