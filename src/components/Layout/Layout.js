import React from 'react';


import Aux from '../../hoc/Aux';
import './Layout.css'
import PageHeader from '../PageHeader/PageHeader';
import { Layout } from 'antd';
import BodyOfPage from '../Body/Body'

const { Header, Footer, Content } = Layout;

function Layouts() {
    return (
        <Aux >
        	<PageHeader/>
					<Content>Navbar</Content>
					<Content style={{maxWidth : "90%",background : "none !important"}} className="row-fluid">
					 <BodyOfPage/>
					</Content>
      		<Footer>Footer</Footer>
    	
        </Aux>
    );
}

export default Layouts;
