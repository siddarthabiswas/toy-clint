import React from 'react';
import './MainPageitem.css'
import { Card, ListGroup } from 'react-bootstrap';

const MainPageitem = (props) => {
    const user = props.user;
    return (
        <div>
            <Card style={{ width: '20rem', margin: '10px 10px', minHeight: '550px' }}>
                <Card.Img variant="top" src={user.toy_img} />
                <Card.Body>
                    <Card.Title>{user.toy_name}</Card.Title>
                    <Card.Text>
                        {user.toy_description}
                    </Card.Text>
                    <ListGroup.Item> <div className='toys-d'><div>Toy Ratings :{user.toy_rating} ⭐</div><div>Toy Price :{user.toy_price} </div></div> </ListGroup.Item>
                    <ListGroup.Item className='selar-img'> <img src={user.seller_img} alt="" /> </ListGroup.Item>
                    <Card.Title>{user.seller_name}</Card.Title>
                    <ListGroup.Item >{user.seller_email} </ListGroup.Item>
                    <ListGroup.Item> <div className='toys-d'><div>Seller Rating : {user.seller_rating} ⭐</div><div>Toy Quantity :{user.available_quantity} P </div></div> </ListGroup.Item>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MainPageitem;