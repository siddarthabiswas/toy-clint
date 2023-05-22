import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import './UpdedBox.css'


const UpdedBox = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();

    const data = localStorage.getItem('changedata')
    var parsedObject = JSON.parse(data);


    const onSubmit = (data, e) => {
        const id = localStorage.getItem('id')

        fetch(`https://toysarver.onrender.com/user/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },

        })
        navigate('/')
        e.targer.reset()
    };

    return (
        <div>


            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h5 style={{ textAlign: 'center' }}>Update Your data</h5>
                    <label htmlFor="seller_name">Seller Name</label>
                    <input type='text' defaultValue={parsedObject.seller_name} {...register("seller_name")} required />

                    <label htmlFor="seller_img">Seller Image Link </label>
                    <input type='text' defaultValue={parsedObject.seller_img} {...register("seller_img")} required />

                    <label htmlFor="address">Seller Email</label>
                    <input type='email' defaultValue={parsedObject.seller_email} {...register("seller_email")} required />

                    <label htmlFor="seller_rating">Seller Rating</label>
                    <input type='number' defaultValue={parsedObject.seller_rating} {...register("seller_rating")} required />

                    <label htmlFor="toy_name">Toy Name</label>
                    <input type='text' defaultValue={parsedObject.toy_name} {...register("toy_name")} required />

                    <label htmlFor="toy_img">Toy Image Link</label>
                    <input type='text' defaultValue={parsedObject.toy_img} {...register("toy_img")} required />

                    <label htmlFor="toy_price">Toy Price</label>
                    <input type='number' defaultValue={parsedObject.toy_price} {...register("toy_price")} required />

                    <label htmlFor="available_quantity">Available Quantity</label>
                    <input type='number' defaultValue={parsedObject.available_quantity} {...register("available_quantity")} required />

                    <label htmlFor="toy_rating">Toy Rating</label>
                    <input type='number' defaultValue={parsedObject.toy_rating} {...register("toy_rating")} required />

                    <label htmlFor="toy_description">Toy Description</label>
                    <textarea type='text' defaultValue={parsedObject.toy_description} {...register("toy_description")} required />

                    
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default UpdedBox;