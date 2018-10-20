import * as React from 'react';

import { Button } from 'react-bootstrap';
import { NavItem, Nav, Navbar } from 'react-bootstrap';

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
    
    render() {
        let logo = require('../images/logo.png');
        let collapsedMenu = this.state.isExpanded ? 'collapsed-menu' : '';
        let languageButton = this.state.isExpanded ? 'collapsed-menu' : '';

        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <img className={'logo-wrapper'} src={logo} alt="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={this.expandCollapse}/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight className={collapsedMenu}>
                        <Navbar.Form pullLeft className={languageButton}>
                            <Button type="submit">Language</Button>
                        </Navbar.Form>
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
        )
    }
}