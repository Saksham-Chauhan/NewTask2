import React from 'react'

const Discuss = () => {
    return (
        <section className='container-fluid discuss mt-5'>
            <div className='container p-5'>
                <div className='row'>
                    <div className='col-md-6 col-lg-6 col-12'>
                        <h1 className='p-2'>Let’s Discuss</h1>
                        <p className='p-2'>Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor.</p>
                    </div>
                    <div className='col-md-6 col-lg-6 col-12'>
                        <input className='rounded-pill h-25 p-3' type="text" ></input>
                        <button className="btn rounded-pill " id='navbutton' type="submit">Sign Up</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discuss
