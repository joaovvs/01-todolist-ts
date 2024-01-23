import styles from './Checkbox.module.css'
import { Circle, CheckCircle } from '@phosphor-icons/react'

interface CheckboxProps {
    checked?: boolean;
}

export function Checkbox({checked=false}: CheckboxProps) {
  return (
    <button className={checked ? styles.checkboxChecked : styles.checkboxUnchecked}
     >
        {checked ? <CheckCircle weight='fill' /> : <Circle />}
    </button>
  )
}
