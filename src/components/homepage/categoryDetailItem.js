import React, { PropTypes } from 'react'

const categoryDetailItem = ({title}) => {
  return (
    <div className="col-lg-12 text-center">
        <div className="category-detail-item col-lg-12">
          {title}
        </div>
    </div>
  )
}

categoryDetailItem.PropTypes = {
  title: PropTypes.string.isRequired
}

export default categoryDetailItem
