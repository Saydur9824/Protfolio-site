import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../images/about.jpg'
import './About.css'


const About = () => {
    return (
        <div className='about-part'>
            <Container>
                <h1 className='mb-5'>About Me</h1>
            <Row>
                <Col >
                 <img className='about-img' src={about} alt=""/>
                </Col>
                <Col className='about-adderss'>
                    <h5>Name : Saydur Rahman</h5>
                    <h5>Birthday : 21/02/1994</h5>
                    <h5>Adderss : Rangpur,Dhaka,Bangladesh</h5>
                    <h5>Email : saydur9827@gmail.com</h5>
                    <h5>Phone : 01773640272</h5>
                    <h5>Study : Pabna University od sceince & Technology</h5>
                    <h5>Post : Front End Developer</h5>
                    <button className='theme-btn'>Details</button>
                    
                </Col>
                
            </Row>
            </Container>
        </div>
    );
};

export default About;
