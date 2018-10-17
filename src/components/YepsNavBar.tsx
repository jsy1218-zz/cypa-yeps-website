import * as React from 'react';

import { NavLink } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';

import './YepsNavBar.css';

export const YepsNavBar: React.StatelessComponent<{}> = () => {
    const logo = require('../images/logo.png');

    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <img className="navbar-icon" src={logo} alt="logo"/>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavLink className="font" to="#keynote">
                        Keynote
                    </NavLink>
                    <NavLink className="font" to="#speakers">
                        Speakers
                    </NavLink>
                    <NavLink className="font" to="#agenda">
                        Agenda
                    </NavLink>
                    <NavLink className="font" to="#about">
                        About
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}