import Button from '../../UI/button/button'
import Input from '../../UI/input/input'
import styles from './join.module.css'

import { ArrowRight, HashIcon } from 'lucide-react'

function Join() {
  

  return (
    <article className={styles.article}>

        <h2 className={styles.article__h}>
            Присоединиться к комнате
        </h2>

        <p className={styles.article__p}>
            Введите код комнаты, который отправил вам друг.
        </p>
        
        <Input 
            placeholder='Код комнаты'
            icon={HashIcon}
        />

        <Button
            text='Присоединиться'
            icon={ArrowRight}
        />
      
    </article>
  )
}

export default Join