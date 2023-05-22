import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

import './LoginForm.css'
import { auth } from '../firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from "firebase/auth";


const provider = new GoogleAuthProvider();
const LoginForm = () => {

    const [toggol, setToggol] = useState(false)
    const [signup, setSignup] = useState({
        name: '',
        email: '',
        password: '',
        img: ''
    })

    const handelChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value })
    }

    // signup
    const handelSignupSubmit = (e) => {
        createUserWithEmailAndPassword(auth, signup.email, signup.password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: signup.name, photoURL: signup.img || "https://w7.pngwing.com/pngs/782/115/png-transparent-avatar-boy-man-avatar-vol-1-icon-thumbnail.png"
                }).then(() => {
                    navigate('/home')
                }).catch((error) => {
                    alert(error)
                });
                setToggol(false)
            })
            .catch((error) => {
                alert("Account Alrady created please login")
                setToggol(false)
            });



        e.preventDefault();
    }

    // login
    const navigate = useNavigate()
    const handelLoginSubmit = (e) => {
        signInWithEmailAndPassword(auth, signup.email, signup.password)
            .then(() => {
                navigate('/home')
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            });

        e.preventDefault();
    }

    const handelGooglesignin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                navigate('/home')
            }).catch((error) => {
                alert(error)
            });
    }
    return (
        <div>
            {
                toggol ? <div className='Signup'>
                    <form action="" onSubmit={handelSignupSubmit}>
                        <h4>Sign Up Form</h4>
                        <TextField className='input' value={signup.name} onChange={handelChange} name='name' id="standard-basic" label="Name" variant="standard" required /><br />
                        <TextField className='input' value={signup.email} onChange={handelChange} name='email' id="standard-basic" label="Email" variant="standard" required /><br />
                        <TextField className='input' value={signup.password} onChange={handelChange} name='password' id="standard-basic" label="Password" variant="standard" required /><br />
                        <TextField className='input' value={signup.img} onChange={handelChange} name='img' id="standard-basic" label="image link" variant="standard" /><br />
                        <Button className='button' sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                            Check Answer
                        </Button>

                        <p>Already have an account ? <span onClick={() => setToggol(!toggol)}>Login</span></p>

                    </form >
                </div > : <div className='Signup'>
                    <form action="" onSubmit={handelLoginSubmit}>
                        <h4>LogIn</h4>
                        <TextField className='input' value={signup.email} onChange={handelChange} name='email' id="standard-basic" label="Email" variant="standard" required /><br />
                        <TextField className='input' value={signup.password} onChange={handelChange} name='password' id="standard-basic" label="Password" variant="standard" required /><br />
                        <Button className='button' sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                            Check Answer
                        </Button>
                        <p>Don't have an account ? <span onClick={() => setToggol(!toggol)}>Signup</span></p>
                    </form >
                </div >
            }
            <div className='google'>
                <button onClick={handelGooglesignin} className='googleSignin'>Google Signin</button>
            </div>
        </div>
    );
};

export default LoginForm;