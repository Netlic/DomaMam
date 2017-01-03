import React from 'react'
import CategoryForm from './categoryForm'
import $ from 'jquery'

const showNewCategoryForm = () => {
  /*$(".category-add").addClass('category-adding').addClass('col-lg-12')
    .parent().removeClass('col-lg-4').addClass('col-lg-6').find('span')
    .addClass('hidden')*/
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
          <CategoryForm/>
        </div>
      </div>
    </div>
  )
}

export default addMainCategory
