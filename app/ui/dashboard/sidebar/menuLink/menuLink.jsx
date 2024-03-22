import styles from "./menuLink.module.css"
import Link from "next/link"

const MenuLink = ({item}) => {
    return (
      <Link href={item.path} className={styles.contaiiner}>
        {item.icon}
        {item.title}
      </Link>
    )
  }
  
  export default MenuLink