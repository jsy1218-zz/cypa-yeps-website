import * as React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import './JoinUs.css';

export const JoinUs: React.StatelessComponent<{}> = () => {
    return (
        <Grid>
            <Row className="show-grid join-us-title-layout-small">
                <Col xs={10} xsOffset={1}>
                    <h3><span className="join-us-title-font">— Join Us —</span></h3>
                </Col>
            </Row>

            <Row className="show-grid join-us-title-layout">
                <Col xs={10} xsOffset={1}>
                    <p className="join-us-title-font-small">Our commitment is to provide you the ability to be more efficient, accurate, and connected. Don't miss your opportunity to attend Yeps.</p>
                </Col>
            </Row>

            <Row className="show-grid join-us-title-layout">
                <Col xs={10} xsOffset={1}>
                    <Button bsStyle="default" className="btn-default" bsSize="large">Register Now</Button>
                </Col>
            </Row>
        </Grid>
    );
}

export default JoinUs; 