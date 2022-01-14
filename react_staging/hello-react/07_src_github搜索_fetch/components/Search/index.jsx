import React, { Component } from 'react'
// import axios from 'axios';
import PubSub from 'pubsub-js'
export default class Search extends Component {
  handleSearch = async () => {
    // 获取用户输入
    // 常规结构赋值
    // const  { value } = this.keyWordElement
    // 连续结构赋值+重命名 keyWordElement 没有定义
    const {
      keyWordElement: { value: keyWord },
    } = this
    // 发送请求前通知List更新状态
    PubSub.publish('updateState', {
      isFirst: false,
      isLoading: true,
    })
    //#region
    // 发送网络请求-axios
    // axios.get(`/api/search/users?q=${keyWord}`).then(res => {
    //   // 请求成功后通知List更新状态
    //   PubSub.publish('updateState', {
    //     isLoading: false,
    //     users: res.data.items
    //   })
    // }, error => {
    //   console.log(error)
    //   PubSub.publish('updateState', {
    //     isLoading: false,
    //     err: error.message
    //   })
    // })
    //#endregion
    // 发送网络请求-fetch
    // fetch(`/api/search/users2?q=${keyWord}`).then(response=>{
    //   return response.json()
    // }
    // ).then(
    //   response=> {
    //     console.log('获取数据成功了',response)
    //   }
    // ).catch((error)=> {
    //   // 失败统一回调处理
    //   console.log(error)
    // })
    // fetch 请求-关注分离
    try {
      const response = await fetch(`/api/search/users2?q=${keyWord}`)
      const data = await response.json()
      PubSub.publish('updateState', {
        isLoading: false,
        users: data.items
      })
    } catch (error) {
      PubSub.publish('updateState', {
        isLoading: false,
        err: error.message
      })
      console.log('请求出错', error)
    }
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="enter the name you search"
          />&nbsp;
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </section>
    )
  }
}
