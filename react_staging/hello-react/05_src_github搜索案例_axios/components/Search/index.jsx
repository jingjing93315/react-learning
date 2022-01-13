import React, { Component } from 'react'
import axios from 'axios';
export default class Search extends Component {
  handleSearch = () => {
    // 获取用户输入
    // 常规结构赋值
    // const  { value } = this.keyWordElement
    // 连续结构赋值+重命名 keyWordElement 没有定义
    const { keyWordElement: {value: keyWord} } = this
    // 发送请求前通知App更新状态
    this.props.updateAppState({
      isFirst:false,
      isLoading: true
    })
    // 发送网络请求
    axios.get(`/api/search/users?q=${keyWord}`).then(res => {
      // 请求成功后通知App更新状态
      this.props.updateAppState({
        isLoading: false,
        users: res.data.items
      })
    }, error => {
      console.log(error)
      // 失败后通知App更新状态
      this.props.updateAppState({
        isLoading: false,
        err: error.message
      })
    })
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </section>
    )
  }
}
