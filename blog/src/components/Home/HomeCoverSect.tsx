import { sortBlogs } from '@/utils';
import React from 'react'

interface Props {
  blogs: any[];
}

const HomeCoverSect = ({blogs}: Props) => {

    const sortedBlogs = sortBlogs(blogs);

    const blog = sortedBlogs[0];
    
    return (
        <div>HomeCoverSect</div>
    )
}

export default HomeCoverSect