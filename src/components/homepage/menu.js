import React, { Component } from 'react'
import MenuItem from './menuItem'
import { connect } from 'react-redux'
import { Glyphicon, Dropdown } from 'react-bootstrap'

const RenderUserMenu = ({ logged }) => {
  if (logged) {
    return (<div className="pull-right">
              <div className="user-item-menu" style={{paddingTop:'2px', paddingBottom: '2px'}}>
                <Dropdown id="user-dropdown">
                  <Dropdown.Toggle>
                    <Glyphicon glyph="user" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="super-colors">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3" active>Active Item</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>)
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
