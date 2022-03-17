import React from 'react'
/**
 * In react-router-dom v6,"Switch" is replaced by routes "Routes",you need to update
 * the import name
 */
import { useRoutes } from 'react-router-dom'
import Header from './components/Header' // Header是一般组件
import MyNavLink from './components/MyNavLink'
import routes from './routes';
export default function App() {
  // 根据路由表生成对应的路由规则
  const element = useRoutes(routes)
  return (
    <div>
      <div className="row">
       <Header />
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <MyNavLink to="/about">About</MyNavLink>
            <MyNavLink to="/home">Home</MyNavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
