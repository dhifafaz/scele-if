import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import FirstMenu from './MenuItems/FirstMenu';
import SecondMenu from './MenuItems/SecondMenu';
import FourthMenu from './MenuItems/FourthMenu';
import ThirdMenu from './MenuItems/ThirdMenu';
import {Row, Col} from 'antd';

import './Navbar.css';



function NavBar () {
    return (
    <Row className="navbar-wrapper" justify="start" align="middle" type="flex">
        <Col className="home">
            <a href="#home" id="link-color-home">SCELE-IF</a>
        </Col> 
           
        <Col >
            <FirstMenu/>
        </Col>
        <Col >
            <SecondMenu/>
        </Col>
        <Col >
            <ThirdMenu/>
        </Col>
        <Col >
            <FourthMenu/>
        </Col>
    </Row>

);
}
export default NavBar;

