
import {HiOutlineLocationMarker} from 'react-icons/hi'
import { BiLeftArrowAlt } from 'react-icons/bi'
import styles from '@/module/Card.module.css'
import { sp } from '@/utils/reaplaceNumber'
import Link from 'next/link'
import { icons } from '@/constants/icons'

const Card = ({data : {title,location, price,category,_id }}) => {

  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}> <HiOutlineLocationMarker/>{location} </p>
      <span>{sp(price)} تومان</span>
      <Link href={`/buy-residential/${_id}`}>مشاهد آگهی <BiLeftArrowAlt /></Link>
      
    </div>
  )
}

export default Card
