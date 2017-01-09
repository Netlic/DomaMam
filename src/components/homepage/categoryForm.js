import React from 'react'
import $ from 'jquery'

const test = () => {
  //sem pride dispatch
  alert('pridane')
}

const submit = (e) => {
  if (e.keyCode === 13) {
    $(e.target).parent().next().click()
  }
}

const CategoryForm = () => {
  return (
    <div className="col-lg-12">
      <form>
        <div className="form-group">
          <label htmlFor="categoryName">Názov kategórie</label>
          <input type="text" className="form-control" id="categoryName" onKeyUp={submit}/>
        </div>
        <input className="btn btn-primary" onClick={test} value="OK"/>
      </form>
    </div>
  )
}

export default CategoryForm
