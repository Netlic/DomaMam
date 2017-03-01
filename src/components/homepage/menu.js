import React from 'react'
import MenuItem from './menuItem'
import { connect } from 'react-redux'

const menu = ({ menuItems }) => {
  return (
    <div className="col-lg-12 menu">
      { menuItems.map((itemObj, index) => <MenuItem key={index} {...itemObj}/>) }
    </div>
  )
}

const getUserMenuItems = state => ({
  menuItems: state.menu.items
})

export default connect(getUserMenuItems)(menu)
