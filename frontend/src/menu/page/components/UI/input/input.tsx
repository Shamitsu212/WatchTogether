import styles from './input.module.css'

import type { LucideIcon } from 'lucide-react'

import { useRef } from 'react'

interface ButtonProps {
  icon: LucideIcon,
  placeholder: string,
}


function Input({icon: Icon, placeholder}:ButtonProps) {

    const inputRef = useRef<HTMLInputElement>(null)

    const handleFocus = () => {
        inputRef.current?.focus()
    }
  

  return (
    <div
        className={styles.Container}
        onClick={handleFocus}    
    >

        <Icon size={40}  />

        <input  
            className={styles.Container__input}  
            type="text"
            placeholder={placeholder}
            ref={inputRef}
        />

    </div>
    

  )
}

export default Input