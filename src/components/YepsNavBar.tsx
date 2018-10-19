import * as React from 'react';
import * as classnames from 'classnames/bind';

import { Button } from 'react-bootstrap';
import { NavItem, Nav, Navbar } from 'react-bootstrap';

const cx = classnames.bind(require('./YepsNavBar.scss'));

export const YepsNavBar: React.StatelessComponent<{}> = () => {
    const logo = require('../images/logo.png');

    return (
        <Navbar collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <img className={cx('logo-wrapper')} src={logo} alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
            <NavItem eventKey={1} href="#">
                <Button type="submit">Language</Button>
            </NavItem>
            <NavItem eventKey={2} href="#">
                Link Right
            </NavItem>
            <NavItem eventKey={3} href="#">
                Link Right
            </NavItem>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}