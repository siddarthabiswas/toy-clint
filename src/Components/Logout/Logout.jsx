import React, { useContext } from 'react';
import { auth } from '../firebase.config';
import { signOut } from "firebase/auth";
import { Catagori } from '../../App';
import { useNavigate } from 'react-router-dom';

import './Logout.css'

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logout = () => {
    const [signin, isSignin] = useContext(Catagori)
    const navigate = useNavigate()
    const handelDelet = () => {
        signOut(auth).then(() => {
            toast("Logout successfully!")
            isSignin(false)
            navigate('/home')
        }).catch((error) => {

        });
    }
    return (
        <div className='logout'>
            <h3>Are You Sure To Logout</h3>
            <button onClick={handelDelet}>Logout</button>
        </div>
    );
};

export default Logout;