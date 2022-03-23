// 改文件专门用于暴露一个store对象，整个应用只有一个store对象

// 引入createStore，专门用于创建redux中核心的store对象
import {createStore} from 'redux'

// 引入为Count组件服务的reducer
import countReducer from './count_reducer'
// 暴露store
export default createStore(countReducer)

// 默认暴露-一般暴露一次，只暴露一个东西