import { PlusIcon } from 'lucide-react'
import styles from './create.module.css'
import Button from '../../UI/button/button'

function Create() {
  

  return (
    <article className={styles.article}>

        <h2 className={styles.article__h}>
            Создайте свою комнату
        </h2>

        <p className={styles.article__p}>
            Создайте комнату и пригласите друзей
        </p>


        <Button
            icon={PlusIcon}
            text="Начать"
        />
        
        
      
    </article>
  )
}

export default Create