import * as React from 'react';
import * as classnames from 'classnames/bind';

import { Button, Grid, Row, Col } from 'react-bootstrap';
import { NavItem, Nav, Navbar } from 'react-bootstrap';

const cx = classnames.bind(require('./YepsNavBar.scss'));

export const YepsNavBar: React.StatelessComponent<{}> = () => {
    const logo = require('../images/logo.png');

    return (
        <Grid fluid>
            <Row>
                <Navbar collapseOnSelect>
                    <Col xs={2} md={4}>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <img className={cx('logo-wrapper')} src={logo} alt="logo"/>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Navbar.Toggle/>
                    </Col>
                    <Col xs={3} md={4}>
                        <Button type="submit">Language</Button>
                    </Col>
                    <Col xs={7} md={4}>
                        <Nav pullRight>
                            <Navbar.Collapse>
                                <Nav>
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
                        </Nav>
                    </Col>
                </Navbar>
            </Row>
        </Grid>
    );
}