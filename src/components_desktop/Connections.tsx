import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './Connections.css';

export const Connections: React.StatelessComponent<{}> = () => {
    return (
        <Grid>
            <Row className="show-grid connections-title-layout-small">
                <Col xs={10} xsOffset={1}>
                    <h3><span className="connections-title-font">— stay connected —</span></h3>
                </Col>
            </Row>

            <Row className="show-grid connections-title-layout">
                <Col xs={10} xsOffset={1}>
                    <a className='connections-title-font-link' href="http://globalcypa.org/">http://globalcypa.org/</a>
                </Col>
            </Row>

            <Row className="show-grid connections-title-layout">
                <Col xs={10} xsOffset={1}>
                    <img className='cypa-layout' src={require('../images/cypa.png')} />
                </Col>
            </Row>

            <Row className="show-grid connections-title-layout">
                <Col xs={10} xsOffset={1}>
                    <img className='logo-layout' src={require('../images/wechat.png')} />
                    <img className='logo-layout' src={require('../images/linkedin.png')} />
                    <img className='logo-layout' src={require('../images/facebook.png')} />
                    <img className='logo-layout' src={require('../images/instagram.png')} />
                </Col>
            </Row>

            <Row className="show-grid connections-title-layout">
                <Col xs={10} xsOffset={1}>
                    <a className='connections-title-font-back' href="#">Back to top</a>
                </Col>
            </Row>
        </Grid>
    );
}

export default Connections;