import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import { e2p, sp } from "@/utils/replaceNumber";

import { icons } from "@/constants/icons";
import { categories } from "@/constants/strings";
import styles from "@/template/DetailsPage.module.css";

const DetailsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}></div>
      <div className={styles.sidbar}></div>
    </div>
  );
};

export default DetailsPage;
