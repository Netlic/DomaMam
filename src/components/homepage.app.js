import React from 'react'
import CategoriesContainer from '../containers/homepage/CategoriesContainer.js'
import LeftBar from '../components/homepage/leftBar'
import Login from './login'

const Homepage = () => (
  <div>
    <LeftBar />
    <CategoriesContainer />
    <Login />
  </div>
)

export default Homepage
