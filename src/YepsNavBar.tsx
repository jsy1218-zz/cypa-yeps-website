import * as React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

class YepsNavBar extends React.Component {
    public render() {
        return (
            // TODO: populate NavBar css within TypeScript. need to do more research on how to properly pass the CSS class.
            <Navbar collapseOnSelect={true}>
                <Nav pullRight={true}>
                    <NavItem href="#">
                    Speakers
                    </NavItem>
                    <NavItem href="#">
                    Speakers
                    </NavItem>
                </Nav>
            </Navbar>
          );
    }
}

export default YepsNavBar;