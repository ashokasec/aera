import React from 'react'

const DropIndicator = ({ beforeId }: { beforeId: string }) => {
    return (
        <div data-before={beforeId || '-1'} data-main="indicator" className='my-0.5 h-1 w-full bg-blue-200 opacity-0 rounded-lg'></div>
    )
}

export default DropIndicator