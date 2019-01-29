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
                    <h3><span className="sponsor-title-font">— our great sponsors —</span></h3>
                </Col>
            </Row>

            <Row className="show-grid sponsor-title-layout">
                <Col className="sponsor-col">
                    <img className="sponsor-rectangle-layout" src={sponsorsProps[0].imgSource} />
                    <div className="sponsor-rectangle-layout sponsor-background-rectangle"></div>
                </Col>
            </Row>

            <Row className="show-grid sponsor-title-layout">
                <Col className="sponsor-col">
                    <img className="sponsor-rectangle-layout" src={sponsorsProps[1].imgSource} />
                    <div className="sponsor-rectangle-layout sponsor-background-rectangle"></div>
                </Col>
            </Row>

            <Row className="show-grid sponsor-title-layout">
                <Col className="sponsor-col">
                    <img className="sponsor-rectangle-layout" src={sponsorsProps[2].imgSource} />
                    <div className="sponsor-rectangle-layout sponsor-background-rectangle"></div>
                </Col>
            </Row>

            <Row className="show-grid sponsor-title-layout">
                <Col className="sponsor-col">
                    <img className="sponsor-rectangle-layout" src={sponsorsProps[3].imgSource} />
                    <div className="sponsor-rectangle-layout sponsor-background-rectangle"></div>
                </Col>
            </Row>
        </Grid>
    );
}

export default Sponsors;