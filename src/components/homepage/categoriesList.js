import React, { PropTypes } from 'react'
import Menu from './menu'

const CategoriesList = ({ children }) => (
  <div className="col-lg-8">
    <Menu/>
    <div>{children}</div>
  </div>
)

CategoriesList.propTypes = {
  children: PropTypes.node
}

export default CategoriesList
