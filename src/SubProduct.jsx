import React from 'react'

const SubProduct = (props) => {
    return (
        <>
        {/* col-lg-3 col-md-3 col-8 mt-2 mb-2 ms-5 me-5 */}
            <div class="col-sm m-1 rounded bg-secondary subproduct">
                <h1 className='text-center'>{props.title}</h1>
                <p>{props.para}</p>
            </div>
        </>
    )
}

export default SubProduct
