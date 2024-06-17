import React from 'react'
import Renderer from '../email/renderer'

const Field = ({ emails }: any) => {
    return (
        <>
            {
                emails?.map((email: any, index: any) => (
                    <Renderer email={email} index={index} key={index} />
                ))
            }
        </>
    )
}

export default Field