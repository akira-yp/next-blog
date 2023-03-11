import { notFound } from 'next/navigation'
import { createClient } from '../../../../utils/supabase-server'

import BlogEdit from '../../../common/components/admin/blog-edit'

type PageProps = {
  params: {
    blogId: string
  }
}

const BlogEditPage = async ({ params }: PageProps) => {
  const supabase = createClient()
  console.log(params)

  const { data: blogData } = await supabase
    .from('blogs')
    .select()
    .eq('id', params.blogId).single()

  if (!blogData) {
    return notFound()
  }

  return <BlogEdit blog={blogData}/>
}

export default BlogEditPage

