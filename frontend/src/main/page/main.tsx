import Header from './components/layout/header/header'
import Button from './components/UI/button/button'
import Input from './components/UI/input/input'
import styles from './main.module.css'

function Main() {
  

  return (
    <div className={styles.Main}>

      <Header />
      
      <h1 className={styles.Main__h}>

        <span>
          Смотри вместе.
        </span>

        <span>
          Даже когда вы далеко.
        </span>

      </h1>
      
      <p className={styles.Main__Aboutlogo}>
        
        <span>
          Совместный просмотр фильмов, сериал
        </span>

        <span>
          и видео в реальном времени.
        </span>

      </p>

      <div className={styles.Main__Container}>
        <Input />
        <Button />
      </div>

    </div>
  )
}

export default Main