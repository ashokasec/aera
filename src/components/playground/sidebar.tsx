"use client"

import { IconAlignJustified, IconFileExport, IconH1, IconH2, IconH3, IconInputAi, IconLayoutDistributeHorizontal, IconLink, IconMailForward, IconPhoto, IconSeparatorHorizontal, IconSignature, IconStar } from '@tabler/icons-react'
import React, { ReactNode } from 'react';
import { convert_react_to_vanilla } from '../email/converter';
import { toast } from 'sonner';
import Link from 'next/link';

interface ListItemProps {
    entity_name: string,
    icon: ReactNode;
    text: string;
    className?: string;
    onClick?: () => void;
    handleDragStart: (e: React.DragEvent<HTMLLIElement>, entity: { entity_name: string }) => void;
}

const entitiesData = [
    {
        entity_name: "paragraph",
        icon: <IconAlignJustified size={18} />,
        text: "Paragraph"
    },
    {
        entity_name: "image",
        icon: <IconPhoto size={18} />,
        text: "Image"
    },
    {
        entity_name: "link",
        icon: <IconLink size={18} />,
        text: "Link"
    },
    {
        entity_name: "separator",
        icon: <IconSeparatorHorizontal size={18} />,
        text: "Separator"
    },
    {
        entity_name: "signature",
        icon: <IconSignature size={18} />,
        text: "Signature"
    },
    {
        entity_name: "button",
        icon: <IconInputAi size={18} />,
        text: "Button"
    },
    {
        entity_name: "profile",
        icon: <IconStar size={18} />,
        text: "Profile"
    }

]

const ListItem: React.FC<ListItemProps> = ({ entity_name, icon, text, className, onClick, handleDragStart }) => {
    return (
        <li className={`col-span-3 border-gray-300 p-1 items-center space-x-3 font-medium shadow-sm bg-gray-50/50 cursor-grab active:cursor-grabbing hover:border-gray-400 hover:shadow-md hover:bg-gray-100/60 transition-all rounded-md leading-none text-gray-900 border flex ${className || ''}`} onClick={onClick} draggable="true" onDragStart={(e) => handleDragStart(e, { entity_name })}
        >
            <span className='border p-2 aspect-square rounded-md border-gray-300 bg-gray-100'>
                {icon}
            </span>
            <span>{text}</span>
        </li >
    );
}

const Sidebar = ({ email }: any) => {

    const handleCopyBtn = (email_to_copy: []) => {
        const sad = convert_react_to_vanilla(email_to_copy)
        navigator.clipboard.writeText(sad)
        toast.info('Email Design Copied to your Clipboard')
    }

    const handleDragStart = (e: React.DragEvent<HTMLLIElement>, entity: { entity_name: string }) => {
        e.dataTransfer.setData("entityName", entity.entity_name);
    }

    return (
        <aside>
            <div className='flex items-end p-6'>
                <Link href="https://github.com/ashokasec/aera" target='_blank'><p className='font-playfair-fr-moderne text-[34px] font-medium leading-none h-10'>aera</p></Link>
                <p className='text-sm mt-2 pb-[2px] ml-2'><span className='text-gray-500'>by</span> <Link href="https://x.com/ashokasec" target='_blank' className='underline text-blue-500 font-medium'>@ashokasec</Link></p>
            </div>
            <hr className='bg-gradient-to-r from-gray-300' />
            <div className='p-6'>
                <span className='font-semibold text-xl'>Entities</span>
                <ul className="grid grid-cols-3 gap-2 py-4 text-sm">
                    <>
                        <li className="col-span-1 border border-gray-300 rounded-md grid place-content-center py-2"><IconH1 /></li>
                        <li className="col-span-1 border border-gray-300 rounded-md grid place-content-center py-2"><IconH2 /></li>
                        <li className="col-span-1 border border-gray-300 rounded-md grid place-content-center py-2"><IconH3 /></li>
                    </>
                    {
                        entitiesData.map(({ entity_name, icon, text }) => (
                            <ListItem icon={icon} text={text} key={entity_name} entity_name={entity_name} handleDragStart={handleDragStart} />
                        ))
                    }
                </ul>
            </div>
            <div className='mt-2 p-6'>
                <span className='font-semibold text-xl'>More</span>
                <ul className="grid py-4 text-sm space-y-2">
                    <li className='bg-gray-50/50 cursor-pointer hover:border-gray-300 hover:shadow-sm hover:bg-gray-100/60 transition-all rounded-md p-3 leading-none text-gray-900 font-medium border flex items-center' onClick={() => handleCopyBtn(email)}><span className='mr-3'><IconFileExport size={18} /></span>Copy Design</li>
                    <li className='bg-gray-50/50 cursor-pointer hover:border-gray-300 hover:shadow-sm hover:bg-gray-100/60 transition-all rounded-md p-3 leading-none text-gray-900 font-medium border flex items-center'><span className='mr-3'><IconLayoutDistributeHorizontal size={18} /></span>Preview Design</li>
                    <li className='bg-gray-50/50 cursor-pointer hover:border-gray-300 hover:shadow-sm hover:bg-gray-100/60 transition-all rounded-md p-3 leading-none text-gray-900 font-medium border flex items-center'><span className='mr-3'><IconMailForward size={18} /></span>Send Direclty</li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar