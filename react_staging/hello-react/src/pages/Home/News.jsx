import React from 'react'
import { useNavigationType, useResolvedPath } from 'react-router-dom'

export default function News() {
  console.log(useNavigationType())
  console.log('@useResolvedPath',useResolvedPath('/user?id=001&name=gaojing'))
  return (
    <ul>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
    </ul>
  )
}
