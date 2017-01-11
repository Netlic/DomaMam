import React from 'react'
import $ from 'jquery'

const submit = (e) => {
  if (e.keyCode === 13) {
    $(e.target).parent().next().click()
  }
}

const addCategory = e => {
  e.preventDefault()
  let category = $('#categoryName').val()
}

const CategoryForm = ({ dispatch }) => {
  return (
    <div className="col-lg-12">
      <form onSubmit={addCategory}>
        <div className="form-group">
          <label htmlFor="categoryName">Názov kategórie</label>
          <input type="text" className="form-control" id="categoryName" onKeyUp={submit}/>
        </div>
        <input type="submit" className="btn btn-primary col-lg-12" value="OK"/>
      </form>
    </div>
  )
}

export default CategoryForm
