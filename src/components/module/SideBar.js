import Link from 'next/link'
import { categories } from '@/constants/strings'
import styles from '@/module/SideBar.module.css'

import { HiFilter } from 'react-icons/hi'

const SideBar = () => {
   
  return (
    <div className={styles.container}>
      <p>
        <HiFilter/>
        دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      {
       Object.keys(categories).map(i => <Link key={i} href={{pathname:"/buy-residential",i:{category: i}}}>
            {categories[i]}
        </Link>)
      }
    </div>
  )
}

export default SideBar
