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
                    <Accordion.Header>o	What is express js? What is Nest JS ?</Accordion.Header>
                    <Accordion.Body>
                    Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>	What is MongoDB aggregate and how does it work ?</Accordion.Header>
                    <Accordion.Body>
                    What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}



export default Blog;