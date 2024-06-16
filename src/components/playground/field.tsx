import React from 'react'
import Renderer from '../email/renderer'

const Field = ({ emails }: any) => {
    return (
        <>
            {
                emails?.map((email: any, index: any) => (
                    <div className='group' key={index}>
                        <Renderer email={email} index={index} />
                    </div>
                ))
            }
        </>
    )
}

export default Field