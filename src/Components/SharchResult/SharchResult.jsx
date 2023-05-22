import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const SharchResult = () => {
    const loaction = useLocation()
    const { seller_name, seller_img, seller_email, seller_rating, toy_name, toy_img, toy_price, available_quantity, toy_rating, toy_description, name } = loaction.state;
    return (
        <div>
            <div>
                <Card style={{ width: '50%' , margin:'0px auto' , minHeight:'550px' }}>
                    <Card.Img variant="top" src={toy_img} />
                    <Card.Body>
                        <Card.Title>{toy_name}</Card.Title>
                        <Card.Text>
                            {toy_description}
                        </Card.Text>
                        <ListGroup.Item> <div className='toys-d'><div>Toy Ratings :{toy_rating} ⭐</div><div>Toy Price :{toy_price} Tk </div></div> </ListGroup.Item>
                        <ListGroup.Item className='selar-img'> <img src={seller_img} alt="" /> </ListGroup.Item>
                        <Card.Title>{seller_name}</Card.Title>
                        <ListGroup.Item >{seller_email} </ListGroup.Item>
                        <ListGroup.Item> <div className='toys-d'><div>Seller Rating : {seller_rating} ⭐</div><div>Toy Quantity :{available_quantity} P </div></div> </ListGroup.Item>
                        
                        
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default SharchResult;