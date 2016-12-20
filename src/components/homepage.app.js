import _categories from '../test-data/categories.json'
import React from 'react'
import CategoriesContainer from '../containers/homepage.containers'

const Homepage = ({ cats }) => (
  <div>
    <CategoriesContainer />
  </div>
)

export default Homepage
