import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDOM.render(<App />, document.getElementById('root'))
// 监测redux中状态的改变，若redux中的状态发生改变，重新渲染App组件
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById('root'))
})
