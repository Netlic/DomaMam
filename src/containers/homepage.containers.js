import React, { PropTypes } from "react"
import { connect } from 'react-redux'
import CategoriesList from '../components/homepage/categoriesList'
import Category from '../components/homepage/category'

const CategoriesContainer = ({ categories }) => (
  <CategoriesList title="Kategórie">
    {categories.map(category => <Category title={category.name} />)}
  </CategoriesList>
)

CategoriesContainer.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
}

const mapStateToProps = state => {console.log(state)
  return { categories: state.categories } }

export default connect(mapStateToProps)(CategoriesContainer)
