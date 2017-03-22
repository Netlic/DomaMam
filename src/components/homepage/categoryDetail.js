import React, { PropTypes } from 'react'

/**
 * sluzi na zobrazenie detailov kategorie
 */
const CategoryDetail = ({ label = "category name here", items }) => {
  return(
    <div className={"category-expanded"}>
      <div className="category">
        <div className="category-options">
          <div className="row" style={{paddingTop:'5px', paddingBottom: '4px'}}>
            <div>
              <div className="col-lg-4">
                <button type="button" className="btn col-lg-offset-1">Späť</button>
              </div>
            </div>
            <div className="pull-right">
              <span className="glyphicon glyphicon-fullscreen" onClick=""></span>
              <span className="glyphicon glyphicon-move" onClick=""></span>
              <span className="glyphicon glyphicon-heart-empty" onClick=""></span>
              <span className="glyphicon glyphicon-remove" onClick=""></span>
            </div>
          </div>
        </div>
        <ol className="breadcrumb">
          <li className="active"><a href="#"><span className="h3">{label}</span></a></li>
        </ol>
      </div>
    </div>)
}

CategoryDetail.PropTypes = {
  label: PropTypes.string.isRequired
}

export default CategoryDetail
