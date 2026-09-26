import { MoveUpRightIcon } from 'lucide-react'
import styles from './button.module.css'

function Button() {
  

  return (
    <div className={styles.button}>
      
      Начать 

      <MoveUpRightIcon size={40}/>

    </div>
  )
}

export default Button