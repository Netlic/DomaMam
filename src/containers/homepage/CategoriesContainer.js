import React, { PropTypes } from "react"
import { connect } from 'react-redux'
import CategoriesList from '../../components/homepage/categoriesList'
import Category from '../../components/homepage/category'
import { getAllCategories } from '../../reducers/homepage.reducers.js'
import AddCategoryButton from '../../components/homepage/addMainCategory'
import { addCategoryToList } from '../../actions/homepage.actions'

const CategoriesContainer = ({ categories }) => (
  <CategoriesList title="Kategórie">
    {categories.map((category, index) =>
      <Category key={index} title={category.name} items={category.items}/> )}
      <AddCategoryButton onCategoryAdd={() => addCategoryToList('test')}/>
  </CategoriesList>
)


CategoriesContainer.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
}

const mapStateToProps = state => ({
  categories: getAllCategories(state.categories)
})

export default connect(mapStateToProps)(CategoriesContainer)
