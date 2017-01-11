import React from 'react'
import { connect } from 'react-redux'
import CategoryForm from '../../components/homepage/categoryForm'

const AddCategory = () => {
  return (
    <CategoryForm/>
  )
}

export default connect()(AddCategory)
