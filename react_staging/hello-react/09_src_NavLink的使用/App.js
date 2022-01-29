import React, { Component } from 'react'

import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home' // Home是路由组件
import About from './pages/About'
import Header from './components/Header'; // Header是一般组件
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Header />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中，通过a标签跳转不同页面 */}
              {/* <a className="list-group-item" href="./about.html">
                  About
                </a>
                <a className="list-group-item active" href="./home.html">
                  Home
                </a> */}
              {/* 在react中通过路由链接实现切换组件 */}
              <NavLink className="list-group-item" to="/about">
                About
              </NavLink>
              <NavLink className="list-group-item" to="/home">
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Routes>
                  <Route path="/about" element={<About/>} />
                  <Route path="/home" element={<Home/>} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
