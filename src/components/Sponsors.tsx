import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './Sponsor.css';
import { isBrowser } from 'react-device-detect';

export const Sponsors: React.StatelessComponent<{}> = () => {
    let sponsorsProps: { imgSource: any }[] = [
        { imgSource: require('../images/cypa.png') }
       ,{ imgSource: require('../images/GirlUp.png') }       
       ,{ imgSource: require('../images/青.集团.jpg') }
       ,{ imgSource: require('../images/special acknowledgement-web.jpg') }
       ,{ imgSource: require('../images/alumni association-web.png')}
       ,{ imgSource: require('../images/Social organization-web.png')}
       ,{ imgSource: require('../images/special acknowledgement-phone.jpg') }
       ,{ imgSource: require('../images/alumni association-phone.png')}
       ,{ imgSource: require('../images/Social organization-phone.png')}
    ];

    if (isBrowser) {
        return (
            <Grid>
                <Row className="show-grid sponsor-title-layout-small">
                    <Col xs={10} xsOffset={1}>
                        <h3 className="sponsor-title-font-desktop">Host</h3>
                    </Col>
                    <Col xs={2} xsOffset={1}>
                        <img className="sponsor-rectangle-layout-blue pic0" src={sponsorsProps[0].imgSource} />
                    </Col>
                    <Col xs={2} xsOffset={2}>
                        <img className="sponsor-rectangle-layout-blue pic1" src={sponsorsProps[1].imgSource} />
                    </Col>
                    <Col xs={2} xsOffset={2}>
                        <img className="sponsor-rectangle-layout-blue pic2" src={sponsorsProps[2].imgSource} />
                    </Col>
                </Row>

                <Row className="show-grid sponsor-title-layout">
                    <Col>
                        <h3 className="sponsor-title-font-desktop-small">Co-Organizators</h3>
                    </Col>
                    <Col>
                        <h6 className="sponsor-title-font-desktop-small1">special acknowledgement</h6>
                    </Col>
                    <Col>
                        <img className="sponsor-rectangle-layout pic3" src={sponsorsProps[3].imgSource} />
                    </Col>
                    <Col>
                        <h6 className="sponsor-title-font-desktop-small1">alumni association</h6>
                    </Col>
                    <Col>
                        <img className="sponsor-rectangle-layout pic4" src={sponsorsProps[4].imgSource} />
                    </Col>
                    <Col>
                        <h6 className="sponsor-title-font-desktop-small1">social organization</h6>
                    </Col>
                    <Col>
                        <img className="sponsor-rectangle-layout pic5" src={sponsorsProps[5].imgSource} />
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
                    <img className="sponsor-rectangle-layout-blue picphone" src={sponsorsProps[0].imgSource} />
                    <div className="sponsor-rectangle-layout-blue sponsor-background-rectangle-blue"></div>
                </Col>
            </Row>
            <Row className="show-grid sponsor-title-layout">
                <Col className="sponsor-col-blue">
                    <img className="sponsor-rectangle-layout-blue sponsor-title" src={sponsorsProps[1].imgSource} />
                    <div className="sponsor-rectangle-layout-blue sponsor-background-rectangle-blue"></div>
                </Col>
            </Row>
            <Row className="show-grid sponsor-title-layout">
                <Col className="sponsor-col-blue">
                    <img className="sponsor-rectangle-layout-blue sponsor-title" src={sponsorsProps[2].imgSource} />
                    <div className="sponsor-rectangle-layout-blue sponsor-background-rectangle-blue"></div>
                </Col>
            </Row>

            <Row className="show-grid sponsor-title-layout-small-phone">
                <Col xs={10} xsOffset={1}>
                    <h3><span className="sponsor-title-font">— Co-Organizations —</span></h3>
                </Col>
            </Row>
            <Row className="show-grid sponsor-title">
                <Col xs={10} xsOffset={1}>
                    <h6><span className="sponsor-title-font1"> special acknowledgement </span></h6>
                </Col>
                <Col className="sponsor-col">
                    <img className="sponsor-rectangle-layout pic6" src={sponsorsProps[6].imgSource} />
                    <div className="sponsor-rectangle-layout sponsor-background-rectangle"></div>
                </Col>               
            </Row>
            <Row className="show-grid sponsor-title">
                <Col xs={10} xsOffset={1}>
                    <h6><span className="sponsor-title-font1"> alumni association </span></h6>
                </Col>
                <Col className="sponsor-col">
                    <img className="sponsor-rectangle-layout pic7" src={sponsorsProps[7].imgSource} />
                    <div className="sponsor-rectangle-layout sponsor-background-rectangle"></div>
                </Col>               
            </Row>
            <Row className="show-grid sponsor-title">
                <Col xs={10} xsOffset={1}>
                    <h6><span className="sponsor-title-font1"> social organization </span></h6>
                </Col>
                <Col className="sponsor-col">
                    <img className="sponsor-rectangle-layout pic8" src={sponsorsProps[8].imgSource} />
                    <div className="sponsor-rectangle-layout sponsor-background-rectangle"></div>
                </Col>               
            </Row>    
        </Grid>
    );
}

export default Sponsors;