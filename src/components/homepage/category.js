import React, { PropTypes } from 'react'
import CategoryItem from './categoryItem'
import $ from 'jquery'

var categoryHeight, categoryWidth

const categoryItems = (items = []) => {
  let original = items.length
  items.length = 2;
  let citems = (items.map((item, index) => {
    return <CategoryItem key={index} title={item.name} toBottom={original < 2}/>}))
  return citems
}

const categoryDetail = (evt) => {
  let clicked = $(evt.target), category = clicked.parents('.category')
  categoryHeight = category.height()
  categoryWidth = parseFloat(category.width()) + parseFloat(category.css('padding-left')) + parseFloat(category.css('padding-right'))
  category.toggleClass('category-expanded')
  
}

const category = ({title, items = [{name:'item'},{name:'item1'}]}) => {
  return (
    <div className="col-lg-4">
      <div className="col-lg-10 category col-lg-offset-1">
        <div className="category-options">
          <div className="col-lg-offset-6">
            <span className="glyphicon glyphicon-fullscreen" onClick={categoryDetail}></span>
            <span className="glyphicon glyphicon-move" onClick=""></span>
            <span className="glyphicon glyphicon-heart-empty" onClick=""></span>
            <span className="glyphicon glyphicon-remove" onClick=""></span>
          </div>
        </div>
        <div className="h1">{title}</div>
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
