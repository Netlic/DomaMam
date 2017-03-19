import React from 'react'
import { toggleLogin } from '../../actions/login.actions'

const menuItem = ({ title, isSelected, toggle, dispatch }) => {
  let menuClass = isSelected ? 'selected-item-menu' : 'item-menu'
  if (!toggle) {
    return (
      <div className={'h4 ' + menuClass}>{title}</div>
    )
  }
  return (<div className={'h4 ' + menuClass} onClick={() => {dispatch(toggleLogin(true))}}>{title}</div>)
}

export default menuItem
