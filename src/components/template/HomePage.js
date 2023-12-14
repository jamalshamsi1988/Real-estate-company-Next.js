import { FiCircle } from "react-icons/fi";
import styles from "@/template/HomePage.module.css"
import CategoryCard from "@/module/CategoryCard";

const HomePage = () => {
  const services = ["خرید", "فروش", "رهن", "اجاره"];
  const cities = [
    "تهران",
    "سنندج",
    "کرمانشاه",
    "اهواز",
    "مشهد",
    "اصفهان",
    "شیراز",
    "خرم آباد",
  ];
  return <div >
    <div className={styles.banner}>
        <div className={styles.desc}>
            <h1>سامانه خرید و اجاره ملک</h1>
            <ul>
                {
                    services.map(i => <li key={i}><FiCircle/><span>{i}</span></li>)
                }
            </ul>
        </div>
    </div>
    <div className={styles.categories}>
    <CategoryCard name="villa"  title= "خانه ویلایی"/>
    <CategoryCard name="apartment"  title= "آپارتمان"/>
    <CategoryCard name="store"  title= "مغازه"/>
    <CategoryCard name="office"  title= "دفتر"/>

    </div>
  </div>;
};

export default HomePage;
