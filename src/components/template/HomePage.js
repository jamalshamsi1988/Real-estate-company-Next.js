import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import styles from "@/template/HomePage.module.css";
import CategoryCard from "@/module/CategoryCard";
import { categories, cities, services } from "@/constants/strings";

const HomePage = () => {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و اجاره ملک</h1>
          <ul>
            {services.map((i) => (
              <li key={i}>
                <FiCircle />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.categories}>
        {
          Object.keys(categories).map(i => ( <CategoryCard key={i} name={i} title={categories[i]} />))
        }
       
        {/* <CategoryCard name="apartment" title="آپارتمان" />
        <CategoryCard name="store" title="مغازه" />
        <CategoryCard name="office" title="دفتر" /> */}
      </div>
      <div className={styles.city}>
        <h3>شهرهای پر بازدید</h3>
        <ul>
          {cities.map((i) => (
            <li key={i}>
              <FaCity />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
