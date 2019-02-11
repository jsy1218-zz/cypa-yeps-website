import * as React from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';

import './Title.css';

export const Title: React.StatelessComponent<{}> = () => {
    return (
        <Grid>
            <Row className="show-grid margin-row">
                <Col md={10} mdOffset={1}>
                    <span className="title-font">Young Entrprenuer and Professional Summit &middot; Seattle</span>
                </Col>
            </Row>

            <Row className="show-grid margin-row-small">
                <Col md={4} mdOffset={4} className="address-font-desktop">
                    <span>MARCH 1, 2019 | GIX, Bellvue</span>
                </Col>
            </Row>

            <Row className="show-grid margin-row-small margin-bottom-desktop">
                <Col md={4} mdOffset={4} className="location-font">
                    <Button bsStyle="warning" bsSize="large">Register Now</Button>
                </Col>
            </Row>
        </Grid>
    );
}

export default Title;