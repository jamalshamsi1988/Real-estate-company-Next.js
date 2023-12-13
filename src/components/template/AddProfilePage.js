"use client";
import { useEffect, useState } from "react";
import styles from "@/template/AddProfilePage.module.css";
import TextInput from "@/module/TextInput";
import RadioList from "@/module/RadioList";
import TextList from "@/module/TextList";
import CustomDatePicker from "@/module/CustomDatePicker";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import { set } from "mongoose";
import { useRouter } from "next/navigation";

const AddProfilePage = ({ data }) => {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  const [loading, setLoading] = useState(false);
const router =useRouter()
  const submitHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh()
    }
  };

  const editHandler=async()=>{
    setLoading(true)
     const res= await fetch("/api/profile",{
      method:"PATCH",
      body:JSON.stringify(profileData),
      headers:{"Content-Type" : "application/json"}
     })
     const data=await res.json();
     setLoading(false)
     if(data.error){
      toast.error(data.error)
     }else{
      toast.success(data.message)
      router.refresh()
     }
  }
  useEffect(() => {
    if (data) setProfileData(data);
  }, []);
  return (
    <div className={styles.container}>
      <h3>{data ? "ویرایش آگهی" : "ثبت آگهی"}</h3>
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />

      <TextInput
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textArea={true}
      />

      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />

      <TextInput
        title="شماره تماس"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />

      <TextInput
        title="قیمت (تومان)"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />

      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList
        type="amenities"
        title="امکانات رفاهی"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextList
        type="rules"
        title="قوانین "
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <Toaster />
      {loading ? (
        <ThreeDots
          height={45}
          color="#304ffe"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ margin: "auto" }}
          visible={true}
        />
      ) : data ? (
        <button className={styles.submit} onClick={editHandler}>
          ویرایش آگهی
        </button>
      ) : (
        <button className={styles.submit} onClick={submitHandler}>
          ثبت آگهی
        </button>
      )}
    </div>
  );
};

export default AddProfilePage;
