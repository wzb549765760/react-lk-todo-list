import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './reducer';
/*使用redux-sagas*/
import createSagaWiddleware from "redux-saga"

/*使用redux-thunk*/
// import thunk from "redux-thunk";


/*不使用redux-thunk*/
// const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


/*使用redux-thunk*/
// const store = createStore(reducer,applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//redux-dev-tools和redux-thunk兼容
// const composeEnhancers =
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// const enhancer = composeEnhancers(
//     applyMiddleware(thunk),
// );
// const store = createStore(reducer,enhancer);



/*使用redux-sagas*/
import mySaga from "./saga"
const sagaMiddleware = createSagaWiddleware();

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
);

const store = createStore(reducer,enhancer);
sagaMiddleware.run(mySaga);
export default store;