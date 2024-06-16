"use client"

import React from 'react'
import { useForm } from 'react-hook-form';
import LinkedinIcon from '../Icons/Icons';
import TwitterIcon from '../Icons/Twitter';
import Github from '../Icons/Github';
import DribbleIcon from '../Icons/Dribbble';
import Link from 'next/link';

const Footer = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);
    console.log(errors);

    return (
        <footer className='mt-16 rounded-xl bg-dark m-10 flex flex-col items-center text-light'>
            <h3 className='mt-16 font-medium text-center capitalize text-4xl px-4'>
                Lorem ipsum | Sit consectetur | Adipisicing elit.
            </h3>

            <p className='mt-5 px-4 text-center w-3/5 font-light text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nulla molestiae saepe praesentium qui sequi commodi.
            </p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className='mt-6 min-w-[384px] flex items-stretch bg-light p-2 rounded mx-4'
            >
                <input
                    type="text"
                    placeholder="Enter Your Email..."
                    {...register("Email", {required: true})}
                    className='w-full bg-transparent text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1'
                />

                <input
                    type="submit"
                    className='bg-dark text-light cursor-pointer font-medium rounded px-5 py-1'
                />
            </form>

            <div className='flex items-center mt-8'>
        
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
                className='inline-block w-6 h-6 mr-4 fill-light'
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

            <div className='w-full mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-row items-center justify-between'>
                <span className='text-center'>&copy; 2024 Achiomwa. All rights reserved.</span>
                <Link href="/sitemap.xml" className='text-center underline'>
                    sitemap.xml
                </Link>
                <div className='text-center'>
                    Made with &hearts; by <a href="#" className='underline'>Achiomwa</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;