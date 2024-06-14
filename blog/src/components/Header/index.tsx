import React from 'react'
import Logo from './Logo';
import Link from 'next/link';
import LinkedinIcon from '../Icons/Icons';
import Github from '../Icons/Github';
import TwitterIcon from '../Icons/Twitter';
import DribbleIcon from '../Icons/Dribbble';
import SunIcon from '../Icons/Sun';

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav className='w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm'>
        <Link href="/" className='mr-2' title='Home'>Home</Link>
        <Link href="/about" className='mx-2' title='About'>About</Link>
        <Link href="/contact" className='mr-2' title='Contact'>Contact</Link>
        <button title="Toggle Theme">
          <SunIcon className={undefined} />
        </button>
      </nav>
      <div>
        
        {/* Linkedin */}
        <a
          title='LinkedinIcon'
          href="http://example.com"
          className='inline-block w-6 h-6 mr-4'
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>

        {/* Twitter */}
        <a
          title='TwitterIcon'
          href="http://example.com"
          className='inline-block w-6 h-6 mr-4'
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>

        {/* Github */}
        <a
          title='GithubIcon'
          href="http://example.com"
          className='inline-block w-6 h-6 mr-4'
        >
          <Github className="hover:scale-125 transition-all ease duration-200" />
        </a>

        {/* Dribble */}
        <a
          title='DribbbleIcon'
          href="http://example.com"
          className='inline-block w-6 h-6 mr-4'
        >
          <DribbleIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>

      </div>
    </header>
  );
}

export default Header;