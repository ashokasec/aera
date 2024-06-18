"use client"

import Header from '@/components/playground/header'
import React from 'react'
import { email } from './email'
import Field from '@/components/playground/field'
import Link from 'next/link'
import Sidebar from '@/components/playground/sidebar'

const playground = () => {

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        clearHighlights()
        highlightIndicator(e)
    }

    const highlightIndicator = (e: any) => {
        const indicators = getIndicators()
        clearHighlights(indicators)
        const nearestIndicator = getNearestIndicator(e, indicators)
        nearestIndicator.element.style.opacity = "1"
    }

    const clearHighlights = (els?: HTMLElement[]): void => {
        const indicators = els || getIndicators();
        indicators.forEach((i) => {
            i.style.opacity = "0";
        });
    }

    const getNearestIndicator = (e: any, indicators: HTMLElement[]) => {
        const nearestIndicator = indicators.reduce(
            (closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = e.clientY - (box.top + 50)

                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child }
                } else {
                    return closest;
                }
            },
            {
                offset: Number.NEGATIVE_INFINITY,
                element: indicators[indicators.length - 1]
            }
        )
        return nearestIndicator
    }

    const getIndicators = (): HTMLElement[] => {
        return Array.from(document.querySelectorAll(`[data-main="indicator"]`)) as HTMLElement[];
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        clearHighlights()
        const entityName = e.dataTransfer.getData("entityName");
    }

    

    return (
        <main className='max-w-[1100px] m-auto max-h-screen min-h-screen grid grid-cols-[3fr_1.15fr] overflow-hidden'>
            <div className='border-x border-gray-300 max-h-screen min-h-screen flex flex-col overflow-hidden overflow-y-auto'>
                <Header />
                <div className='p-6 border border-gray-300 mx-4 mb-4 rounded-lg h-full' onDrop={handleDrop}
                    onDragOver={handleDragOver}>
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