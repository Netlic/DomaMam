import React, { PropTypes } from 'react'

const category = ({title}) => {
  return (
    <div>
      {title}
    </div>
  )
}

category.PropTypes = {
  title: PropTypes.string.isRequired
}

export default category
