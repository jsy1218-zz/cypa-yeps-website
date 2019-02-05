import * as React from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';

import { Speaker } from '../constants/SpeakerDesktop';

import "./Speakers.css";

export const Speakers: React.StatelessComponent<{}> = () => {
    let speakersProps: { imgSource: any, name: string, title: string, company: string }[] = [
        { imgSource: require('../images/Emily Shuka.png'), name: "Emily Shuka", title: "Founder", company: "Apple" }
       ,{ imgSource: require('../images/Steve Stubbs 1.png'), name: "Steve Stubbs", title: "Founder", company: "Apple" }
       ,{ imgSource: require('../images/Steve Stubbs 2.png'), name: "Steve Stubbs", title: "Founder", company: "Apple" }
       ,{ imgSource: require('../images/Steve Stubbs 3.png'), name: "Steve Stubbs", title: "Founder", company: "Apple" }
   ];

    return (
        <Grid>
            <Row className="show-grid speakers-title-layout-small">
                <Col xs={10} xsOffset={1}>
                    <h3><span className="speakers-title-font">— Speakers —</span></h3>
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

export default Speakers;