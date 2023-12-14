"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { ThreeDots } from "react-loader-spinner";
import Card from "@/module/Card";

import styles from "@/module/DashboardCard.module.css";
import toast, { Toaster } from "react-hot-toast";

const DashboardCard = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
  };
  const deleteHandler = async () => {
    setLoading(true);
    const res = await fetch(`/api/profile/delete/${data._id} `, {
      method: "DELETE",
    });
    const result = await res.json();
    setLoading(false);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };
  return (
    <div className={styles.container}>
      <Card data={data} />
      <div className={styles.main}>
        <button onClick={editHandler}>
          ویرایش
          <FiEdit />
        </button>

        {loading ? (
          <ThreeDots height={45}
          color="#db0505"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ margin:"0 100px " }}
          visible={true} />
        ) : (
          <button onClick={deleteHandler}>
            حذف
            <AiOutlineDelete />
          </button>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default DashboardCard;
