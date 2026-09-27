import type { LucideIcon } from 'lucide-react'

import styles from './button.module.css'

interface ButtonProps {
  icon: LucideIcon,
  text: string
}

function Button({ icon: Icon, text }: ButtonProps) {

  return (

    <div className={styles.button}>
      
      <Icon size={40} />
      
      {text}

    </div>

  )
}

export default Button