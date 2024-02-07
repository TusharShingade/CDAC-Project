
import React from 'react';
import image1 from "../Televisions.jpeg";
import image2 from "../Mobile.jpeg";
import image3 from "../Headphones.jpeg";
import { useSelector } from 'react-redux';
import { Carousel } from 'react-bootstrap';

export default function HeaderComp() {

    const mystate = useSelector((state)=>state.logged);
    return (
        <div>
            <div style={{display: mystate.loggedIn ? "none" : "block" }} >
            <div className=''>
            <h1>Welcome to Electro-Mart</h1>
            </div>
            
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-150"
                        src={image1}
                        alt="Image 1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-150"
                        src={image2}
                        alt="Image 2"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-150"
                        src={image3}
                        alt="Image 3"
                    />
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    );
}