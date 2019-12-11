import {DEL_LIST_ITEM, INIT_LIST_ITEM, UPDATE_LIST_ITEM,INIT_LIST_ITEM_SAGA} from './actionTypes'
import http from "../Util/http";
import store from "./index";

/*删除一条记录*/
export const delListAction = (listId) => ({
    type: DEL_LIST_ITEM,
    listId
});

/*修改一条记录*/
export const updateListAction = (listId, obj) => ({
    type: UPDATE_LIST_ITEM,
    listId,
    obj
});

/*初始化list记录*/

export const initListAction1 = (list)=>({
    type:INIT_LIST_ITEM,
    list
});

export const initListActionSaga = ()=>({
    type:INIT_LIST_ITEM_SAGA,
});


/*redux 的中间件 redux-thunk  能让放函数，不仅仅是对象  存放网络请求的异步操作*/

export const initListAction = () => {
    return (dispatch) => {
        http.get("/api/shop", {}, (data) => {
            const list = data.data.list;
            if (data.responeStatus === "0") {
                store.dispatch({
                    type:INIT_LIST_ITEM,
                    list
                });
            }
        })
    }
};

