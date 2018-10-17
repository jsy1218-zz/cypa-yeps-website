import * as React from 'react';

import { NavLink } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';

import './YepsNavBar.css';

export const YepsNavBar: React.StatelessComponent<{}> = () => {
    const logo = require('../images/logo.png');

    return (
        <Navbar className="navBarRectangle" inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <img className="navbar-icon" src={logo} alt="logo"/>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavLink to="#keynote">
                        Keynote
                    </NavLink>
                    <NavLink to="#speakers">
                        Speakers
                    </NavLink>
                    <NavLink to="#agenda">
                        Agenda
                    </NavLink>
                    <NavLink to="#about">
                        About
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}