// 改文件专门用于暴露一个store对象，整个应用只有一个store对象

// 引入createStore，专门用于创建redux中核心的store对象
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
// 引入为Count组件服务的reducer
import countReducer from './reducers/count'

import personReducer from './reducers/person'

// 汇总所有的reducer变为一个总的
 const allReducer = combineReducers({
  sum: countReducer,
  persons: personReducer
 })
// 引入redux-thunk，用于支持异步action
// 暴露store 
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
