// メインページ
import React, { Suspense } from 'react'
import BlogList from './common/components/blog/blog-list'
import SectionTitle from './common/components/section-title'

const Page = () => {
  return (
    <div className="flex container max-w-screen-x1">
      <SectionTitle />
      {/* @ts-ignore*/}
      <BlogList />
    </div>
  )
}

export default Page
