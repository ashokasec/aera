import Header from '@/components/playground/header'
import React from 'react'
import { email } from './email'
import Field from '@/components/playground/field'
import Link from 'next/link'
import Sidebar from '@/components/playground/sidebar'

const playground = () => {
    return (
        <main className='max-w-[1300px] m-auto max-h-screen min-h-screen grid grid-cols-[0.75fr_3fr_1.15fr] overflow-hidden'>
            <nav className='p-6 h-screen'>
                <div className='h-6 flex flex-col'>
                    <p className='font-playfair-fr-moderne text-[34px] font-medium leading-none'>aera</p>
                    <p className='text-sm mt-2'><span className='text-gray-500'>by</span> <Link href="https://x.com/ashokasec" className='underline text-blue-500 font-medium'>@ashokasec</Link></p>
                </div>
            </nav>
            <div className='border-x border-gray-300 max-h-screen min-h-screen flex flex-col overflow-clip overflow-y-auto'>
                <Header />
                <div className='p-6'>
                    <Field emails={email} />
                </div>
                <div className='p-6 sticky bottom-0 border-t bg-white flex space-x-3'>
                    <input type="text" className='bg-transparent w-full border px-3 rounded-md' placeholder='email for account verification with verification link' />
                    <button className='p-3 leading-none bg-gray-800 text-white text-[15px] rounded-md font-medium'>Generate</button>
                </div>
            </div>
            <Sidebar email={email} />
        </main>
    )
}

export default playground