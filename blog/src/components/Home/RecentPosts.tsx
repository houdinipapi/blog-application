import { sortBlogs } from '@/utils';
import Link from 'next/link';
import React from 'react'


interface Props {
  blogs: any[];
}

const RecentPosts = ({blogs}: Props) => {

    const sortedBlogs = sortBlogs(blogs)
    
  return (
    <section
        className='w-full mt-32 px-32 flex flex-col items-center justify-center'
    >
        <div className='w-full justify-between flex'>

            <h2 className='inline-block font-bold capitalize text-4xl'>
                Recent Posts
            </h2>

            <Link
                href="/categories/all"
                className='inline-block font-medium text-accent underline underline-offset-2 text-lg'
            >
                View All
            </Link>

        </div>

        <div className='grid grid-cols-3 grid-rows-3 gap-16 mt-16'>
            {
                sortedBlogs.slice(0, 6).map((blog, index) => {
                    return (
                        <article className='col-span-1 row-span-1 relative'>
                            Blog Layout 3
                        </article>
                    )
                })
            }
        </div>

    </section>
  )
}

export default RecentPosts