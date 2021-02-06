import React from 'react';

import {Link} from 'react-router-dom';
import { BantuanSCeLe } from './BantuanSCeLe';
import {  Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';

const Menus = Object.entries(BantuanSCeLe).map((key) => {
    return (
      <Menu.Item key={key[0]} >
        <Link>
            <Link to={key[1].path}>{key[1].title}</Link>
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

const fourthMenu =()=> (

        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Bantuan SCeLe <DownOutlined />
            </a>
        </Dropdown>    

);
export default fourthMenu;