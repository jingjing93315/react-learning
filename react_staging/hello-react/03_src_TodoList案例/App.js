// 创建外壳组件
// 这种引入方式表明，文件中使用了多种暴露方式
import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
// 创建并暴露APP
export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里
  state = {
    todos: [
      {
        id: '001',
        name: 'eat',
        done: false,
      },
      {
        id: '002',
        name: 'sleep',
        done: true,
      },
      {
        id: '003',
        name: 'learn',
        done: false,
      },
    ],
  }
   
  addTodo = todoObj => {
    console.log('App', todoObj)
    const { todos } = this.state
    //追加一个todo
    const newTodos = [todoObj,...todos]
    this.setState({
      todos: newTodos
    })
  }

  updateTodo = (id, done) => {
    const {todos} = this.state
    // 匹配处理数据
    const newTodos = todos.map(todo => {
      if(todo.id === id)return {...todo, done}
      else return todo
    })
    this.setState({
      todos: newTodos
    })
  }

  deleteTodo = (id) => {
    const {todos} = this.state
    // 删除指定id的todo对象
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: newTodos
    })
  }

  checkAllTodo = (done) => {
    const {todos} = this.state 
    const newTodos =  todos.map(todo => {
      return {...todo, done}
    })
    this.setState({
      todos: newTodos
    })
  }
  //清除所有已完成的
  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter(todo => {
      return !todo.done
    })
    this.setState({
      todos: newTodos
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo = { this.addTodo } />
            <List todos={todos} updateTodo = {this.updateTodo} deleteTodo ={this.deleteTodo} />
            <Footer todos = {todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
          </div>
        </div>
      </div>
    )
  }
}
