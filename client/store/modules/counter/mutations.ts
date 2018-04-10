/**
 * 设置当前数值
 * @param {Object} state
 * @param {Object} response
 */
export function HANDLE_BY_NUM (state: StoreState.Counter, response: number) {
    state.count = response;
}
