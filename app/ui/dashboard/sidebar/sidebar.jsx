import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css"
import Image from "next/image";
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
  } from "react-icons/md";


const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Projects",
          path: "/dashboard/projects",
          icon: <MdShoppingBag />,
        },
        {
          title: "News",
          path: "/dashboard/news",
          icon: <MdAttachMoney/>,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Team",
          path: "/dashboard/team",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];

const Sidebar = () => {
    return (
        <div className={styles.container}>
          <div className={styles.user}>
            <Image className={styles.userImg} src="/noavatar.png" alt="" width="50" height="50" />
            <div className={styles.userDetails}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.userTitle}>Adminstrator</span>
            </div>
          </div>
          <ul className={styles.list}>
            {menuItems.map((cat) =>(
              <li key={cat.title}>
              <span className={styles.cat}>{cat.title}</span>
              {cat.list.map((item) => (
                <MenuLink item={item} key={item.title}/>
              ))}
              </li>
            ))}
          </ul>
          <button className={styles.logout}>
            <MdLogout/>
            Logout
          </button>
        </div>
    )
}

export default Sidebar
