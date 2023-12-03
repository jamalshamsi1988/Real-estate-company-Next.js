import DashboardSidebar from '@/layout/DashboardSidebar'
import React from 'react'

const DashbordLayout = ({children}) => {
  return (
    <DashboardSidebar>
      {children}
    </DashboardSidebar>
  )
}

export default DashbordLayout
