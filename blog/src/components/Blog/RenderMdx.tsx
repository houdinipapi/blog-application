"use client"

import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image';

interface RenderMdxProps {
  blog: any;
}

const mdxComponents = {
    Image
}

const RenderMdx = ({blog}: RenderMdxProps) => {

    const MDXContent = useMDXComponent(blog.body.code)
    return (
        <div className='col-span-8 font-ra'>
            <MDXContent components={mdxComponents} />
        </div>
    )
}

export default RenderMdx;