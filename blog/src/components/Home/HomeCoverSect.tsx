import { sortBlogs } from '@/utils';
import React from 'react'
import Image from "next/image"

interface Props {
  blogs: any[];
}

const HomeCoverSect = ({blogs}: Props) => {

    const sortedBlogs = sortBlogs(blogs);

    const blog = sortedBlogs[0];

    return (
        <div className='w-full inline-block'>
            <article className='flex flex-col items-start justify-end mx-10 relative h-[85vh]'>
                <Image
                    src={blog.image.filePath.replace("../public", "")}
                    placeholder='blur'
                    blurDataURL={blog.image.blurhashDataUrl}
                    alt={blog.title}
                    fill
                    className='w-full h-full object-center object-cover rounded-3xl'
                />
            </article>
        </div>
    )
}

export default HomeCoverSect