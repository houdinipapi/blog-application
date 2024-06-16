import { sortBlogs } from '@/utils';
import React from 'react'

interface Props {
  blogs: any[];
}

const FeaturedPosts = ({blogs}: Props) => {

    const sortedBlogs = sortBlogs(blogs)
    
  return (
    <section
        className='w-full mt-32 px-32 flex flex-col items-center justify-center'
    >
        <h2 className='w-full inline-block font-bold capitalize text-4xl'>Featured Posts</h2>
    </section>
  )
}

export default FeaturedPosts