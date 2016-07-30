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

var SomZvedavy = React.createClass({
  render: function() {
    return (
      <div className="somZvedavy">
        yupíííííííííí.
      </div>
    );
  }
});

var Usmev = React.createClass({
  render: function() {
    return (
      <div className="usmev">
        :- he nedá sa použiť zátvorka
      </div>
    );
  }
});

var BssbBox = React.createClass({
  render: function() {
    return (
      <div className="bssbBox">
        <h1>komentar</h1>
        <CategoryBox />
        <SomZvedavy />
        <Usmev />
      </div>
    );
  }
});

ReactDOM.render(
  <BssbBox />,
    document.getElementById('content')
);
