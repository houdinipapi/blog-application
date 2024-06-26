import React from 'react'
import Tag from '../Elements/tag';
import Link from 'next/link';
import Image from 'next/image';

interface FirstBlogLayoutProps {
  blog: any; // Replace 'any' with the actual type of the 'blog' prop
}

const FirstBlogLayout = ({blog}: FirstBlogLayoutProps) => {
  return (
    <div className='group inline-block overflow-hidden rounded-xl'>
        <div
                className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10"
            />
            <Image
                src={blog.image.filePath.replace("../public", "")}
                placeholder='blur'
                blurDataURL={blog.image.blurhashDataUrl}
                alt={blog.title}
                width={blog.image.width}
                height={blog.image.height}
                className='group-hover:scale-105 transition-all ease duration-300 w-full h-full object-center object-cover rounded-xl'
            />

            <div className="w-full absolute bottom-0 p-10 z-20">
                {/* <Link href={`/categories/${blog.tags[0]}`}>
                    {blog.tags[0]}
                </Link> */}
                <Tag
                    link={`/categories/${blog.tags[0]}`}
                    name={blog.tags[0]}
                    className='px-6 text-sm py-2 !border'
                />
                <Link href={blog.url} className='mt-6'>
                    <h2 className='text-2xl capitalize font-bold text-light mt-4'>
                        <span className='bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                            {blog.title}
                        </span>
                    </h2>
                </Link>
                
            </div>
    </div>
  )
}

export default FirstBlogLayout