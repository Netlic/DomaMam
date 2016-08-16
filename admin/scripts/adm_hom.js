var OznamBox = React.createClass({
  displayName: 'Admin',
  render: function () {
    return (
      <div ClassName='oznamBox'>
        <h1>Admin</h1>
        <h2>tu budeme mať admistrátora webu</h2>
      </div>
    )
  }
})
ReactDOM.render(
  <OznamBox />,
    document.getElementById('content')
)
