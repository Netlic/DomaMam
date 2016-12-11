import React, { PropTypes } from 'react'

const CategoriesList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
)

CategoriesList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default CategoriesList
