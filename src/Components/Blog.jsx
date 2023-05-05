import React from 'react'
import ChefRecipieBanner from './ChefRecipieBanner'
import BlogContent from './BlogContent'

const Blog = () => {
  return (
    <>
      <ChefRecipieBanner heading="BLOG PAGE" title="Blog Page" />
      <div className='relative top-[16rem] flex flex-col items-center p-2'>
        <BlogContent/>
      </div>
    </>
  )
}

export default Blog