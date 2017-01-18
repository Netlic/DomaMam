import React from 'react'
import MenuItem from './menuItem'

const menu = () => {
  return (
    <div className="col-lg-12 menu">
      <MenuItem title={'Doma mám'} isSelected={true}/>
      <MenuItem title={'Prihlásiť'} toggleModal={true} target={'#login-modal'}/>
    </div>
  )
}

export default menu
