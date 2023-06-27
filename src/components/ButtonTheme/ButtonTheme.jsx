import styles from './ButtonTheme.module.css'

function ButtonTheme({themeContext}) {
  function changeTheme() {
    themeContext.changeTheme()
  }

  return (
    <label className={styles['ui-switch']}>
      <input type="checkbox" onClick={changeTheme} />
      <div className={styles['slider']}>
        <div className={styles['circle']}></div>
      </div>
    </label>
  )
}
export default ButtonTheme
