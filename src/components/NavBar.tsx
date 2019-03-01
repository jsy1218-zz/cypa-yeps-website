import * as React from 'react';

import { Button } from 'react-bootstrap';
import { NavItem, Nav, Navbar } from 'react-bootstrap';

import { KEYNOTE_ROUTE, SPEAKERS_ROUTE, AGENDA_ROUTE, JOIN_US_ROUTE } from '../constants/AppRouterConstants';

import './NavBar.css';
import { isBrowser } from 'react-device-detect';

interface Props { } 
interface State { isExpanded: boolean; }

var NavBarClasses = isBrowser ? "navbar-default navbar-font-desktop" : "navbar-default";

export default class NavBar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { isExpanded: false };
    }

    expandCollapse = () => {
        this.setState((s) => ({isExpanded: !s.isExpanded}));
    }
    
    render() {
        let logo = require('../images/logo.png');
        let collapsedMenu = this.state.isExpanded ? 'collapsed-menu' : '';
        let languageButton = this.state.isExpanded ? 'collapsed-menu' : '';

        return (
            <div className={NavBarClasses}>
                <Navbar collapseOnSelect fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <img className={'logo-wrapper'} src={logo} alt="logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle className={'toggle-style'} onClick={this.expandCollapse}/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight className={collapsedMenu}>
                            <Navbar.Form pullLeft className={languageButton}>
                                <Button className={'language-button'} type="submit">Language</Button>
                            </Navbar.Form>
                            <NavItem eventKey={1} href={'#' + KEYNOTE_ROUTE}>
                                Keynote
                            </NavItem>
                            <NavItem eventKey={2} href={'#' + SPEAKERS_ROUTE}>
                                Speakers
                            </NavItem>
                            <NavItem eventKey={3} href={'#' + AGENDA_ROUTE}>
                                Agenda
                            </NavItem>
                            <NavItem eventKey={4} href={'#' + JOIN_US_ROUTE}>
                                About
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}