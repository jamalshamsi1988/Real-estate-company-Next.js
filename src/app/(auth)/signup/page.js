import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

import SignUpPage from "@/template/SignUpPage"


const Signup =async () => {
  const session=await getServerSession(authOptions);
  if(session) redirect("/");

  return (
    <SignUpPage />
  )
}

export default Signup
