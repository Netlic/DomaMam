import React, { PropTypes } from 'react'
import CategoryItem from './categoryItem'

const categoryItems = (items = []) => {
  let original = items.length
  items.length = 2;
  let citems = (items.map((item, index) => {
    return <CategoryItem key={index} title={item.name} toBottom={original < 2}/>}))
  return citems
}

const category = ({title, items = [{name:'item'},{name:'item1'}]}) => {
  return (
    <div className="col-lg-4">
      <div className="col-lg-10 category col-lg-offset-1">
        <div>
          <h1>{title}</h1>
        </div>
        {categoryItems(items)}
        <div className="category-detail">...</div>
      </div>
    </div>
  )
}

category.PropTypes = {
  title: PropTypes.string.isRequired
}

export default category
