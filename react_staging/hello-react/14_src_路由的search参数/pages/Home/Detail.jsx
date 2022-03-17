import React from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'

export default function Detail() {
  let [search, setSearch] = useSearchParams()
  const id = search.get('id')
  const title = search.get('title')
  const content = search.get('content')
  const x = useLocation()
  console.log('@',x)
  return (
    <ul>
      <li><button onClick={() => setSearch('id=005&title=哈哈&content=一线蓝光')}>点我更新一下收到的search参数</button></li>
      <li>编号：{id}</li>
      <li>标题：{title}</li>
      <li>内容：{content}</li>
    </ul>
  )
}
