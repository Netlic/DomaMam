import React, { Component } from 'react'
import MenuItem from './menuItem'
import { connect } from 'react-redux'
import { Glyphicon, DropdownButton } from 'react-bootstrap'

const RenderUserMenu = ({ logged }) => {
  if (logged) {
    return <div className="pull-right"><div className="item-menu"><Glyphicon glyph="user" /></div></div>
  }
  return null
}

/**
 * vykreslenie uzivatelskeho menu
 */
class menu extends Component {
  render(){
    let menuItems = this.props.menuItems
    return (
      <div className="col-lg-12 menu">
      { menuItems.map((itemObj, index) => <MenuItem key={index} {...itemObj} dispatch={this.props.dispatch}/>) }
      <div className="search-item-menu">
        <input type="text" />
        <span className="glyphicon glyphicon-search text-center"></span>
      </div>
      <RenderUserMenu logged={this.props.logged}/>
    </div>)
  }
}

const getUserMenuItems = state => ({
  menuItems: state.menu.items,
  logged: state.login.loggedIn
})

export default connect(getUserMenuItems)(menu)
