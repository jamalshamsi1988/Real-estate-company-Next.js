import styles from '@/module/AdminCard.module.css'

const AdminCard = ({data:{title,description,price,location}}) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.properties}>
        <span>{location}</span>
        <span>{price}</span>
      </div>
    <button>انتشار</button>

    </div>
  )
}

export default AdminCard
