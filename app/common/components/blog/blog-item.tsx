'use client'

import { format } from 'date-fns'
import type { BlogListType } from '../../../../utils/blog.types'

import Link from 'next/link'
import Image from 'next/image'
import {  Box, Divider } from '../chakra'

// ブログアイテム
const BlogItem = (blog: BlogListType) => {
  const MAX_LENGTH = 55
  let content = blog.content.replace(/\r?\n/g,'')

  if (content.length > MAX_LENGTH) {
    content = content.substring(0, MAX_LENGTH) + '...'
  }

  return (
    <Box py="3">
      {/* <div className="mb-5">
        <Link href={`blog/${blog.id}`}>
        </Link>
      </div> */}
      <Box className="text-gray-500 text-sm">
        {format(new Date(blog.created_at), 'yyyy/MM/dd')}
      </Box>
      <Link href={`blog/${blog.id}`}>
        <Box className="font-bold text-md">{blog.title}</Box>
      </Link>
      <Divider borderColor="#000" w="80%" pt="4" />
    </Box>
  )
}

export default BlogItem
