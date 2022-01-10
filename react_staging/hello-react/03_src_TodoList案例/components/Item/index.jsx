import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  state = { mouse: false } // 标识鼠标移入移出
  // 鼠标移入移出回调
  handleMouse = (flag) => {
    return () => {
      this.setState({
        mouse: flag
      })
    }
  }
  // 勾选/取消勾选某一个todo的回调
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked)
    }
  }
  handleDelete = (id) => {
    if(window.confirm('确定删除么?')){
      this.props.deleteTodo(id)
    }
  }
  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input checked={done} onChange={this.handleCheck(id)} type="checkbox" />
          <span>{name}</span>
        </label>
        <button onClick={() => {
          this.handleDelete(id)
        }} className="btn btn-danger" style={{ display: mouse ? 'block': 'none' }}>
          删除
        </button>
      </li>
    )
  }
}
