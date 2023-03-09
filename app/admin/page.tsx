// 'use client'

import BlogNewButton from '../common/components/blog/blog-new-button'
import React from 'react'
import AdminBlogList from '../common/components/admin/admin-blog-list'

// 管理者ページ
const Admin = () => {

  // useEffect(() => {
  //   if (!user.id) {
  //     router.replace('/')
  //   }
  // },[])

  return (
    <div className="h-full">
      <BlogNewButton />
      <div>
         {/* @ts-ignore*/}
        <AdminBlogList />
      </div>
    </div>
  )
}

export default Admin
