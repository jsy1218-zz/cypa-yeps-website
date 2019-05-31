import * as React from 'react';
import { Button, ButtonToolbar, Grid, Row, Col } from 'react-bootstrap';

import './Title.css';
import { ColoredLine } from '../constants/ColoredLine';

import {
    isBrowser,
} from "react-device-detect";

export const Title: React.StatelessComponent<{}> = () => {
    if (isBrowser) {
        return (
            <Grid>
                <Row className="show-grid margin-row">
                    <Col md={12} mdOffset={2} className="title-style">
                        <span className="title-font">YOUNG ENTREPRENEUR AND</span>
                        <br />
                        <span className="title-font">PROFESSIONAL SUMMIT &middot; SEATTLE</span>
                    </Col>
                </Row>
                <Row className="show-grid margin-row-small margin-left">
                    <Col md={1} mdOffset={1} className="line-style">
                        <ColoredLine color="#ffffff" border="solid 1.2px #ffffff" width="0.01px" height="100px" /> 
                    </Col>
                    <Col md={4} mdOffset={0} className="address-font-desktop">
                        <span>
                            Saturday June 1th, 2019 | 1:30pm - 6:30pm PST
                        </span>
                         <span className="address-font-desktop2"></span>
                        <br />
                        <span> 
                            Courtyard by Marriott Seattle Bellevue/Downtown
                            <br />
                            Address: 11010 NE 8th, Bellevue, WA 98004
                        </span>
                    </Col>
                </Row>
    
                <Row className="show-grid margin-row-small margin-bottom-desktop">
                    <Col md={10} mdOffset={2}>
                        <Button className="registerNow"><a className="registerNowbutton" href="https://www.eventbrite.com/e/2019-young-entrepreneurs-and-professionals-summit-seattle-yeps-tickets-61850120375">Register Now</a></Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
    return (
        <Grid className="show-grid margin-row">
            <Row className="show-grid margin-row-text">
                <Row className="show-grid margin-row-title">
                    <Col xs={12} xsOffset={0} md={7} mdOffset={3}>
                        <span className="title-font-phone">YOUNG ENTREPRENEUR AND PROFESSIONAL SUMMIT &middot; SEATTLE</span>
                    </Col>
                </Row>
                <Row className="show-grid margin-row-address">   
                    <Col>
                        <Col xs={1} xsOffset={1}>
                            <ColoredLine color="#ffffff" border="solid 1.2px #ffffff" width="0.01px" height="61.5px" /> 
                        </Col>
                        <Col span={4} xsPull={0}>
                            <span className="location-font"> 
                            Saturday June 1th, 2019 | 1:30pm - 6:30pm PST 
                            </span>
                            <span className="location-text-style"></span>
                            <br />
                            <span className="location-font"> 
                                Courtyard by Marriott Seattle Bellevue/Downtown
                            </span>
                            <br />
                            <span className="location-font">
                                Address: 11010 NE 8th, Bellevue, WA 98004
                            </span>
                        </Col>
                    </Col>
                </Row>
                <Row className="show-grid margin-row-small margin-bottom">
                    <Col xs={18} xsOffset={2} className="registerNowphone">
                    <ButtonToolbar>
                        <Button className="registerNowphone1"><a className="registerNowbutton" href="https://www.eventbrite.com/e/2019-young-entrepreneurs-and-professionals-summit-seattle-yeps-tickets-61850120375">Register Now</a></Button>
                    </ButtonToolbar>
                    </Col>
                </Row>
            </Row>
        </Grid>
    );
}

export default Title;