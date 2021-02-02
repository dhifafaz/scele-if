import React from 'react';
import { Row, Col } from 'antd';
import { Layout } from 'antd';

import './Body.css';
import 'antd/dist/antd.css';
import Announcement from './Announcement/Announcement';
function BodyOfPage() {

    return (
        <Layout style={{maxWidth : "100%", background : "none !important"}}>
        <Row className="justify-content-md-center" >
					<Col xl={18 | {order : 1}}lg={{order : 1}} md ={16|{order : 1}} sm={24|{order : 1}} xs={24|{order : 1}}>
						<Row>
							<Col xl={16 | {order : 2}}lg={{order : 2}} md={16|{order : 2}} sm={24|{order : 1}} xs={24|{order : 1}} >
            		<Announcement/>
          		</Col>
							<Col  xl={8 | {order : 1}}lg={{order : 1}} md={8|{order : 1}} sm={24|{order : 2}}  xs={24|{order : 2}} >
            		Clock
            		Calendar
          		</Col>
						</Row>
					</Col>	    
          
          <Col  xl={6 | {order : 2}}lg={{order : 2}} md ={8|{order : 2}} sm={24|{order : 2}} xs={24|{order : 2}}>
           right bar
          </Col>
    
        </Row>
      </Layout>
    ); 
    
    }
    
    export default BodyOfPage;