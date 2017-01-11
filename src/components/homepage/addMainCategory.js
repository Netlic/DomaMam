import React from 'react'
//import CategoryForm from './categoryForm'
import AddCategory from '../../containers/homepage/AddCategory'
import $ from 'jquery'

const showNewCategoryForm = () => {
    $(".category-add").find('span').addClass('hidden')
    $('.category-form').removeClass('hidden')
}

const addMainCategory = ({ onCategoryAdd }) => {
  return (
    <div
      className="col-lg-4"
      onClick={showNewCategoryForm}>
      <div className="col-lg-8 category col-lg-offset-2 category-add">
        <div className="col-lg-6 col-lg-offset-2">
          <span className="glyphicon glyphicon-plus plus-category col-lg-offset-4"></span>
        </div>
        <div className="col-lg-12 hidden category-form">
          <AddCategory/>
        </div>
      </div>
    </div>
  )
}

export default addMainCategory
