import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Message() {
  const navigate = useNavigate()

  const [messages] = useState([
    {
      id: '001',
      title: 'poem1',
      content: '床前明月光',
    },
    {
      id: '002',
      title: 'poem2',
      content: '疑是地上霜',
    },
    {
      id: '003',
      title: 'poem3',
      content: '举头望明月',
    },
    {
      id: '004',
      title: 'poem4',
      content: '低头思故乡',
    },
  ])
  function showDetail(m){
    navigate('detail',{
      replace: false, // true or false 
      state: {
        id: m.id,
        title: m.title,
        content: m.content
      }
    })
  }
  return (
    <div>
      <ul>
        {messages.map((m) => {
          return (
            // 路由链接
            <li key={m.id}>
              <Link to="detail" state={{
                id: m.id,
                title: m.title,
                content: m.content
              }}>{m.title}</Link>
              <button onClick={()=> showDetail(m)}>查看详情</button>
            </li>
          )
        })}
      </ul>
      <hr />
      {/* 指定路由组件的展示位置 */}
      <Outlet />
    </div>
  )
}
