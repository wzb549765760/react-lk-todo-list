import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import store from "./store";

/*react-redux*/
import Index from "./components/ReactRedux/Index"

import {Provider} from "react-redux";
/* react-redux 顶层传递 store  让下层组件都能使用到  */
const App = (
    <Provider store={store}>
        <Index/>
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
