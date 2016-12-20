import React, { PropTypes } from "react"
import { connect } from 'react-redux'
import CategoriesList from '../components/homepage/categoriesList'
import Category from '../components/homepage/category'

const CategoriesContainer = ({cats}) => {
  <CategoriesList title="Kategórie">
    {cats.map(cat => <Category title={cat.name} />)}
  </CategoriesList>
}

CategoriesContainer.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
}

export default CategoriesContainer
