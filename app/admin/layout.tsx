'use client'

import React from 'react'
import AdminMenu from '../common/components/admin/admin-menu'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex min-h-screen'>
      <div className='flex-initial w-16'>
        <AdminMenu />
      </div>
      <div className='flex-1 container max-w-screen-x1 mx-auto px-5 py-10'>
        {children}
      </div>
    </div>
  )
}

export default AdminLayout
