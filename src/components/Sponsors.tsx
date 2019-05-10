import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './Sponsor.css';
import { isBrowser } from 'react-device-detect';

export const Sponsors: React.StatelessComponent<{}> = () => {
    let sponsorsProps: { imgSource: any }[] = [
        { imgSource: require('../images/cypa.png') }
       ,{ imgSource: require('../images/GirlUp.png') }
       ,{ imgSource: require('../images/微软华人协会.PNG') }
       ,{ imgSource: require('../images/SEC.jpeg') }
       ,{ imgSource: require('../images/海青会uw.jpeg') }
       ,{ imgSource: require('../images/海青会SU.png') }
       ,{ imgSource: require('../images/北京理工大学西雅图校友会.jpeg') }
       ,{ imgSource: require('../images/北外美中文化交流协会.JPG') }
       ,{ imgSource: require('../images/华中科技大学西雅图校友会.JPG') }
       ,{ imgSource: require('../images/山东大学西雅图校友会.JPG') }
       ,{ imgSource: require('../images/交通大学西雅图校友会.png') }
       ,{ imgSource: require('../images/华东师范大学.jpeg') }
       ,{ imgSource: require('../images/valley.png') }
    ];

    if (isBrowser) {
        return (
            <Grid>
                <Row className="show-grid sponsor-title-layout-small">
                    <Col xs={10} xsOffset={1}>
                        <h3 className="sponsor-title-font-desktop">Host</h3>
                    </Col>
                    <Col xs={2} xsOffset={4}>
                        <img className="sponsor-rectangle-layout-blue" src={sponsorsProps[0].imgSource} />
                    </Col>
                    <Col xs={2}>
                        <img className="sponsor-rectangle-layout-blue" src={sponsorsProps[1].imgSource} />
                    </Col>
                </Row>

                <Row className="show-grid sponsor-title-layout">
                    <Col>
                        <h3 className="sponsor-title-font-desktop-small">Co-Organizators</h3>
                    </Col>
                    <Col xs={2} xsOffset={1}>
                        <img className="sponsor-rectangle-layout" src={sponsorsProps[2].imgSource} />
                    </Col>
                    <Col xs={2}>
                        <img className="sponsor-rectangle-layout" src={sponsorsProps[3].imgSource} />
                    </Col>
                    <Col xs={2}>
                        <img className="sponsor-rectangle-layout" src={sponsorsProps[4].imgSource} />
                    </Col>
                    <Col xs={2}>
                        <img className="sponsor-rectangle-layout" src={sponsorsProps[5].imgSource} />
                    </Col>
                    <Col xs={2}>
                        <img className="sponsor-rectangle-layout" src={sponsorsProps[6].imgSource} />
                    </Col>
                </Row>
    
                <Row className="show-grid sponsor-title-layout">
                    <Col xs={2} xsOffset={1}>
                        <img className="sponsor-rectangle-layout" src={sponsorsProps[7].imgSource} />
                    </Col>
                    <Col xs={2}>
                        <img className="sponsor-rectangle-layout" src={sponsorsProps[8].imgSource} />
                    </Col>
                    <Col xs={2}>
                        <img className="sponsor-rectangle-layout" src={sponsorsProps[9].imgSource} />
                    </Col>
                    <Col xs={2}>
                        <img className="sponsor-rectangle-layout" src={sponsorsProps[10].imgSource} />
                    </Col>
                    <Col xs={2}>
                        <img className="sponsor-rectangle-layout" src={sponsorsProps[11].imgSource} />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h3 className="sponsor-title-font-desktop-small">Sponsors</h3>
                    </Col>
                    <Col>
                        <img className="sponsor-rectangle-layout-blue" src={sponsorsProps[12].imgSource} />
                    </Col>
                </Row>
            </Grid>
        );
    }

    return (
        <Grid>
            <Row className="show-grid sponsor-title-layout-small">
                <Col xs={10} xsOffset={1}>
                    <h3><span className="sponsor-title-font">— Host —</span></h3>
                </Col>
            </Row>
            <Row className="show-grid sponsor-title-layout">
                <Col className="sponsor-col-blue">
                    <img className="sponsor-rectangle-layout-blue" src={sponsorsProps[0].imgSource} />
                    <div className="sponsor-rectangle-layout-blue sponsor-background-rectangle-blue"></div>
                </Col>
            </Row>
            <Row className="show-grid sponsor-title-layout">
                <Col className="sponsor-col-blue">
                    <img className="sponsor-rectangle-layout-blue" src={sponsorsProps[1].imgSource} />
                    <div className="sponsor-rectangle-layout-blue sponsor-background-rectangle-blue"></div>
                </Col>
            </Row>

            <Row className="show-grid sponsor-title-layout-small-phone">
                <Col xs={10} xsOffset={1}>
                    <h3><span className="sponsor-title-font">— Co-Organizations—</span></h3>
                </Col>
            </Row>
            <Row className="show-grid sponsor-title-layout">
                <Col xs={10} xsOffset={1} className="sponsor-col">
                    <img className="sponsor-rectangle-layout" src={sponsorsProps[2].imgSource} />
                    <div className="sponsor-rectangle-layout sponsor-background-rectangle"></div>
                </Col>               
                <Col xs={10} className="sponsor-col">
                    <img className="sponsor-rectangle-layout" src={sponsorsProps[3].imgSource} />
                    <div className="sponsor-rectangle-layout sponsor-background-rectangle"></div>
                </Col>
            </Row>
            <Row className="show-grid sponsor-title-layout">
                <Col xs={10} xsOffset={1} className="sponsor-col">
                    <img className="sponsor-rectangle-layout" src={sponsorsProps[4].imgSource} />
                    <div className="sponsor-rectangle-layout sponsor-background-rectangle"></div>
                </Col> 
                <Col xs={10} className="sponsor-col">
                    <img className="sponsor-rectangle-layout" src={sponsorsProps[5].imgSource} />
                    <div className="sponsor-rectangle-layout sponsor-background-rectangle"></div>
                </Col>
            </Row>
            <Row className="show-grid sponsor-title-layout">
                <Col xs={10} xsOffset={1} className="sponsor-col">
                    <img className="sponsor-rectangle-layout" src={sponsorsProps[6].imgSource} />
                    <div className="sponsor-rectangle-layout sponsor-background-rectangle"></div>
                </Col>               
                <Col xs={10} className="sponsor-col">
                    <img className="sponsor-rectangle-layout" src={sponsorsProps[7].imgSource} />
                    <div className="sponsor-rectangle-layout sponsor-background-rectangle"></div>
                </Col>
            </Row>
            <Row className="show-grid sponsor-title-layout">
                <Col xs={10} xsOffset={1} className="sponsor-col">
                    <img className="sponsor-rectangle-layout" src={sponsorsProps[8].imgSource} />
                    <div className="sponsor-rectangle-layout sponsor-background-rectangle"></div>
                </Col>
                <Col xs={10} className="sponsor-col">
                    <img className="sponsor-rectangle-layout" src={sponsorsProps[9].imgSource} />
                    <div className="sponsor-rectangle-layout sponsor-background-rectangle"></div>
                </Col>
            </Row>
            <Row className="show-grid sponsor-title-layout">
                <Col xs={10} xsOffset={1} className="sponsor-col">
                    <img className="sponsor-rectangle-layout" src={sponsorsProps[10].imgSource} />
                    <div className="sponsor-rectangle-layout sponsor-background-rectangle"></div>
                </Col>
                <Col xs={10} className="sponsor-col">
                    <img className="sponsor-rectangle-layout" src={sponsorsProps[11].imgSource} />
                    <div className="sponsor-rectangle-layout sponsor-background-rectangle"></div>
                </Col>
            </Row>
             <Row className="show-grid sponsor-title-layout-small-phone">
                <Col xs={10} xsOffset={1}>
                    <h3><span className="sponsor-title-font">— sponsors —</span></h3>
                </Col>
            </Row>
            <Row className="show-grid sponsor-title-layout">
                <Col className="sponsor-col-blue">
                    <img className="sponsor-rectangle-layout-blue" src={sponsorsProps[12].imgSource} />
                    <div className="sponsor-rectangle-layout-blue sponsor-background-rectangle-blue"></div>
                </Col>
            </Row>        
        </Grid>
    );
}

export default Sponsors;