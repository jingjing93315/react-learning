// 改文件专门用于暴露一个store对象，整个应用只有一个store对象

// 引入createStore，专门用于创建redux中核心的store对象
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
// 引入redux-thunk，用于支持异步action
// 暴露store 
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
