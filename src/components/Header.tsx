import styles from './Header.module.css'
import logoIcon from '../assets/favicon.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={logoIcon} />
        <span>to</span><span>do</span>
      </div>
    </header>
  )
}
