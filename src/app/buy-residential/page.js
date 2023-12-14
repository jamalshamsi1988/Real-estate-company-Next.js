import BuyResidentialsPage from '@/template/BuyResidentialsPage'


const BuyResidentials =async () => {
  const res = await fetch("http://localhost:3000/api/profile" ,{ cache:"no-store"});
  const data= await res.json();
  if(data.error) return <h3>مشکلی پیش آمده است</h3>
  return (
    <BuyResidentialsPage data={data.data}/>
  )
}

export default BuyResidentials
