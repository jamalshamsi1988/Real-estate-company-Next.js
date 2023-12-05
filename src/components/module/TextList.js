import styles from '@/module/TextList.module.css'
import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";


const TextList = ({type , title , profileData,setProfileData}) => {

    const addHandler=()=>{
        setProfileData({...profileData , [type]:[...profileData[type] ,""]})
    }
  return (
    <div className={styles.container}>
        <p>{title}</p>
        {
            profileData[type].map((i,index)=>(
                <div className={styles.card} key={index}>
                    <input type="text" />
                </div>
            ))
        }
      <button onClick={addHandler}>افزودن <MdOutlineLibraryAdd/></button>
    </div>
  )
}

export default TextList
