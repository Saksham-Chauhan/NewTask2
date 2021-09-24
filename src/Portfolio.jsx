import React from 'react'
import SectionHead from './SectionHead'
import SubProduct from './SubProduct'

const Portfolio = () => {
    return (
        <>
            <section className='mt-5'>
                <SectionHead heading='Lorem ipsum dolor' subheading='Portfolio/ Case Studies'/>
            </section>
            <div class="container  mt-4">
                <div class="row">
                    <SubProduct title='Servic 1'
                        para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed, non aperiam architecto commodi
                    dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed, non aperiam architecto commodi
                    dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed, non aperiam architecto commodi
                    dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed, non aperiam architecto commodi
                    dicta?'
                    />
                    <SubProduct title='Servic 2'
                        para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed, non aperiam architecto commodi
                    dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed, non aperiam architecto commodi
                    dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed, non aperiam architecto commodi
                    dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed, non aperiam architecto commodi
                    dicta?'
                    />
                    <SubProduct title='Servic 3'
                        para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed, non aperiam architecto commodi
                    dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed, non aperiam architecto commodi
                    dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed, non aperiam architecto commodi
                    dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed, non aperiam architecto commodi
                    dicta?'
                    />
                </div>
            </div>
        </>
    )
}

export default Portfolio
