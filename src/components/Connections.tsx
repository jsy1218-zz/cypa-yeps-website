import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './Connections.css';
import { isBrowser } from 'react-device-detect';

var ConnectionClass = isBrowser ? "connections-area" : "";

export const Connections: React.StatelessComponent<{}> = () => {
    if (isBrowser) {
        return (
            <Grid className={ConnectionClass}>
                <div className="area-top">
                    <Row className="show-grid connections-title-layout-small">
                        <Col xs={10} xsOffset={1}>
                            <h3 className="connections-title-font-desktop">About YEPS</h3> 
                        </Col>
                        <Col xs={10} xsOffset={1}>
                            <h5 className="connections-title-font-desktop-content">YEPS provides the platform for the audience and guests to communicate the business, the company culture, career development and entrepreneurship, topics included cutting-edge science, technology, macroeconomics, experience exchanges, etc.</h5>
                        </Col>
                    </Row>
                </div>
                <Row className="show-grid connections-title-layout">
                    <Col xs={1} xsOffset={0}>
                        <div>
                            <h4 className="aboutus">About Us</h4>
                        </div>
                        <img className='cypa-layout' src={require('../images/cypa.png')} />
                    </Col>
                    <Col xs={2}>
                        <img className='GirlUp-layout' src={require('../images/GirlUp.png')} />
                    </Col>
                    <Col xs={4} xsOffset={4}>
                            <div>
                            <h4 className="stayconnected">Stay Connected</h4>
                        </div>
                        <img className='wechat-layout' src={require('../images/wechat.jpg')} />
                    </Col>
                </Row>
            </Grid>
        ); 
    }
    return (
        <Grid className={ConnectionClass}>
            <div className="area-top-phone">
                <Row className="show-grid connections-title-layout-small">
                    <Col xs={10} xsOffset={1}>
                        <h3 className="connections-title-font-phone">— about YEPS —</h3> 
                    </Col>
                    <Col xs={10} xsOffset={1}>
                        <h5 className="connections-title-font-phone-content">YEPS provides the platform for the audience and guests to communicate the business, the company culture, career development and entrepreneurship, topics included cutting-edge science, technology, macroeconomics, experience exchanges, etc.</h5>
                    </Col>
                </Row>
            </div>                
            <Row className="show-grid connections-title-layout-small">
                <Col xs={11} xsOffset={1}>
                    <h3><span className="connections-title-font">— stay connected —</span></h3>
                </Col>
            </Row>
            <Row className="show-grid connections-title-layout">
                <Col xs={3} xsOffset={3}>
                    <img className='cypa-layout-phone' src={require('../images/wechat.jpg')} />
                </Col>
            </Row>
            {/*<Row className="show-grid connections-title-layout">
                <Col xs={10} xsOffset={1}>
                    <img className='logo-layout' src={require('../images/wechat.png')} />
                    <img className='logo-layout' src={require('../images/linkedin.png')} />
                    <img className='logo-layout' src={require('../images/facebook.png')} />
                    <img className='logo-layout' src={require('../images/instagram.png')} />
                </Col>
                </Row>*/}

            <Row className="show-grid connections-title-layout">
                <Col xs={10} xsOffset={1}>
                    <a className='connections-title-font-back' href="#">Back to top</a>
                </Col>
            </Row>
        </Grid>
    );
}

export default Connections;