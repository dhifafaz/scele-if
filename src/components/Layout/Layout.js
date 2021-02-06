import React from 'react';


import Aux from '../../hoc/Aux';
import './Layout.css'
import PageHeader from '../PageHeader/PageHeader';
import { Layout } from 'antd';
import BodyOfPage from '../Body/Body'
import NavBar from '../Navbar/Navbar'

const { Footer, Content, Header } = Layout;

function Layouts() {
    return (
        <Aux >
        	<div className="headers">
				<PageHeader/>
			</div>
			<div className="navbar">
				<NavBar/>
			</div>
			<div className="body">
				<BodyOfPage/>
			</div>
      		<Footer>Footer</Footer>
    	
        </Aux>
    );
}

export default Layouts;
