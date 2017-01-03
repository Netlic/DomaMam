import React, { PropTypes } from 'react'

const CategoriesList = ({ title, children }) => (
  <div className="col-lg-12">
    <div className="col-lg-offset-1">
      <h3>{title}</h3>
    </div>
    <div>{children}</div>
  </div>
)

CategoriesList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default CategoriesList
