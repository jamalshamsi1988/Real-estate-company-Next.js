"use client";
import styles from "@/module/TextInput.module.css";
import { p2e } from "@/utils/reaplaceNumber";

const TextInput = ({
  name,
  title,
  profileData,
  setProfileData,
  textArea = false,
}) => {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: p2e(value) });
  };
  return (
    <div className={styles.container}>
      <p>{title}:</p>
      {textArea ? (
        <textArea
          type="text"
          value={profileData[name]}
          name={name}
          onChange={changeHandler}
        />
      ) : (
        <input
          type="text"
          value={profileData[name]}
          name={name}
          onChange={changeHandler}
        />
      )}
    </div>
  );
};

export default TextInput;
