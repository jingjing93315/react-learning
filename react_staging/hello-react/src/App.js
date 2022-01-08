// 创建外壳组件
// 这种引入方式表明，文件中使用了多种暴露方式
import React, { Component } from 'react' ;
import Hello from './components/Hello';
import Welcome from './components/Welcome';
// 创建并暴露APP
export default class App extends Component {
  render(){
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    )
  }
}