import React, { PropTypes } from 'react'
import CategoryItem from './categoryItem'
import $ from 'jquery'

const categoryItems = (items = []) => {
  let original = items.length
  items.length = 2;
  let citems = (items.map((item, index) => {
    return <CategoryItem key={index} title={item.name} toBottom={original < 2}/>}))
  return citems
}

const categoryDetail = (evt) => {
  let clicked = $(evt.target), category = clicked.parents('.category')
  category.toggleClass('category-expanded')
}

const category = ({title, items = [{name:'item'},{name:'item1'}]}) => {
  return (
    <div className="col-lg-4">
      <div className="col-lg-10 category col-lg-offset-1">
        <div className="category-options">
          <div className="row">
            <div className="pull-right">
              <span className="glyphicon glyphicon-fullscreen" onClick={categoryDetail}></span>
              <span className="glyphicon glyphicon-move" onClick=""></span>
              <span className="glyphicon glyphicon-heart-empty" onClick=""></span>
              <span className="glyphicon glyphicon-remove" onClick=""></span>
            </div>
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
