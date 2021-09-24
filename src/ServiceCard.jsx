import React from 'react'

const ServiceCard = (props) => {
    return (
        <>
            <div className="col-sm m-5 rounded">
                <div className="card">
                    <img src={props.url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3>{props.heading}</h3>
                        <p className="card-text">{props.para}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard
