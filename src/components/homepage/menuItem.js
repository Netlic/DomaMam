import React from 'react'

const menuItem = ({ title, isSelected }) => {
  let menuClass = isSelected ? 'selected-item-menu' : 'item-menu'
  return (
    <div className={'h4 ' + menuClass}>{title}</div>
  )
}

export default menuItem
