'use client'

import { format } from 'date-fns'
import type { BlogListType } from '../../../../utils/blog.types'

import Link from 'next/link'
import Image from 'next/image'

// ブログアイテム
const BlogItemRow = (blog: BlogListType) => {
  const MAX_LENGTH = 55
  let content = blog.content.replace(/\r?\n/g,'')

  if (content.length > MAX_LENGTH) {
    content = content.substring(0, MAX_LENGTH) + '...'
  }

  return (
    <div className="break-words">
      <div className="mb-5 p-3 bg-white rounded-lg border-1 border-[#F3F3F7]">
        <div className="flex space-x-4">
          <Image
            src={blog.image_url}
            className="rounded-full"
            alt="image"
            width={50}
            height={50}
          />
          <div>
            <div className="font-bold">{blog.title}</div>
            <div className="text-gray-500 text-sm">
              公開日 {format(new Date(blog.created_at), 'yyyy/MM/dd')}
            </div>
          </div>
          <Link href={`/admin/blog/${blog.id}`}>編集</Link>
        </div>
        {/* <Link href={`blog/${blog.id}`}>
          <Image
            src={blog.image_url}
            className="rounded-lg aspect-video object-cover"
            alt="image"
            width={640}
            height={360}
          />
        </Link> */}
      </div>
      {/* <div className="mb-3 text-gray-500">{content}</div>
      <div className="flex items-center space-x-3">
      </div> */}
    </div>
  )
}

export default BlogItemRow
