var CategoryBox = React.createClass({
  displayName: 'Kategórie',
  render: function(){
    return (
      <div className="categoryBox"></div>
    )
  }
});

var CategoryItem = React.createClass({

});

ReactDOM.render(
  <CategoryBox />,
  document.getElementById('content')
);
