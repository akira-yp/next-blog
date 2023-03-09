// メインページ
import React,{ Suspense } from 'react'
import BlogList from './common/components/blog/blog-list'
import Loading from './loading'

const Page = () => {
  return (
    <div className="flex-1 container max-w-screen-x1 mx-auto px-5 py-10">
      <div className="h-full">
        <Suspense fallback={<Loading/>}>
          {/* @ts-ignore*/}
          <BlogList />
        </Suspense>
      </div>
    </div>
  )
}

export default Page
