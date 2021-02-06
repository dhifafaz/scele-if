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
    <Row className="navbar-wrapper">
    <header className="navigation">
        <Col>
            <a className="home" href="#home" >SCELE-IF</a>
        </Col>
        <Col>
            <FirstMenu/>
        </Col>
        <Col>
            <SecondMenu/>
        </Col>
        <Col>
            <ThirdMenu/>
        </Col>
        <Col>
            <FourthMenu/>
        </Col>
    </header>
    </Row>

);
}
export default NavBar;

