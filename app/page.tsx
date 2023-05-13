// メインページ
import React, { Suspense } from 'react'
import BlogList from './common/components/blog/blog-list'
import SectionTitle from './common/components/section-title'
import { Flex } from './common/components/chakra'

const Page = () => {
  return (
    // <div className="flex container max-w-screen-x1">
    <Flex>
      <SectionTitle />
      {/* @ts-ignore*/}
      <BlogList />
    </Flex>
  )
}

export default Page
