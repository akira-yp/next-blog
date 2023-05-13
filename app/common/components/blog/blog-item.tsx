'use client'

import { format } from 'date-fns'
import type { BlogListType } from '../../../../utils/blog.types'

import Link from 'next/link'
import Image from 'next/image'
import { Center, Divider } from '@chakra-ui/react'

// ブログアイテム
const BlogItem = (blog: BlogListType) => {
  const MAX_LENGTH = 55
  let content = blog.content.replace(/\r?\n/g,'')

  if (content.length > MAX_LENGTH) {
    content = content.substring(0, MAX_LENGTH) + '...'
  }

  return (
    <div className="break-words">
      <div className="mb-5">
        <Link href={`blog/${blog.id}`}>
          {/* <Image
            src={blog.image_url}
            className="rounded-lg aspect-video object-cover"
            alt="image"
            width={640}
            height={360}
          /> */}
        </Link>
      </div>
      <div className="text-gray-500 text-sm">
        {format(new Date(blog.created_at), 'yyyy/MM/dd')}
      </div>
      <div className="font-bold text-lg">{blog.title}</div>
      <div className="mb-3 text-gray-500">{content}</div>
      <Center>
        <Divider orientation='horizontal' color="#666666" />
      </Center>
    </div>
  )
}

export default BlogItem
