import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Register from './Registration/Registration';
import Header from './Common/Header';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

ReactDOM.render(
    (
        <div>
            <Header />
            <Row>
                <Col lg={4}>
                        <p>
                        
                        </p>
                </Col>
                <Col lg={8}>
                    <Register />
                </Col>
            </Row>
        </div>
    ),
    document.getElementById('root'));
