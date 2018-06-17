import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import './Header.css';
export default class Header extends Component {

    render() {
        return (

            <nav className="panel navbar navbar-expand-sm">
                <Navbar.Header >
                    <Navbar.Brand>
                        <a href="#home" className="brand">EASY PAYROLL</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="active disabled link nav-link" href="#">Register/Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="link nav-link" href="#">About Application</a>
                    </li>
                    <li className="nav-item">
                        <a className="link nav-link" href="#">Contact Us</a>
                    </li>
                </ul>

            </nav>
        )
    }
}