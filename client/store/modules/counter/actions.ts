import { ActionContext } from 'vuex';

interface HandleByNum {
    (context: ActionContext<StoreState.Counter, any>,
        count: number): void;
}
/**
 * The action for handle num
 */
export const handleByNum: HandleByNum = ({ commit }, count) => {
    console.log(typeof count);
    commit('HANDLE_BY_NUM', count);
};
