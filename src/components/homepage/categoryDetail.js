import React, { PropTypes } from 'react'
import CategoryDetailItem from './categoryDetailItem'

/**
 * vyrenderuje polozky v detaile kategorie
 */
const CategoryItems = (items) => {
  return (items.map((item, index) => {return (<CategoryDetailItem key={index} title={item.name}/>)}))
}

/**
 * sluzi na zobrazenie detailov kategorie
 */
const CategoryDetail = ({ label = "category name here", items }) => {
  return(
    <div className={"category-expanded"}>
      <div className="category-detail">
        <div className="category-options">
          <div className="row" style={{paddingTop:'5px'}}>
            <div className="pull-right">
              <span className="glyphicon glyphicon-heart-empty" onClick=""></span>
              <span className="glyphicon glyphicon-remove" onClick=""></span>
            </div>
          </div>
        </div>
        <ol className="breadcrumb">
          <li className="active"><a href="#"><span className="h3">{label}</span></a></li>
        </ol>
        <div className="row">
          {CategoryItems(items)}
          <div className="col-lg-4">
            <button type="button" className="btn col-lg-offset-1">Späť</button>
          </div>
        </div>
      </div>
    </div>)
}

CategoryDetail.PropTypes = {
  label: PropTypes.string.isRequired
}

export default CategoryDetail
