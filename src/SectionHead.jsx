import React from 'react'

const SectionHead = (props) => {
    return (
        <>
            <div className='container text-center pt-5'>
                <h6>{props.heading}</h6>
                <h1>{props.subheading}</h1>
            </div>
        </>
    )
}

export default SectionHead
