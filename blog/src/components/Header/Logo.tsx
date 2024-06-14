import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import profileImg from "/public/profblk-img.png"

const Logo = () => {
  return (
    <Link href="/">
        <div className='w-16 rounded-full overflow-hidden border border-solid border-dark'>
            <Image
                src={profileImg}
                alt="Profile Logo"
                className='w-full rounded-full'
            />
        </div>

        <span>Achiomwa</span>
    </Link>
  )
}

export default Logo