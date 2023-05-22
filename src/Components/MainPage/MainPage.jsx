import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import MainPageitem from '../MainPageitem/MainPageitem';
import { BeatLoader } from 'react-spinners';
import './MainPage.css'

const MainPage = () => {
    const [muser, setMUser] = useState([])
    const [spin, setSpinner] = useState(true)
    useEffect(() => {
        fetch('https://toy-cars.onrender.com/')
            .then(req => req.json())
            .then(data => setMUser(data))
        setSpinner(false)
    }, [muser])
    return (
        <div>
            {
                spin ? <div className='spinner'>
                    <BeatLoader color="#36d7b7" /></div> : <div>
                    <div className='caurosal'>
                        <Carousel pause={false}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://images.pexels.com/photos/163768/car-toy-childhood-child-163768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://images.pexels.com/photos/4491563/pexels-photo-4491563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://images.pexels.com/photos/4484789/pexels-photo-4484789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                    </div>
                    <div className='all-toy mt-6'><h3>Gallery </h3></div>

                    <div className='item-card'>
                        {
                            muser.map(user => <MainPageitem key={user._id} user={user}></MainPageitem>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default MainPage;