import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './ShowAllDetles.css'

const ShowAllDetles = (props) => {
    const user = props.user;
    // delet
    const handelDelet = (id) => {
        fetch(`https://toy-cars.onrender.com/delet/${id}`, {
            method: 'DELETE',
        });
    }


    const navigate = useNavigate()

    // upded
    const handelUpded = (id) => {
        localStorage.setItem('id', id)
        fetch(`https://toy-cars.onrender.com/user/${id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    localStorage.setItem('changedata', JSON.stringify(data))
                    navigate('/upded')
                }
            });
    }



    return (
        <div>

            <div>
                <Card style={{ width: '20rem' , margin:'10px 10px' , minHeight:'550px' }}>
                    <Card.Img variant="top" src={user.toy_img} />
                    <Card.Body>
                        <Card.Title>{user.toy_name}</Card.Title>
                        <Card.Text>
                            {user.toy_description}
                        </Card.Text>
                        <ListGroup.Item> <div className='toys-d'><div>Toy Ratings :{user.toy_rating} ⭐</div><div>Toy Price :{user.toy_price} Tk </div></div> </ListGroup.Item>
                        <ListGroup.Item className='selar-img'> <img src={user.seller_img} alt="" /> </ListGroup.Item>
                        <Card.Title>{user.seller_name}</Card.Title>
                        <ListGroup.Item >{user.seller_email} </ListGroup.Item>
                        <ListGroup.Item> <div className='toys-d'><div>Seller Rating : {user.seller_rating} ⭐</div><div>Toy Quantity :{user.available_quantity} P </div></div> </ListGroup.Item>
                        <ListGroup.Item className='button-eddit'><Button onClick={() => handelDelet(user._id)} variant="primary">Delate</Button><Button onClick={() => handelUpded(user._id)} variant="primary">Edit</Button></ListGroup.Item>                        
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ShowAllDetles;