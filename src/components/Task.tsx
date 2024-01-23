import styles from './Task.module.css'
import { Trash } from "@phosphor-icons/react"
import { Checkbox } from "./Checkbox"

interface TaskProps {
    description: string
    done?: boolean 
}

export default function Task({description, done=false}: TaskProps) {
  return (
    <div className={styles.task}>
        <Checkbox checked={done}/>
        <p>{description}</p>
        <button className={styles.removeBtn}><Trash/></button>
    </div>
  )
}
