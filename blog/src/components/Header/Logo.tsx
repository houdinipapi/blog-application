import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import profileImg from "/public/profblk-img.png"

const Logo = () => {
  return (
    <Link href="/" className='text-dark flex items-center'>
        <div className='w-16 rounded-full overflow-hidden border border-solid border-dark mr-4'>
            <Image
                src={profileImg}
                alt="Profile Logo"
                className='w-full h-auto rounded-full'
            />
        </div>

        <span className='font-bold text-xl'>Achiomwa</span>
    </Link>
  )
}

export default Logo