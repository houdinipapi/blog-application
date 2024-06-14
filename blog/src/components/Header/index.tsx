import React from 'react'
import Logo from './Logo';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav className='w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm'>
        <Link href="/" className='mr-2' title='Home'>Home</Link>
        <Link href="/about" className='mx-2' title='About'>About</Link>
        <Link href="/contact" className='mr-2' title='Contact'>Contact</Link>
        <button>T</button>
      </nav>
      <div>
        <a href="http://example.com">LinkedIn</a>
        <a href="http://example.com">Twitter</a>
        <a href="http://example.com">Facebook</a>
        <a href="http://example.com">GitHub</a>
        <a href="http://example.com">Dribbble</a>
      </div>
    </header>
  );
}

export default Header;