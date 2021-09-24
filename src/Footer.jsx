import React from 'react'
import url from './img/logo.png'

const Footer = () => {
    return (
        <>
           <div className='container-fluid pt-5 foot'>
                <div className='row'>
                    <div className='col-md-4 col-lg-4 col-12'>
                    <figure className='w-25 d-block m-auto'>
                           <img src={url} alt="" />
                           <caption>Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum aby the readable.</caption>
                       </figure>
                    </div>
                    <div className='col-md-2 col-lg-2 col-12'>
                        <ul class="list-group">
                            <li class="list fw-bolder">Links</li>
                            <li class="list">Our Clients</li>
                            <li class="list">Our Benefits</li>
                            <li class="list">Our Benefits</li>
                        </ul>
                    </div>
                    <div className='col-md-2 col-lg-2 col-12'>
                        <ul class="list-group">
                            <li class="list fw-bolder">Information</li>
                            <li class="list">Our Clients</li>
                            <li class="list">Privacy Policy</li>
                            <li class="list">Our Benefits</li>
                        </ul>
                    </div>
                    <div className='col-md-4 col-lg-4 col-12'>
                        <ul class="list-group">
                            <li class="list fw-bolder">Contact us</li>
                            <li class="list">+91 9711999770 , +1 833-880-3355</li>
                            <li class="list">info@bytequests.com</li>
                            <li class="list">84,Block A, Sector 4,Noida,UP,201301</li>
                        </ul>
                    </div>
                    <hr />
                </div>
                <div className='row'>
                    <p className='text-center'>Copyright 2020 ByteQuest Software Private Limited. All Rights Reserved.</p>
                </div>
           </div> 
        </>
    )
}

export default Footer
