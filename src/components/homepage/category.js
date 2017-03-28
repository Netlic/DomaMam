import React, { PropTypes } from 'react'
import CategoryItem from './categoryItem'

/**
 * render poloziek danej kategorie
 */
const categoryItems = (items = []) => {
  let original = items.length
  items.length = 2;
  let citems = (items.map((item, index) => {
    return <CategoryItem key={index} title={item.name} toBottom={original < 2}/>}))
  return citems
}

/**
 * vyrenderovanie kategorie
 */
const category = ({title, items = [{name:'item'},{name:'item1'}], onResize}) => {
  return (
    <div className="col-lg-4">
      <div className="col-lg-10 category col-lg-offset-1">
        <div className="category-options">
          <div className="row">
            <div className="pull-right">
              <span className="glyphicon glyphicon-fullscreen" onClick={() => {onResize(true, title, items)}}></span>
              <span className="glyphicon glyphicon-move" onClick=""></span>
              <span className="glyphicon glyphicon-heart-empty" onClick=""></span>
              <span className="glyphicon glyphicon-remove" onClick=""></span>
            </div>
          </div>
        </div>
        <div className="h1">{title}</div>
        {categoryItems(items)}
        <div className="category-dots">...</div>
      </div>
    </div>
  )
}

category.PropTypes = {
  title: PropTypes.string.isRequired
}

export default category
