import { useContext, useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo1.png'
import SearchItem from '../SearchItem/SearchItem';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase.config';
import { onAuthStateChanged } from "firebase/auth";
import { Catagori } from '../../App';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';


function NavScrollExample() {
    const [signin, isSignin] = useContext(Catagori)

    const [data, setData] = useState([]);
    const [searchApiData, setSearchApiData] = useState([]);
    const [filterValue, setFilterValue] = useState('');

    const [current, setCurrent] = useState({});

    useEffect(() => {
        fetch('https://toy-cars.onrender.com/')
            .then(res => res.json())
            .then(data => {
                setSearchApiData(data)
            }
            )
    }, [searchApiData]);

    const handleChange = (e) => {
        if (e.target.value === '') {
            setData([])
        } else {
            const filterResult = searchApiData.filter(item => item.seller_name.toLowerCase().includes(e.target.value.toLowerCase()) || item.toy_name.toLowerCase().includes(e.target.value.toLowerCase()))
            if (filterResult.length > 0) {
                setData(filterResult)
            }
            else {
                setData([{ name: 'Your Search Name not Found', email: 'Your Search Email not Found' }])
            }

        }
        setFilterValue(e.target.value)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const newUser = { ...current }
                newUser.name = user.displayName;
                newUser.image = user.photoURL;
                setCurrent(newUser)
                isSignin(true)
            } else {
                isSignin(false)
            }
        });
    }, [current])

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {current.name}
        </Tooltip>
    );


    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand to="/"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/alltoys">All Toys</NavLink>
                            <NavLink to="/mytoys"></NavLink>
                            {
                                signin && <NavLink to="/">My Toys</NavLink>
                            }
                            <NavLink to="/createpage">Add A Toy</NavLink>
                            <NavLink to="/blog">Blog</NavLink>
                            {
                                signin ? <NavLink to="/logout">Logout</NavLink> : <NavLink to="/login">Login</NavLink>
                            }
                            {
                                signin && <NavLink className='navimage'>
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                    >
                                        <img src={current.image} alt="" />
                                    </OverlayTrigger>
                                </NavLink>
                            }
                        </Nav>

                        <input type="search" className='form_header' placeholder='Search' value={filterValue} onChange={(e) => handleChange(e)} />

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <>
                <div id='all'>
                    {
                        data.map(item => <SearchItem item={item} key={item._id}></SearchItem>)
                    }
                </div>

            </>
        </div>
    );
}

export default NavScrollExample;