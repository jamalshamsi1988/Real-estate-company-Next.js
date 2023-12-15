import styles from "@/module/CategoryCard.module.css"
import Image from "next/image"
import Link from "next/link"

const CategoryCard = ({title,name}) => {
  return (
    <div className={styles.card}>
      <Link href={`/buy-residential?category=${name}`}>
      <Image src={`/images/${name}.png`} alt={title} height={144} width={240} priority={true}/>
      </Link>
      <p>{title}</p>
    </div>
  )
}

export default CategoryCard
