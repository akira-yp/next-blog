import React, { Suspense } from 'react'
import BlogList from '../common/components/blog/blog-list'
import SectionTitle from '../common/components/section-title'
import { Flex } from '../common/components/chakra'

const Blog = () => {
  return (
    <Flex>
      <SectionTitle />
      {/* @ts-ignore*/}
      <BlogList />
    </Flex>
  )
}

export default Blog
