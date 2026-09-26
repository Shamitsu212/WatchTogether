import styles from './input.module.css'


function Input() {
  

  return (

    <input 
      className={styles.input} 
      type="text"
      placeholder='Введите имя'
    />

  )
}

export default Input