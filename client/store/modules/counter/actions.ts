import { ActionContext, ActionTree } from 'vuex';
import * as types from '../../mutation-type';
import * as Api from '../../../api';

// export interface
const actions: ActionTree<StoreState.Counter, any> = {
    getTodayWeather: ({ commit }, payload: StoreAction.GetTodayWeatherParam) => {
        return new Promise((resolve, reject) => {
            Api.getCityWeather(payload).then(res => {
                commit(types.GET_TODAY_WEATHER, {
                    res
                });
                resolve(res.data);
            });
        });
    },
    handleByNum: ({ commit }, payload: StoreAction.HandleNumParam) => {
        commit(types.HANDLE_BY_NUM, payload.count);
    }
};

export default actions;
