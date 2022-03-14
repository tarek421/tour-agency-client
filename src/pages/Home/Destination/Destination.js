import React from 'react';
import './Destination.css';
import Ratings from './Rating';


const Destination = ({ destination }) => {
    const { title, img, duration, rating } = destination;
    return (
        <div className="col-md-4 col-sm-12 mt-3">
                <div className="main-box">
                    <div className="box">
                        <img src={img} alt="" />
                        <div className="box-content">
                            <h6 className="title">{title}</h6>
                            <span className="post">
                                <a href="#home" className="button">BOOK NOW</a>
                            </span>
                        </div>
                    </div>
                    <div className="content mt-3">
                        <h4>{title}</h4>
                        <h6><Ratings rating={rating} /></h6>
                        <hr />
                        <p>{duration}</p>
                        <p>Opening: 8Am - 10Am</p>
                    </div>
                </div>
        </div>
    );
};

export default Destination;