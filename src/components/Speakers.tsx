import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import { Button, Grid, Row, Col } from 'react-bootstrap';

import { SpeakersSticker } from '../constants/SpeakersSticker';
import { Speaker } from '../constants/SpeakerDesktop';

import "./Speakers.css";
import { isBrowser } from 'react-device-detect';

export const Speakers: React.StatelessComponent<{}> = () => {
    let speakersProps: { imgSource: any, name: string, title: string, company: string }[] = [
        { imgSource: require('../images/Emily Shuka.png'), name: "Emily Shuka", title: "Founder", company: "Apple" }
       ,{ imgSource: require('../images/Steve Stubbs 1.png'), name: "Steve Stubbs", title: "Founder", company: "Apple" }
       ,{ imgSource: require('../images/Steve Stubbs 2.png'), name: "Steve Stubbs", title: "Founder", company: "Apple" }
       ,{ imgSource: require('../images/Steve Stubbs 3.png'), name: "Steve Stubbs", title: "Founder", company: "Apple" }
    ];

    if (isBrowser) {
        return (
            <Grid>
                <Row className="show-grid speakers-title-layout-small">
                    <Col xs={10} xsOffset={1}>
                        <h3 className="speakers-title-font-desktop">Meet the speakers</h3>
                    </Col>
                </Row>
                <Row className="show-grid speakers-img-list">
                    <Speaker
                        imgSource={speakersProps[0].imgSource}
                        name={speakersProps[0].name}
                        title={speakersProps[0].title}
                        company={speakersProps[0].company} />
                    <Speaker
                        imgSource={speakersProps[1].imgSource}
                        name={speakersProps[1].name}
                        title={speakersProps[1].title}
                        company={speakersProps[1].company} />
                    <Speaker
                        imgSource={speakersProps[2].imgSource}
                        name={speakersProps[2].name}
                        title={speakersProps[2].title}
                        company={speakersProps[2].company} />
                    <Speaker
                        imgSource={speakersProps[3].imgSource}
                        name={speakersProps[3].name}
                        title={speakersProps[3].title}
                        company={speakersProps[3].company} />
                </Row>
                <Row className="show-grid speakers-title-layout">
                    <Col xs={10} xsOffset={1}>
                        <Button bsStyle="warning" bsSize="large">View All Speakers</Button>
                    </Col>
                </Row>
            </Grid>
        );
    }

    return (
        <Grid>
            <Row className="show-grid speakers-title-layout-small">
                <Col xs={10} xsOffset={1}>
                    <h3><span className="speakers-title-font">— Speakers —</span></h3>
                </Col>
            </Row>

            <Carousel>
                <Carousel.Item>
                    <img className="speakers-img" src={speakersProps[0].imgSource} />
                    <SpeakersSticker title={speakersProps[0].title} company={speakersProps[0].company} />
                    <Carousel.Caption>
                        <h3>{speakersProps[0].name}</h3>
                    </Carousel.Caption>
                </Carousel.Item> 
                <Carousel.Item>
                    <img className="speakers-img" src={speakersProps[1].imgSource} />
                    <SpeakersSticker title={speakersProps[1].title} company={speakersProps[1].company} />
                    <Carousel.Caption>
                        <h3>{speakersProps[1].name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="speakers-img" src={speakersProps[2].imgSource} />
                    <SpeakersSticker title={speakersProps[2].title} company={speakersProps[2].company} />
                    <Carousel.Caption>
                        <h3>{speakersProps[2].name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="speakers-img" src={speakersProps[3].imgSource} />
                    <SpeakersSticker title={speakersProps[3].title} company={speakersProps[3].company} />
                    <Carousel.Caption>
                        <h3>{speakersProps[3].name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Row className="show-grid speakers-title-layout">
                <Col xs={10} xsOffset={1}>
                    <Button bsStyle="default" className="btn-default" bsSize="large">View All Speakers</Button>
                </Col>
            </Row>
        </Grid>
    );
}

export default Speakers;