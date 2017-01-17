import React from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'
import { addCategory } from '../../actions/homepage.actions.js'

const submit = (e) => {
  if (e.keyCode === 13) {
    $(e.target).parent().next().click()
  }
}

const AddCategory = ({ dispatch }) => {
  return (
    <div className="col-lg-12">
      <form onSubmit={e => {
          e.preventDefault()
          let category = $('#categoryName').val()
          dispatch(addCategory(category))
          $('#categoryName').val('')
        }}>
        <div className="form-group">
          <label htmlFor="categoryName">Názov kategórie</label>
          <input type="text" className="form-control" id="categoryName" onKeyUp={submit}/>
        </div>
        <input type="submit" className="btn btn-primary col-lg-12" value="OK"/>
      </form>
    </div>
  )
}

export default connect()(AddCategory)
