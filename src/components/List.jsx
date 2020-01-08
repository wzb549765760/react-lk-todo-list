import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import store from '../store'

// import http from "../Util/http";

import {
  delListAction,
  initListAction,
  updateListAction
} from '../store/actionCreators'

class List extends Component {
  constructor(prop) {
    super(prop)
    this.state = store.getState()
    //订阅store的改变
    this._handleStoreChange = this._handleStoreChange.bind(this)
    store.subscribe(this._handleStoreChange)
  }

  // getData(){
  //     http.get("/api/shop",{},(data)=>{
  //         if(data.responeStatus === "0"){
  //             const action = initListAction(data.data.list);
  //             store.dispatch(action);
  //         }
  //     })
  // }

  componentWillMount() {
    const action = initListAction()
    store.dispatch(action)
    console.log('Component WILL MOUNT!')
  }

  _toDetail(obj) {
    this.props.history.push({ pathname: `/Detail`, state: { data: obj } })
  }

  _delList(listId) {
    //调用action
    const action = delListAction(listId)
    store.dispatch(action)
  }

  _toUpdata(obj, e) {
    let val = e.currentTarget.value,
      id = obj.id
    obj.sex = val
    const action = updateListAction(id, obj)
    store.dispatch(action)
  }

  _handleStoreChange() {
    this.setState(store.getState)
  }

  render() {
    let { list } = this.state
    console.log(list)
    if (list) {
      return (
        <div>
          <Link to="/">Home页面</Link>
          <ul>
            {list.map(v => {
              return (
                <li key={v.id}>
                  {v.name}
                  <input
                    value={v.sex}
                    onChange={e => {
                      this._toUpdata(v, e)
                    }}
                  />
                  <button
                    onClick={() => {
                      this._toDetail(v)
                    }}
                  >
                    跳转到详情页面
                  </button>
                  <button
                    onClick={() => {
                      this._delList(v.id)
                    }}
                  >
                    删除
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
  }
}

export default List
