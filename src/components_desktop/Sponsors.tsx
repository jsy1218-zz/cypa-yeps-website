import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './Sponsor.css';

export const Sponsors: React.StatelessComponent<{}> = () => {
    let sponsorsProps: { imgSource: any }[] = [
        { imgSource: require('../images/valley.png') }
       ,{ imgSource: require('../images/triangle.png') }
       ,{ imgSource: require('../images/seattle.png') }
       ,{ imgSource: require('../images/washington.png') }
   ];

    return (
        <Grid>
            <Row className="show-grid sponsor-title-layout-small">
                <Col xs={10} xsOffset={1}>
                    <h3 className="sponsor-title-font-desktop">Thank you to our sponsors</h3>
                </Col>
            </Row>

            <Row className="show-grid sponsor-title-layout">
                <Col xs={2} xsOffset={3}>
                    <img className="sponsor-rectangle-layout" src={sponsorsProps[0].imgSource} />
                </Col>
                <Col xs={2}>
                    <img className="sponsor-rectangle-layout" src={sponsorsProps[1].imgSource} />
                </Col>
                <Col xs={2}>
                    <img className="sponsor-rectangle-layout" src={sponsorsProps[2].imgSource} />
                </Col>
            </Row>

            <Row className="show-grid sponsor-title-layout">
                <Col xs={2} xsOffset={3}>
                    <img className="sponsor-rectangle-layout" src={sponsorsProps[3].imgSource} />
                </Col>
            </Row>
        </Grid>
    );
}

export default Sponsors;