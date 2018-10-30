import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export const JoinUs: React.StatelessComponent<{}> = () => {
    return (
        <Grid>
            <Row className="show-grid join-us-title-layout-small">
                <Col xs={10} xsOffset={1}>
                    <h3><span className="join-us-title-font">— Join Us —</span></h3>
                </Col>
            </Row>
        </Grid>
    );
}

export default JoinUs; 