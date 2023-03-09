'use client'

import { BlogListType } from "@/utils/blog.types"
import { useRouter } from "next/navigation"
import useStore from "@/store"
import { useSupabase } from "../supabase-provider"
import { useState } from "react"
import Image from 'next/image'
import { format } from 'date-fns'

type PageProps = {
    blog: BlogListType
  }

const BlogDetail = ({ blog }: PageProps) => {
  const  { supabase } = useSupabase()
  const router = useRouter()
  const { user } = useStore()
  const [loading, setLoading] = useState(false)

  return (
    <div className="max-w-screen-md mx-auto">
      <div className="flex flex-col items-center justify-center mb-5">
        <div className="mb-1">
          <Image
            src={blog.avatar_url ? blog.avatar_url : '/default.png'}
            className="rounded-full"
            alt="avatar"
            width={70}
            height={70}
          />
        </div>
        <div className="font-bold text-gray-500">{blog.name}</div>
        <div className="text-sm text-gray-500">
          {format(new Date(blog.created_at), 'yyyy/MM/dd')}
        </div>
      </div>

      <div className="mb-5">
        <div className="text-center font-bold text-3xl mb-5">{blog.title}</div>
        <div className="mb-5">
          <Image
            src={blog.image_url}
            className="rounded-lg aspect-video object-cover"
            alt="image"
            width={1024}
            height={576}
          />
        </div>
        <div className="leading-relaxed break-words whitespace-pre-wrap">{blog.content}</div>
      </div>
    </div>
  )

}

export default BlogDetail
