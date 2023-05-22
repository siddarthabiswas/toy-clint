import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {



    return (
        <div> 

           <h2 className='text-center my-5'>Some Question And  And</h2> 
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>o	What is an access token and refresh token? How do they work and where should we store them on the client-side?</Accordion.Header>
                    <Accordion.Body>
                    Access Token: An access token is a credential that is used to access protected resources. It is typically short-lived and has an expiration time. When a user or an application successfully authenticates with a server, it receives an access token. This token is then included in the headers or parameters of subsequent API requests to prove the user's identity and permissions. The server validates the access token to determine if the user is authorized to access the requested resource. Access tokens should be kept confidential and not shared with unauthorized parties.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>o	Compare SQL and NoSQL databases?</Accordion.Header>
                    <Accordion.Body>
                    While SQL is valued for ensuring data validity, NoSQL is good when it's more important that the availability of big data is fast. It's also a good choice when a company will need to scale because of changing requirements. NoSQL is easy-to-use, flexible and offers high performance.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}



export default Blog;