import * as React from 'react';

import { NavItem, Nav, Navbar } from 'react-bootstrap';

import './YepsNavBar.css';

export const YepsNavBar: React.StatelessComponent<{}> = () => {
    const logo = require('../images/logo.png');

    return (
        <Navbar className="navBarRectangle" inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <img className="navbar-icon" src={logo} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Keynote
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Speakers
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        Agenda
                    </NavItem>
                    <NavItem eventKey={4} href="#">
                        About
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}