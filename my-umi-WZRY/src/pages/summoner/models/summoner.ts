import { Effect, Reducer, request } from 'umi';

interface summonerProps {
    summoner_description: string,
    summoner_id: number,
    summoner_name: string,
    summoner_rank: string
}

export interface SummonerModelState {
    summoners: summonerProps[]
}

export default {
    namespace: 'summoner',

    state: {
        summoners: []
    },

    effects: {
            *fetchSummoner({ payload, type }, { call, put, select }) {
            const data = yield request('/web201605/js/summoner.json')
            const localData: never[] = [];
            yield put({
                type: 'save',
                payload: {
                summoners: data || localData
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
        return history.listen(({ pathname }) => {
            if(pathname === '/summoner') {
            dispatch({
                type: 'fetchSummoner'
            })
            }
        })
        }
    }
}