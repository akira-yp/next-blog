'use client'

import React,{ ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'
import { useSupabase } from '../supabase-provider'

import type { Database } from '../../../../utils/database.types'

import Loading from '../../../loading'
import useStore from '../../../../store'

type Blog = Database['public']['Tables']['blogs']['Row']
type PageProps = {
  blog: Blog
}

// ブログ編集
const BlogEdit = ({ blog }: PageProps) => {
  const { supabase } = useSupabase()
  const router = useRouter()
  const { user } = useStore()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image,setImage] = useState<File>(null!)
  const [loading, setLoading] = useState(false)
  // const [myBlog, setMyBlog] = useState(false)

  useEffect(() => {
    setTitle(blog.title)
    setContent(blog.content)
  }, [])

  const onUploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    if (!files || files?.length == 0) {
      return
    }
    setImage(files[0])
  },[])

  // 送信
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    if (user.id) {
      let image_url = blog.image_url

      if (image) {
        const { data: storageData, error: storageError } = await supabase.storage
          .from('blogs')
          .upload(`${user.id}/${uuidv4()}`, image)

        if (storageError) {
          alert(storageError.message)
          setLoading(false)
          return
        }

        const fileName = image_url.split('/').splice(-1)[0]

        await supabase.storage.from('blogs').remove([`${user.id}/${fileName}`])
        const { data: urlData } = supabase.storage.from('blogs').getPublicUrl(storageData.path)

        image_url = urlData.publicUrl
      }

      //ブログをアップデート
      const {error: updateError } = await supabase
        .from('blogs')
        .update({
          title,
          content,
          image_url,
        })
        .eq('id',blog.id)

      if (updateError) {
        alert(updateError.message)
        setLoading(false)
        return
      }

      router.push('/admin')
      router.refresh()
    }
    setLoading(false)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="mb-5">
          <div className="text-sm mb-1">タイトル</div>
          <input
            className="w-full bg-gray-100 rounded border py-1 px-3 outline-none focus:bg-transparent focus:ring-2 focus:ring-yellow-500"
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <div className="text-sm mb-1">画像</div>
          <input type="file" id="thumbnail" onChange={onUploadImage} />
        </div>
        <div className="mb-5">
          <div className="text-sm mb-1">内容</div>
          <textarea
            className="w-full bg-gray-100 rounded border py-1 px-3 outline-none focus:bg-transparent focus:ring-2 focus:ring-yellow-500"
            id="content"
            placeholder="Content"
            rows={15}
            value={content}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="text-center mb-5">
          {loading ? (
            <Loading />
          ) : (
            <button
              type="submit"
              className="w-full text-white bg-yellow-500 hover:brightness-110 rounded py-1 px-8"
            >
              編集
            </button>
          )}
        </div>
      </form>
    </>
  )
}

export default BlogEdit
