import React from 'react';
import { EmailContentProps } from './types';

const Renderer = ({ email, index }: { email: EmailContentProps, index: number }) => {
    switch (email.type) {
        case "paragraph":
            return <p key={index} style={{
                fontSize: "15px",
                lineHeight: "1.65",
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                color: "#1f2937",
                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            }} spellCheck="false">{email.text}</p>;
        case "profile":
            return (
                <a href={email?.link ? email?.link : "#"} target={email?.link && "_blank"} key={index} className='w-fit leading-none space-x-3 flex items-center mb-4'>
                    <figure>
                        <img src={email.imgSrc} className='max-h-10 rounded shadow-md' />
                    </figure>
                    {email.name && <span className='text-xl font-lora font-bold text-gray-800'>{email.name}</span>}
                </a>
            );
        case "button":
            return (
                <div key={index} className='my-4'>
                    <a href={email.link} target={email.link && "_blank"}>
                        <button className='bg-blue-500 font-medium text-white leading-none py-3 px-4 rounded-md text-[14px]'>{email.text}</button>
                    </a>
                </div>
            );
        case "image":
            return (
                <figure key={index} className='my-4'>
                    <img src={email.src} alt={email.alt} className='rounded-xl' />
                </figure>
            );
        case "h1":
            return (
                <h1 className='text-[27px] font-bold mt-4 mb-4' contentEditable>{email.text}</h1>
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
                <p key={index} className='my-4'>
                    <a href={email.link} className='underline text-blue-500 font-medium'>{email.text}</a>
                </p>
            );
        case "separator":
            return (
                <hr key={index} className='border-gray-300 my-4' />
            );
        case "signature":
            return (
                <div key={index} className='space-y-[2px] my-4'>
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
