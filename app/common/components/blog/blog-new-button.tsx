'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import useStore from '../../../../store'

const BlogNewButton = () => {
  const { user } = useStore()
  const [login, setLogin] = useState(false)

  return (
    <div className='mb^5 flex justify-end'>
      <Link href="admin/new">
        <div className='text-white bg-yellow-500 hover:brightness-110 rounded py-1 px-8'>
          新規投稿
        </div>
      </Link>
    </div>
  )
}

export default BlogNewButton
