var OznamBox = React.createClass({
  displayName: 'Admin',
  render: function(){
    return (
      <div className="oznamBox">
        <h2>Admin</h2>
        <h1>tu budeme mať admistrátora webu</h1>
      </div>
    )
  }
});
ReactDOM.render(
  <OznamBox />,
    document.getElementById('content')
);
