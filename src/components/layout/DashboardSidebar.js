import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {CgProfile} from 'react-icons/cg'

import styles from '@/layout/DashboardSidebar.module.css'
import Link from "next/link";
import LogOutButton from "@/module/LogOutButton";

const DashboardSidebar = async({children}) => {
    const session =await getServerSession(authOptions);
  return (
    <div className={styles.container} >
        <div className={styles.sidebar}>
           <CgProfile />
           <p>{session?.user.email}</p>
           <span></span>
           <Link href="dashbord/">حساب کاربری</Link>
           <Link href="dashbord/my-profiles">آگهی های من</Link>
           <Link href="dashbord/add">ثبت آگهی</Link>
           <LogOutButton />
        </div>
        <div className={styles.main}>{children}</div>
      
    </div>
  )
}

export default DashboardSidebar
