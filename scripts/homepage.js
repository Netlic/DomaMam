var CategoryBox = React.createClass({
  displayName: 'Kategórie',
  render: function(){
    return (
      <div className="categoryBox">
        <h2>Kategórie</h2>
      </div>
    )
  }
});

var CategoryItem = React.createClass({
  render: function(){
    return (
      <div></div>
    )
  }
});

ReactDOM.render(
  <CategoryBox />,
  document.getElementById('content')
);
