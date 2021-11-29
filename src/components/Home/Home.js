import React from 'react';
import './Home.css'
import { Col, Row } from 'react-bootstrap';
import protfolioImg from './../../images/protfolio.jpg'

const Home = () => {
    return (
        <div className = 'home-style'>
            <Row>
                <Col sm={7} className='text-start'>
                    <h4 className='home-name'>I AM SAYDUR RAHMAN -----</h4>
                    <h1 className='home-name'>FRONT END WEB DEVELOPER</h1>
                    <button
                    Link to = '/resume'
                    className='theme-btn'>Download Resume</button>
                </Col>
                <Col sm={5}>
                <img className='image' src= {protfolioImg} alt=""/>
                </Col>
            </Row>
        </div>
            
        
    );
};

export default Home;