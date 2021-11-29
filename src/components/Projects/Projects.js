import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
// import { Container } from 'react-bootstrap';
import Project from '../Project/Project';

const Projects = () => {
    const[projects, setProjects] = useState([])
    useEffect(()=>{
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    },[])
    return (
        <div className ='about-part'>
            <h1 className= 'mb-5'>MY PROJECTS</h1>
            <Container>
            <Row xs={1} md={3} className="g-4">
            
            {
                projects.map(project=><Project project ={project}></Project>)
            } 
           
            </Row>  
            </Container>
        </div>
    );
};

export default Projects;




