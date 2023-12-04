import { useState } from "react"


const AddProfilePage = () => {
    const [profileData , setProfileData]=useState({
        title : "",
        description :"",
        location:"",
        phone :"",
        price:"",
        realState:"",
        constructionDate:new Date(),
        category:"",
        rules:[],
        amenities:[]
    });
  return (
    <div>
      
    </div>
  )
}

export default AddProfilePage
