"use client"

import React from 'react'
import { useForm } from 'react-hook-form';

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



        </footer>
    );
};

export default Footer;