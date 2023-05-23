import React from 'react';
import './BestSeller.css'
import { Card, CardGroup } from 'react-bootstrap';
const BestSeller = () => {
    return (
        <div>
            <h2 className='contact'>See Our Best Seller</h2>
            <div>
                <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/yXWRN5x/image-1.jpg" />
                    <Card.Body>
                        <Card.Title><h2>Jerry A. Bertram</h2></Card.Title>
                        <Card.Text>
                        Introducing the best toy seller, where joy and imagination come to life! With a commitment to bringing smiles to children's faces, our toy store offers an unparalleled selection of toys, games, and playtime essentials. Whether you're looking for the latest trends or timeless classics, we have something for every child's interest and age.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-center'>
                        <button className=' btn btn-primary px-5'>Contact</button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/MP3ZdY6/image-5.jpg" />
                    <Card.Body>
                        <Card.Title><h2>Willie M. Simpson</h2></Card.Title>
                        <Card.Text>
                        Introducing the best toy seller, where joy and imagination come to life! With a commitment to bringing smiles to children's faces, our toy store offers an unparalleled selection of toys, games, and playtime essentials. Whether you're looking for the latest trends or timeless classics, we have something for every child's interest and age.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-center'>
                        <button className=' btn btn-primary px-5'>Contact</button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/k59h0ps/image-3.jpg" />
                    <Card.Body>
                        <Card.Title><h2>Richard M. Akers</h2></Card.Title>
                        <Card.Text>
                        Introducing the best toy seller, where joy and imagination come to life! With a commitment to bringing smiles to children's faces, our toy store offers an unparalleled selection of toys, games, and playtime essentials. Whether you're looking for the latest trends or timeless classics, we have something for every child's interest and age.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-center'>
                        <button className=' btn btn-primary px-5'>Contact</button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/GMW33HP/image-4.jpg" />
                    <Card.Body>
                        <Card.Title><h2>Bertram Antinea</h2></Card.Title>
                        <Card.Text>
                        Introducing the best toy seller, where joy and imagination come to life! With a commitment to bringing smiles to children's faces, our toy store offers an unparalleled selection of toys, games, and playtime essentials. Whether you're looking for the latest trends or timeless classics, we have something for every child's interest and age.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-center'>
                        <button className=' btn btn-primary px-5'>Contact</button>
                    </Card.Footer>
                </Card>
                
            </CardGroup>
            </div>

        </div>
    );
};

export default BestSeller;