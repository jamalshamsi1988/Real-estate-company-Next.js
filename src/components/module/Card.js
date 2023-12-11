import {RiHome3Line} from 'react-icons/ri'
import { MdApartment } from 'react-icons/md'
import {BiStore} from "react-icons/bi"
import { GiOfficeChair } from 'react-icons/gi'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import { BiLeftArrowAlt } from 'react-icons/bi'
import styles from '@/module/Card.module.css'
import { sp } from '@/utils/reaplaceNumber'
import Link from 'next/link'

const Card = ({data : {title,location, price,category }}) => {
  const icons ={
    villa : <RiHome3Line />,
    apartment :<MdApartment />,
    store: <BiStore/>,
    office : <GiOfficeChair/>
  };
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}> <HiOutlineLocationMarker/>{location} </p>
      <span>{sp(price)} تومان</span>
      <Link href="/">مشاهد آگهی <BiLeftArrowAlt /></Link>
      
    </div>
  )
}

export default Card
