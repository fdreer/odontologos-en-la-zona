function ButtonTheme({themeContext}) {
  function changeTheme() {
    themeContext.changeTheme()
  }

  return (
    <label className="ui-switch">
      <input type="checkbox" onClick={changeTheme} />
      <div className="slider">
        <div className="circle"></div>
      </div>
    </label>
  )
}
export default ButtonTheme
