"use client"
import { usePathname } from "next/navigation"
import styles from "./menuLink.module.css"
import Link from "next/link"

const MenuLink = ({item}) => {

    const pathname = usePathname()

    return (
      <Link href={item.path} passHref>
        <div className={`${styles.container} ${pathname === item.path && styles.active}`}> {/* Apply the class here */}
          {item.icon}
          {item.title}
        </div>
      </Link>
    )
  }
  
  export default MenuLink