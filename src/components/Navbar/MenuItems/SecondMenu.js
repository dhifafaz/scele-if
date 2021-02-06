import React from 'react';

import {Link} from 'react-router-dom';
import { PanduanMahasiswa } from './PanduanMahasiswaLists';
import { Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';

const Menus = Object.entries(PanduanMahasiswa).map((key) => {
    return (
      <Menu.Item key={key[0]} id="menu-item">
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

const secondMenu =()=> (
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()} id="link-color-nav">
                Panduan Mahasiswa <DownOutlined />
            </a>
        </Dropdown>    

);
export default secondMenu;