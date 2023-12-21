import Profile from "@/models/Profile";
import DetailsPage from "@/template/DetailsPage";
import connectDB from "@/utils/connectDB"


const ProfilDetail = async({params :{profileId}}) => {
 await connectDB();
 const profile = await Profile.findOne({_id : profileId});
 if(!profile) return <h3>مشکلی پیش آمده است</h3>
  return (
   <DetailsPage data={profile} />
  )
}

export default ProfilDetail

export const generateMetadata=async({params:{profileId}})=>{
  await connectDB();
  const profile = await Profile.findOne({_id : profileId});

  return {
    title: profile.title,
    descripton:profile.descripton
  }
}
