import {DEL_LIST_ITEM, INIT_LIST_ITEM, UPDATE_LIST_ITEM} from './actionTypes'

/*删除一条记录*/
export const delListAction = (listId) => ({
    type: DEL_LIST_ITEM,
    listId
});

/*修改一条记录*/
export const updateListAction = (listId,obj) => ({
    type: UPDATE_LIST_ITEM,
    listId,
    obj
});

/*初始化list记录*/

export const initListAction = (list)=>({
    type:INIT_LIST_ITEM,
    list
});