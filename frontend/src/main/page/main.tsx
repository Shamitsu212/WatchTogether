import Button from './components/UI/button/button'
import Input from './components/UI/input/input'
import styles from './main.module.css'

function Main() {
  

  return (
    <div className={styles.Main}>
      
      <h1>
        Watch Forever
      </h1>
      
      <p>
        Лучший сервис для совместного просмотра видео
      </p>

      <div>

        <Button />

        <Input />

      </div>

    </div>
  )
}

export default Main