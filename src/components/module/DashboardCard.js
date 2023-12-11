"use client"

import { AiOutlineDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import Card from '@/module/Card'

import styles from '@/module/DashboardCard.module.css'


const DashboardCard = ({data}) => {
  const editHandler=()=>{

  }
  const deleteHandler=()=>{

  }
  return (
    <div className={styles.container}>
     <Card data={data}/>
     <div className={styles.main}>
      <button onClick={editHandler}>
        ویرایش
        <FiEdit/>
      </button >
      <button onClick={deleteHandler}>
        حذف
        <AiOutlineDelete/>
      </button>

     </div>
    </div>
  )
}

export default DashboardCard
