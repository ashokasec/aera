"use client"

import { IconMinus, IconPlus } from '@tabler/icons-react';
import React, { useState } from 'react';

const Header = () => {

    const [header, setHeader] = useState({
        subject: "Welcome to Likhavat's Newsletter - Latest Updates and Exclusive Offers 🎉",
        from: `Shivam Gupta <shivam@chakravyu.com>`,
        to: `Avyay <avyay@example.com>`,
    });

    const handleInputChange = (e: any, fieldName: string) => {
        const { value } = e.target;
        setHeader((prevHeader) => ({
            ...prevHeader,
            [fieldName]: value,
        }));
    };

    return (
        <div className="h-fit p-6 space-y-6">
            <h1 className='text-2xl leading-normal font-bold text-gray-800'>{header.subject}</h1>
            <div className="transition-all duration-700 ease-linear overflow-clip text-sm">
                <div className='grid grid-cols-[0.2fr_1fr] items-center leading-none'>
                    <label htmlFor="subject" className='text-gray-500'>Subject</label>
                    <input type="text" name="subject" id="subject" placeholder="Welcome to Likhavat's Newsletter - Latest Updates and Exclusive Offers 🎉" className='w-full border rounded-md p-2 border-gray-300' spellCheck="false" value={header.subject} onChange={(e) => handleInputChange(e, 'subject')} />
                </div>
                <div className='grid grid-cols-[0.2fr_1fr] items-center leading-none mt-3'>
                    <label htmlFor="from" className='text-gray-500'>From</label>
                    <input type="text" name="from" id="from" placeholder="Shivam Gupta <admin@ashokasec.com>" className='px-3 w-full border-none h-8' spellCheck="false" value={header.from} onChange={(e) => handleInputChange(e, 'from')} />
                </div>
                <div className='grid grid-cols-[0.2fr_1fr] items-center leading-none mt-1'>
                    <label htmlFor="to" className='text-gray-500'>To</label>
                    <input type="text" name="to" id="to" placeholder="You <warrior@ashokasec.com>" className='px-3 w-full border-none h-8' spellCheck="false" value={header.to} onChange={(e) => handleInputChange(e, 'to')} />
                </div>
            </div>
        </div>
    );
};

export default Header;
