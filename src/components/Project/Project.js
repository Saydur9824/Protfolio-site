import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';

const Project = (props) => {
    console.log(props.project)
    const{img,name} = props.project
    return (
        <div>
           
           <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    <button className='theme-btn'>Details</button>
                    </Card.Body>
                </Card>
                </Col>
           
            
        </div>
    );
};

export default Project;