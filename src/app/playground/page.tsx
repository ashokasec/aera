import Header from '@/components/playground/header'
import React from 'react'
import { email } from './email'
import Field from '@/components/playground/field'
import Link from 'next/link'
import Sidebar from '@/components/playground/sidebar'

const playground = () => {
    return (
        <main className='max-w-[1100px] m-auto max-h-screen min-h-screen grid grid-cols-[3fr_1.15fr] overflow-hidden'>
            <div className='border-x border-gray-300 max-h-screen min-h-screen flex flex-col overflow-hidden overflow-y-auto'>
                <Header />
                <div className='p-6 border border-gray-300 mx-4 mb-4 rounded-lg h-full'>
                    <Field emails={email} />
                </div>
                <div className='p-6 sticky bottom-0 border-t border-gray-300 bg-white flex space-x-3'>
                    <input type="text" className='bg-transparent w-full border px-3 rounded-md' placeholder='email for account verification with verification link' />
                    <button className='p-3 leading-none bg-gray-800 text-white text-[15px] rounded-md font-medium'>Generate</button>
                </div>
            </div>
            <Sidebar email={email} />
        </main>
    )
}

export default playground