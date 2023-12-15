import styles from '@/module/SideBar.module.css'

import Link from 'next/link'
import { HiFilter } from 'react-icons/hi'
const SideBar = () => {
    const queries = [{villa :"ویلا"},{apartemnt :"آپارتمان"},{office :"دفتر"},{store :"مغازه"}]
  return (
    <div className={styles.container}>
      <p>
        <HiFilter/>
        دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      {
        queries.map(query => <Link key={query} href={{pathname:"/buy-residential",query:{category:Object.keys(query)}}}>
            {Object.values(query)}
        </Link>)
      }
    </div>
  )
}

export default SideBar
