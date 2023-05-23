import React, { useEffect, useState } from 'react';
import ShowAllDetles from '../ShowAllDetles/ShowAllDetles';

import './Home.css'
import { BeatLoader } from 'react-spinners';

const Home = () => {
    const [user, setUser] = useState([])
    const [spin, setSpinner] = useState(true)

    useEffect(() => {
        fetch('https://toy-cars.onrender.com/')
            .then(req => req.json())
            .then(data => setUser(data))
        setSpinner(false)
    }, [user])
    return (
        <div>
            {
                spin ? <div className='spinner'>
                    <BeatLoader color="#36d7b7" /></div> : <div><div className='all-toy'><h3></h3></div>
                    <div className='item-card'>
                        {
                            user.map(user => <ShowAllDetles key={user._id} user={user}></ShowAllDetles>)
                        }
                    </div></div>
            }
        </div>
    );
};

export default Home;