import React, { PropTypes, Component } from "react"
import { connect } from 'react-redux'
import CategoriesList from '../../components/homepage/categoriesList'
import Category from '../../components/homepage/category'
import { getAllCategories } from '../../reducers/homepage.reducers.js'
import AddCategoryButton from '../../components/homepage/addMainCategory'
import { addCategoryToList, toggleDetails } from '../../actions/homepage.actions'
import CategoryDetail from '../../components/homepage/categoryDetail'

const RenderDetails = ({ categoryDetails, onResize }) => {
  if (categoryDetails.visible) {
    return <CategoryDetail label={categoryDetails.label} items={categoryDetails.items} onResize={onResize}/>
  }
  return <span></span>
}

/**
 * wrapper pre kategorie
 */
class CategoriesContainer extends Component {
  render(){
    let categories = this.props.categories,
    details = this.props.details
    return(
      <CategoriesList>
        <RenderDetails categoryDetails={details} onResize={this._toggleDetails}/>
        {categories.map((category, index) =>
          <Category
            key={category.id}
            title={category.name}
            items={category.items}
            onResize={this._toggleDetails}/> )}
        <AddCategoryButton onCategoryAdd={() => addCategoryToList('test')}/>
      </CategoriesList>
    )
  }

  _toggleDetails = (toggle = true, label = "", items = {}) => {
    let data = {toggle: toggle, label: label, items: items}
    this.props.dispatch(toggleDetails(data))
  }
}

CategoriesContainer.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
}

const mapStateToProps = state => ({
  categories: getAllCategories(state.categories),
  details: state.categories.categoryDetails
})

export default connect(mapStateToProps)(CategoriesContainer)
