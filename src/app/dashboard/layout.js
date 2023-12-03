import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {redirect} from 'next/navigation'
import DashboardSidebar from '@/layout/DashboardSidebar'


const DashbordLayout =async ({children}) => {
  const session = await getServerSession(authOptions)
  if(!session) redirect("/signin")
  return (
    <DashboardSidebar>
      {children}
    </DashboardSidebar>
  )
}

export default DashbordLayout
