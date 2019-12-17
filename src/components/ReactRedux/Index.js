import React, {Component} from 'react';
// import Input from './components/Input'
// import {asyncComponent} from 'react-async-component';
import Home from "./../Home";
// const Home = asyncComponent(() => import("./containers/Home"));
import List from "./../List";
import List_saga from "./../List-saga";
import ObjDetail from "./../ObjDetail"
// import http from "./Util/http";

// import ReactDom from "react-dom";

import {connect} from "react-redux";


import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {delListAction, initListAction, initListActionSaga, updateListAction} from "../../store/actionCreators";

// import store from "../../store";

class Index extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            name: "123123"
        }
    }

    getData() {
        // http.get("/api/shop",{},(data)=>{
        //     if(data.responeStatus === "0"){
        //         const action = initListAction(data.data.list);
        //         store.dispatch(action);
        //     }
        // })
    }

    componentWillMount() {
        this.getData();
        console.log('Component WILL MOUNT!')
    }

    componentDidMount() {
        console.log('Component DID MOUNT!')
    }

    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECEIVE PROPS!')
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/list" component={List}/>
                    <Route exact path="/list-saga" component={List_saga}/>
                    <Route exact path="/detail" component={ObjDetail}/>
                </Switch>
            </BrowserRouter>

        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Index)