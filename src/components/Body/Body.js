import React from 'react';
import { Row, Col } from 'antd';
import { Layout } from 'antd';

import './Body.css';
import 'antd/dist/antd.css';
import Announcement from './Announcement/Announcement';
import CalendarCard from './Calendar/Calendar';
import Clock from './/Clock/Clock';
import RightSideBar from './RightSideBar/RightSideBar';

function BodyOfPage() {

    return (
        <Layout style={{maxWidth : "100%", background : "none !important"}}>
        <Row >
					<Col xxl={18 | {order : 1}} xl={18 | {order : 1}}lg={{order : 1}} md ={19|{order : 1}} sm={24|{order : 1}} xs={24|{order : 1}} id="margin-right">
						<Row >
							<Col xxl={16 | {order : 2}} xl={16 | {order : 2}}lg={{order : 2}} md={17|{order : 2}} sm={24|{order : 1}} xs={24|{order : 1}} >
            		<Announcement/>
          		</Col>
							<Col  xxl={8 | {order : 1}} xl={8 | {order : 1}} lg={{order : 1}} md={7|{order : 1}} sm={24|{order : 2}}  xs={24|{order : 2}} id="margin-right">
            		<Clock/>
            		<CalendarCard/>
          		</Col>
						</Row>
					</Col>	    
          
          <Col xxl={6 | {order : 2}} xl={6 | {order : 2}}lg={{order : 2}} md ={5|{order : 2}} sm={24|{order : 2}} xs={24|{order : 2}}>
           <RightSideBar/>
          </Col>
    
        </Row>
      </Layout>
    ); 
    
    }
    
    export default BodyOfPage;