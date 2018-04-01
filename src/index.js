import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Register from './Registration/Registration';
import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

ReactDOM.render(
<div className="bodys">
    <Register />
</div>,
document.getElementById('root'));