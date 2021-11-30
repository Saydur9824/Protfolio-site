import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import ContractForm from '../ContractForm/ContractForm';


const Homes = () => {
    return (
        <div>
            <Header/>
            <Home></Home>
            <Projects></Projects>
            <About></About>
            <ContractForm></ContractForm>
        </div>
    );
};

export default Homes;