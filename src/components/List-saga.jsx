import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {delListAction, initListAction, initListActionSaga, updateListAction} from "../store/actionCreators";
import {connect} from "react-redux";


// import http from "../Util/http";



// import {delListAction, initListAction1, updateListAction} from '../store/actionCreators';
// import {delListAction, updateListAction,initListActionSaga} from '../store/actionCreators';

class List extends Component {
    constructor(prop) {
        super(prop);
        // this.state = store.getState();
        // //订阅store的改变
        // this._handleStoreChange = this._handleStoreChange.bind(this);
        // store.subscribe(this._handleStoreChange);
    }

    // getData(){
    //     http.get("/api/shop",{},(data)=>{
    //         if(data.responeStatus === "0"){
    //             const action = initListAction1(data.data.list);
    //             store.dispatch(action);
    //         }
    //     })
    // }


    componentWillMount() {
        // this.getData()
        this.props.initListSaga()
        console.log('Component WILL MOUNT!')
    }

    _toDetail(obj) {
        this.props.history.push({pathname: `/Detail`, state: {data: obj}})
    }

    _delList(listId){
        //调用action
        this.props.delList(listId)
        // const  action = delListAction(listId);
        // store.dispatch(action)
    }

    _toUpdata(obj,e){
        let val = e.currentTarget.value,id = obj.id;
        obj.sex = val;
        this.props.updateList(id,obj)
        // const action = updateListAction(id,obj);
        // store.dispatch(action);
    }

    // _handleStoreChange(){
    //     this.setState(store.getState)
    // }

    render() {
        let {list} = this.props;
        console.log(list);
        if(list){
            return (
                <div>
                    <Link to="/">Home页面</Link>
                    <ul>
                        {
                            list.map((v) => {
                                return <li key={v.id}>
                                    {v.name}
                                    <input value= {v.sex} onChange={(e)=>{
                                        this._toUpdata(v,e)
                                    }}/>
                                    <button onClick={() => {
                                        this._toDetail(v)
                                    }}>跳转到详情页面
                                    </button>
                                    <button onClick={()=>{
                                        this._delList(v.id)
                                    }}>删除</button>
                                </li>
                            })
                        }

                    </ul>
                </div>
            )
        }

    }
}
/*mapDispatchToProps  将redux里面的所有的action 配发给所有的组件*/
const mapDispatchToProps = (dispatch) => {
    return {
        getList() {
            const action = initListAction();
            dispatch(action);
        },
        delList(listId) {
            const action = delListAction(listId);
            dispatch(action)
        },
        updateList(id, obj) {
            const action = updateListAction(id, obj);
            dispatch(action)
        },
        initListSaga(){
            const action = initListActionSaga();
            dispatch(action);
        }
    }
};

const mapStateToProps = (state) => {
    return {
        list:state.list
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(List);