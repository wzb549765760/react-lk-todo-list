import React, {Component} from 'react';
// import Input from './components/Input'
// import {asyncComponent} from 'react-async-component';
import Home from "./components/Home";
// const Home = asyncComponent(() => import("./containers/Home"));
import List from "./components/List";
import ObjDetail from "./components/ObjDetail"
import http from "./Util/http";

// import ReactDom from "react-dom";


import {Switch, Route, BrowserRouter} from 'react-router-dom'; // 模块导入 | React Router 包含了以下这几个主要模块

export default class App extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            name: "123123"
        }
    }

    getData() {
        // http.post("hs-deposit/api/activity/applyBonus", {
        //     "mchtNo": "023310109121794",
        //     "snNo": "013960180223",
        //     "termNo": "70001156"
        // }, (data) => {
        //     // alert(JSON.stringify(data))
        // });
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
                    <Route exact path="/detail" component={ObjDetail}/>
                </Switch>
            </BrowserRouter>

        )
    }

}