'use client'

import BlogNewButton from '../common/components/blog/blog-new-button'
import React, { useEffect } from 'react'
import useStore from '../../store'
import { useRouter } from 'next/navigation'

// 管理者ページ
const Admin = () => {
  const { user } = useStore()
  const router = useRouter()

  useEffect(() => {
    if (!user.id) {
      router.replace('/')
    }
  },[])

  return (
    <div className="h-full">
      <BlogNewButton />
      <div>
        管理者ページ
      </div>
    </div>
  )
}

export default Admin
