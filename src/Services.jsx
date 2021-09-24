import React from 'react'
import SectionHead from './SectionHead'
import ServiceCard from './ServiceCard'
import s1 from './img/s1.jfif'
import s2 from './img/s2.jfif'
import s3 from './img/s3.jfif'
import s4 from './img/s4.jfif'
import s5 from './img/s5.jfif'
import s6 from './img/s6.jfif'



const Services = () => {
    return (
        <>
            <section className='mt-5'>
                <SectionHead heading='Lorem ipsum dolor' subheading='Services'/>
                <div className="container">
                    <div className="row">
                        <ServiceCard url={s1} heading='Website Design & Development' para='Progravida nibh vel velit auctor alinean , lorem quis bibendum..'/>
                        <ServiceCard url={s2} heading='On Demand Devs' para='Progravida nibh vel velit auctor alinean , lorem quis bibendum.'/>
                        <ServiceCard url={s3} heading='Webhosting ' para='Progravida nibh vel velit auctor alinean , lorem quis bibendum.'/>
                        <ServiceCard url={s4} heading='Website Design & Development' para='Progravida nibh vel velit auctor alinean , lorem quis bibendum..'/>
                        <ServiceCard url={s5} heading='On Demand Devs' para='Progravida nibh vel velit auctor alinean , lorem quis bibendum.'/>
                        <ServiceCard url={s6} heading='Webhosting ' para='Progravida nibh vel velit auctor alinean , lorem quis bibendum.'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
