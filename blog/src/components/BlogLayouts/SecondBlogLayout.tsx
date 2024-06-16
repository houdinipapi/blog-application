import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
// import Tag from '../Elements/tag';

interface Props {
  blog: any; // Replace 'any' with the actual type of the 'blog' prop
}

const SecondBlogLayout = ({blog}: Props) => {
  return (
    <div className='grid grid-cols-12 gap-4 items-center text-dark'>

        <Link href={blog.url} className='col-span-4 h-full rounded-xl overflow-hidden'>
            <Image
                src={blog.image.filePath.replace("../public", "")}
                placeholder='blur'
                blurDataURL={blog.image.blurhashDataUrl}
                alt={blog.title}
                width={blog.image.width}
                height={blog.image.height}
                className=' aspect-square w-full h-full object-center object-cover rounded-xl'
            />
        </Link>

        <div className="col-span-8 w-full">
            {/* <Link href={`/categories/${blog.tags[0]}`}>
                {blog.tags[0]}
            </Link> */}
            {/* <Tag
                link={`/categories/${blog.tags[0]}`}
                name={blog.tags[0]}
                className='px-6 text-sm py-2 !border'
            /> */}

            <span className='uppercase text-accent font-semibold text-sm'>
                {blog.tags[0]}
            </span>

            {/* // Removed inline-block    */}
            <Link href={blog.url} className='my-1'>  
                <h2 className='text-lg capitalize font-semibold'>
                    <span className='bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                        {blog.title}
                    </span>
                </h2>
            </Link>

            <span className='capitalize text-dark/50 font-semibold text-base'>
                {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
            </span>
            
        </div>

    </div>
  )
}

export default SecondBlogLayout;