// import { supabase } from '@/utils/supabaseClient'
import { notFound } from 'next/navigation'
import { createClient } from '../../../../utils/supabase-server'

import BlogItemRow from './admin-blog-item'

// ブログリスト
const AdminBlogList = async () => {
  const supabase = createClient()

  // ブログリスト取得
  const { data: blogsData } = await supabase
    .from('blogs')
    .select()
    .order('created_at', { ascending: false})

  // ブログリストが見つからない場合
  if (!blogsData) { return notFound }

  return (
    <div>
      {await Promise.all(
        blogsData.map(async (blogData) => {
          const { data: userData } = await supabase
            .from('profiles')
            .select()
            .eq('id', blogData.user_id)
            .single()

          const blog = {
            id: blogData.id,
            created_at: blogData.created_at,
            title: blogData.title,
            content: blogData.content,
            image_url: blogData.image_url,
            user_id: blogData.user_id,
            name: userData!.name,
            avatar_url: userData!.avatar_url,
          }

          return <BlogItemRow key={blog.id} {...blog} />
        })
      )}
    </div>
  )
}

export default AdminBlogList
