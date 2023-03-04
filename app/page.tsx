// メインページ
import React,{ Suspense } from 'react'
import BlogList from './common/components/blog/blog-list'
import Loading from './loading'

const Page = () => {
  return (
    <div className="h-full">
      <Suspense fallback={<Loading/>}>
        {/* @ts-ignore*/}
        <BlogList />
      </Suspense>
    </div>
  )
}

export default Page
