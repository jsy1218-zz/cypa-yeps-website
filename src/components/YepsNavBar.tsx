import * as React from 'react';

import { Button } from 'react-bootstrap';
import { NavItem, Nav, Navbar } from 'react-bootstrap';
import { isMobile, isBrowser } from 'react-device-detect'; 

import { KEYNOTE_ROUTE, SPEAKERS_ROUTE } from '../constants/AppRouterConstants';

import './YepsNavBar.css';

interface Props { } 
interface State { isExpanded: boolean; }

export default class YepsNavBar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { isExpanded: false };
    }

    expandCollapse = () => {
        this.setState((s) => ({isExpanded: !s.isExpanded}));
    }
    
    renderTopButton = () => {
        if (isMobile) {
            return  <Navbar.Form pullLeft className={'test-language-button'}>
                        <Button className={'language-button'} type="submit">Language</Button>
                    </Navbar.Form>
        }

        return '';
    }

    renderBottomButton = () => {
        if (isBrowser) {
            return  <Navbar.Form pullLeft className={'test-language-button-in-collapse'}>
                        <Button className={'language-button'} type="submit">Language</Button>
                    </Navbar.Form>
        }

        return '';
    }

    render() {
        let logo = require('../images/logo.png');
        let collapsedMenu = this.state.isExpanded ? 'collapsed-menu' : '';

        return (
            
            <div className={'navbar-default'}> 
                <Navbar collapseOnSelect  id="top-navbar">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <img className={'logo-wrapper'} src={logo} alt="logo"/>
                        </Navbar.Brand>

                        <Navbar.Toggle onClick={this.expandCollapse}/>

                        { this.renderTopButton() }
                        
                    </Navbar.Header>
                    
                    <Navbar.Collapse>
                        <Nav pullRight className={collapsedMenu}>

                            { this.renderBottomButton() }

                            <NavItem eventKey={1} href={'/' + KEYNOTE_ROUTE}>
                                Keynote
                            </NavItem>
                            <NavItem eventKey={2} href={SPEAKERS_ROUTE}>
                                Speakers
                            </NavItem>
                            <NavItem eventKey={3} href="#agenda">
                                Agenda
                            </NavItem>
                            <NavItem eventKey={4} href="#about">
                                About
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}