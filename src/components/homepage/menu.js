import React from 'react'
import MenuItem from './menuItem'
import { connect } from 'react-redux'

const menu = ({ menuItems }) => {
  return (
    <div className="col-lg-12 menu">
      { menuItems.map((name, index) => <MenuItem key={index} title={name} toggleModal={true} target={'#login-modal'}/>)}
      {/*<MenuItem title={'Doma mám'} isSelected={true}/>
    <MenuItem title={'Prihlásiť'} toggleModal={true} target={'#login-modal'}/>*/}
    </div>
  )
}

const getUserMenuItems = state => ({
  menuItems: state.menu.items
})

export default connect(getUserMenuItems)(menu)
