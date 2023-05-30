import React from 'react'
import AdminBlogList from '../common/components/admin/admin-blog-list'

// 管理者ページ
const Admin = () => {

  return (
    <div className="h-full">
      <div>
         {/* @ts-ignore*/}
        <AdminBlogList />
      </div>
    </div>
  )
}

export default Admin
