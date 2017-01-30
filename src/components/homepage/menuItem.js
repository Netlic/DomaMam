import React from 'react'

const menuItem = ({ title, isSelected, toggleModal, target }) => {
  let menuClass = isSelected ? 'selected-item-menu' : 'item-menu'
  if (!toggleModal) {
    return (
      <div className={'h4 ' + menuClass}>{title}</div>
    )
  }
  return (<div className={'h4 ' + menuClass} data-toggle="modal" data-target={target}>{title}</div>)
}

export default menuItem
