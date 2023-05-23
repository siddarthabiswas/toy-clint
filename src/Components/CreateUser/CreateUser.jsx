import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateUser.css'


const CreateUser = () => {
    const [form, setForm] = useState({
        seller_name: "",
        seller_img: "",
        seller_email: "",
        seller_rating: "",
        toy_name: "",
        toy_img: "",
        toy_price: "",
        available_quantity: "",
        toy_rating: "",
        toy_description: "",
    })

    const handelChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }
    const navigate = useNavigate()

    const handelsubmit = (e) => {
        fetch('https://toy-cars.onrender.com/postData', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        navigate('/')
        e.preventDefault()
    }




    return (
        <div>

            <div>
                <form action="" onSubmit={handelsubmit}>
                    <h4>Add New Item</h4>
                    <label htmlFor="seller_name">Seller Name</label>
                    <input className='form-control' placeholder='Enter Seller Name' type="text" value={form.seller_name} onChange={handelChange} name="seller_name" id="seller_name" required />

                    <label htmlFor="seller_img">Seller Image Link </label>
                    <input className='form-control' placeholder='Enter Seller Image Link' type="text" value={form.seller_img} onChange={handelChange} name="seller_img" id="seller_img" required />

                    <label htmlFor="address">Seller Email</label>
                    <input className='form-control' placeholder='Enter Seller Email' type="email" value={form.seller_email} onChange={handelChange} name="seller_email" id="seller_email" required />

                    <label htmlFor="seller_rating">Seller Rating</label>
                    <input className='form-control' placeholder='Enter Seller Rating' type="number" value={form.seller_rating} onChange={handelChange} name="seller_rating" id="seller_rating" required />

                    <label htmlFor="toy_name">Toy Name</label>
                    <input className='form-control' placeholder='Enter Toy Name' type="text" value={form.toy_name} onChange={handelChange} name="toy_name" id="toy_name" required />

                    <label htmlFor="toy_img">Toy Image Link</label>
                    <input className='form-control' placeholder='Enter Toy Image Link' type="text" value={form.toy_img} onChange={handelChange} name="toy_img" id="toy_img" required />

                    <label htmlFor="toy_price">Toy Price</label>
                    <input className='form-control' placeholder='Enter Toy Price' type="number" value={form.toy_price} onChange={handelChange} name="toy_price" id="toy_price" required />

                    <label htmlFor="available_quantity">Available Quantity</label>
                    <input className='form-control' placeholder='Enter Available Quantity' type="number" value={form.available_quantity} onChange={handelChange} name="available_quantity" id="available_quantity" required />

                    <label htmlFor="toy_rating">Toy Rating</label>
                    <input className='form-control' placeholder='Enter Toy Rating' type="number" value={form.toy_rating} onChange={handelChange} name="toy_rating" id="toy_rating" required />

                    <label htmlFor="toy_description">Toy Description</label>
                    <textarea className='form-control' placeholder='Enter Toy Description' value={form.toy_description} onChange={handelChange} name="toy_description" id="toy_description" cols="30" rows="5" required></textarea>



                    <br />
                    <button variant="primary" type="submit"></button>
                </form>
            </div>










        </div>
    );
};

export default CreateUser;