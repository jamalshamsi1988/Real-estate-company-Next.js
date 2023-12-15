import BuyResidentialsPage from '@/template/BuyResidentialsPage'


const BuyResidentials =async ({searchParams}) => {
  const res = await fetch("http://localhost:3000/api/profile" ,{ cache:"no-store"});
  const data= await res.json();
  let finalData= data.data;
  if(data.error) return <h3>مشکلی پیش آمده است</h3>
  if(searchParams.category){
    finalData= finalData.filter(i => i.category === searchParams.category)
  }
  return (
    <BuyResidentialsPage data={finalData}/>
  )
}

export default BuyResidentials
