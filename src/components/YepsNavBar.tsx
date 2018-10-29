import * as React from 'react';

import { Button } from 'react-bootstrap';
import { NavItem, Nav, Navbar } from 'react-bootstrap';
 
import { KEYNOTE_ROUTE, SPEAKERS_ROUTE } from '../constants/AppRouterConstants';

import './YepsNavBar.css';

interface Props { } 
interface State { isExpanded: boolean; }

export default class YepsNavBar extends React.Component<Props, State> {
    private rootNavbar = React.createRef<Navbar>();

    constructor(props: Props) {
        super(props);
        this.state = { isExpanded: false };
    }

    expandCollapse = () => {
        this.setState((s) => ({isExpanded: !s.isExpanded}));
    }
    
    renderTopButton = () => {
        if (!this.isNavItemsCollapsed()) {
            return  <Navbar.Form pullRight className={'test-language-button'}>
                        <Button className={'language-button'} type="submit">Language</Button>
                    </Navbar.Form>
        }

        return '';
    }

    renderBottomButton = () => {
        if (this.isNavItemsCollapsed()) {
            return  <Navbar.Form pullLeft className={'test-language-button-in-collapse'}>
                        <Button className={'language-button'} type="submit">Language</Button>
                    </Navbar.Form>
        }

        return '';
    }

    private isNavItemsCollapsed(): boolean {
        return this.rootNavbar.current == null || this.rootNavbar.current.props.expanded != undefined;
    }

    render() {
        let logo = require('../images/logo.png');
        let collapsedMenu = this.state.isExpanded ? 'collapsed-menu' : '';

        return (
            
            <div className={'navbar-default'}> 
                <Navbar collapseOnSelect  id="top-navbar" ref={this.rootNavbar}>
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