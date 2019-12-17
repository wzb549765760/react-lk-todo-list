import {DEL_LIST_ITEM, INIT_LIST_ITEM, UPDATE_LIST_ITEM} from './actionTypes'
//默认数据
const defaultState = {
    name: "123",
    list: []
};
export default (state = defaultState, action) => {
    console.log(state);
    console.log(action);
    let newStats = null;
    /*1 删除一条list*/
    if (action.type === DEL_LIST_ITEM) {
        newStats = JSON.parse(JSON.stringify(state));
        newStats.list.forEach((list, index) => {
            if (list.id === action.listId) {
                newStats.list.splice(index, 1);
            }
        });
        return newStats;
    } else if (action.type === UPDATE_LIST_ITEM) {
        newStats = JSON.parse(JSON.stringify(state));
        newStats.list.forEach((list, index) => {
            if (list.id === action.listId) {
                newStats[index] = action.obj;
            }
        });
        return newStats;
    } else if (action.type === INIT_LIST_ITEM) {
        newStats = JSON.parse(JSON.stringify(state));
        newStats.list = action.list;
        return newStats;
    }

    return state;
}