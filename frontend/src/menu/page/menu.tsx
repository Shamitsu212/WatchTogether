import Create from './components/layout/create/create'
import Join from './components/layout/join/join'

import styles from './menu.module.css'

function Menu() {
  

  return (
    <div className={styles.page}>

        
      

        <div className={styles.page__menu}>

            <h1 className={styles.menu__h}>
                <span className={styles.h__purple}>
                    Watch
                </span>
                
                Together
            </h1>

            <p className={styles.menu__p}>
                
                <span>
                    Создайте свою комнату или присоединитесь
                </span>
                
                <span>
                    к уже существующей. Смотрите фильмы, сериалы
                </span>

                <span>
                    и видео в реальном времени
                </span>

            </p>

            <div className={styles.menu__articles}>
                <Join />
            
                <Create />
            </div>

        </div>


    </div>
  )
}

export default Menu