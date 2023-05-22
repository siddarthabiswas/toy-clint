import React from 'react';
import './SearchItem.css'


import { Link, useNavigate } from 'react-router-dom';

const SearchItem = (props) => {
    const navigate = useNavigate()
    const { seller_name, seller_img, seller_email, seller_rating, toy_name, toy_img, toy_price, available_quantity, toy_rating, toy_description, name } = props.item;
    const handelBlock = () => {
        navigate('/show')
        document.getElementById('all').style.display = 'none';
    }
    return (
        <div id='links'>
            <Link onClick={handelBlock} to='/show' state={{ seller_name, seller_img, seller_email, seller_rating, toy_name, toy_img, toy_price, available_quantity, toy_rating, toy_description, name }} > <div className='toy-search'>
                <div className='first'><img src={toy_img} alt="" /><p>{toy_name}</p></div>
                <div><img src={seller_img} alt="" /><p>{seller_name}</p></div>
            </div></Link>

        </div>
    );
};

export default SearchItem;