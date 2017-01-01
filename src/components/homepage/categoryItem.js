import React, { PropTypes } from 'react'

const categoryItem = ({title, toBottom = false}) => {
  return (
    <div>
        <div className={toBottom ? 'category-item to-bottom' : 'category-item'}>
          {title}
        </div>
    </div>
  )
}

categoryItem.PropTypes = {
  title: PropTypes.string.isRequired
}

export default categoryItem
