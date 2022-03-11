import React from 'react'
import { NavLink } from 'react-router-dom'
export default function MyNavLink(props) {
  function computedClassName({isActive}){
    return isActive ? 'list-group-item specialClass' : 'list-group-item'
  }
  return (
    <NavLink
      className={computedClassName}
      {...props}
    />
  )
}
