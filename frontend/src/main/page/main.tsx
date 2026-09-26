import Button from './components/UI/button/button'
import Input from './components/UI/input/input'
import styles from './main.module.css'

function Main() {
  

  return (
    <div className={styles.Main}>
      
      <h1 className={styles.Main__Logoname}>
        Watch Forever
      </h1>
      
      <p className={styles.Main__Aboutlogo}>
        Лучший сервис для совместного просмотра видео
      </p>

      <div className={styles.Main__Container}>
        <Input />
        <Button />
      </div>

    </div>
  )
}

export default Main