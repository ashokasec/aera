import React from 'react';
import { EmailContentProps } from './types';

const Renderer = ({ email, index }: { email: EmailContentProps, index: number }) => {
    switch (email.type) {
        case "paragraph":
            return <p key={index} className={`leading-relaxed my-6 outline-none`} spellCheck="false">{email.text}</p>;
        case "profile":
            return (
                <a href={email?.link ? email?.link : "#"} target={email?.link && "_blank"} key={index} className='w-fit leading-none space-x-3 flex items-center my-6'>
                    <figure>
                        <img src={email.imgSrc} className='size-10 rounded-md shadow-md' />
                    </figure>
                    {email.name && <span className='text-xl font-space-grotesk font-bold'>{email.name}</span>}
                </a>
            );
        case "button":
            return (
                <div key={index} className='my-6'>
                    <a href={email.link}>
                        <button className='bg-blue-600 text-white leading-none py-3 px-5 rounded-md'>{email.text}</button>
                    </a>
                </div>
            );
        case "image":
            return (
                <figure key={index} className='my-6'>
                    <img src={email.src} alt={email.alt} className='rounded-xl' />
                </figure>
            );
        case "h1":
            return (
                <h1 className='text-3xl font-bold mt-8 mb-4' contentEditable>{email.text}</h1>
            );
        case "h2":
            return (
                <h2 className='text-2xl font-bold mt-8 mb-4' contentEditable>{email.text}</h2>
            );
        case "h3":
            return (
                <h3 className='text-xl font-bold mt-8 mb-4' contentEditable>{email.text}</h3>
            );
        case "link":
            return (
                <p key={index} className='my-6'>
                    <a href={email.link} className='underline text-blue-500 font-medium'>{email.text}</a>
                </p>
            );
        case "separator":
            return (
                <hr key={index} className='border-gray-300 my-6' />
            );
        case "signature":
            return (
                <div key={index} className='space-y-[2px]'>
                    <p className='text-gray-500 text-[13px]'>From,</p>
                    <p className='text-slate-500 text-[13px] font-bold'>{email.name}</p>
                    {email?.role && <p className='text-gray-500 text-[13px]'>{email.role}</p>}
                    {email?.address && <p className='text-gray-500 text-[13px]'>{email.address}</p>}
                </div>
            );
        default:
            return null;
    }
};

export default Renderer;
