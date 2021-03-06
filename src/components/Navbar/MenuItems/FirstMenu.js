import React from 'react';

import {Link} from 'react-router-dom';
import { AcademicLinks } from './AcademicLinks';
import {  Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import '../Navbar.css'

const Menus = Object.entries(AcademicLinks).map((key) => {
    return (
      <Menu.Item key={key[0]} id="menu-item" >
        <Link>
            <Link to={key[1].path} >{key[1].title}</Link>
        </Link>
      </Menu.Item>
    );
  })

const menu = () => {
    return (
      <Menu >
        {Menus}
      </Menu>
);
}

const firstMenu =()=> (

        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()} id="link-color-nav">
                Academic Links <DownOutlined />
            </a>
        </Dropdown>    

);
export default firstMenu;