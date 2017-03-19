import React, { Component } from 'react'
import MenuItem from './menuItem'
import { connect } from 'react-redux'

/**
 * vykreslenie uzivatelskeho menu
 */
class menu extends Component {
  render(){
    let menuItems = this.props.menuItems
    return (
      <div className="col-lg-12 menu">
      { menuItems.map((itemObj, index) => <MenuItem key={index} {...itemObj} dispatch={this.props.dispatch}/>) }
    </div>)
  }
}

const getUserMenuItems = state => ({
  menuItems: state.menu.items
})

export default connect(getUserMenuItems)(menu)
