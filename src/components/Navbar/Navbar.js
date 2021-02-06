import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { AcademicLinks } from './MenuItems/AcademicLinks';
import { PanduanMahasiswa } from './MenuItems/PanduanMahasiswaLists';
import { DukunganKuliah } from './MenuItems/DukunganKuliah';
import { BantuanSCeLe } from './MenuItems/BantuanSCeLe';
import {Row, Col, Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';

import './Navbar.css';
const firstMenu = AcademicLinks.map((item, index) => {
	return(
        <Menu>
            <Menu.Item key={index} className="dropdownItem item">
		        <Link to={item.path}>
			    {item.title}
		        </Link>
		    </Menu.Item>
        </Menu>
		
	);
})

const secondMenu = PanduanMahasiswa.map((item, index) => {
	return(
		<Menu>
            <Menu.Item key={index} className="dropdownItem item">
		        <Link to={item.path}>
			    {item.title}
		        </Link>
		    </Menu.Item>
        </Menu>
	);
})

const thirdMenu = DukunganKuliah.map((item, index) => {
	return(
		<Menu>
            <Menu.Item key={index} className="dropdownItem item">
		        <Link to={item.path}>
		    	{item.title}
	    	    </Link>
		    </Menu.Item>
        </Menu>
	);
})

const fourthMenu = BantuanSCeLe.map((item, index) => {
	return(
		<Menu>
            <Menu.Item key={index} className="dropdownItem item">
		        <Link to={item.path}>
			        {item.title}
		        </Link>
		    </Menu.Item>
        </Menu>
	);
})

const dropdownConfig = [
  {
    customkey: 1,
		content: firstMenu,
		title: "Academic Links",
		name: "dropdownOpen1",
  },
  {
    customkey: 2,
		content:secondMenu,
		title: "Panduan Mahasiswa",
		name: "dropdownOpen2",
  },
  {
    customkey: 3,
		content:thirdMenu,
		title : "Dukungan Kuliah",
		name: "dropdownOpen3",
	},
	{
    customkey: 4,
		content:fourthMenu,
		title : "Bantuan SCeLe",
		name: "dropdownOpen3",
	}
];
const NavBar = () => (
    <Row className="navbar-wrapper">
        <header className="navigation">
            <Col>
                <a className="home" href="#home" >SCELE-IF</a>
            </Col>
            {dropdownConfig.map((dropdown,index) => (
                <Col md={24} sm={24} xs={24} key={index}>
                <Dropdown overlay={dropdown.content}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            {dropdown.title}
                            <DownOutlined />
                        </a>
                </Dropdown>
                    
                </Col>
            ))}
            
        </header>
    </Row>

);

export default NavBar;

