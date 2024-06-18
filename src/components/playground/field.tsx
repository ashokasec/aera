import React from 'react'
import Renderer from '../email/renderer'
import DropIndicator from '../email/drop_indicator'

const Field = ({ emails }: any) => {
    return (
        <>
            {
                emails?.map((email: any, index: any) => (
                    <>
                        <Renderer email={email} index={index} key={index} />
                        <DropIndicator beforeId='-1' />
                    </>
                ))
            }
        </>
    )
}

export default Field