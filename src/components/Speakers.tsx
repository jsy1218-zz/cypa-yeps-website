import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import { Button, Grid, Row, Col } from 'react-bootstrap';

import { SpeakersSticker } from '../constants/SpeakersSticker';
import { Speaker } from '../constants/SpeakerDesktop';

import "./Speakers.css";
import { isBrowser } from 'react-device-detect';

export const Speakers: React.StatelessComponent<{}> = () => {
    let speakersProps: { imgSource: any, name: string, title: string, company: string }[] = [
        { imgSource: require('../images/ZhengGang Yan.jpg'), name: "Phillip Yin", title: "2016 WA Lieutenant Governor Candidate", company: "" }
       ,{ imgSource: require('../images/NanYan Li.jpeg'), name: "Dorothy Nicholls", title: "VP, Amazon QuickSight", company: "| Amazon" }
       ,{ imgSource: require('../images/Robert Mao.png'), name: "Robert Mao", title: "Founder & CEO ", company: "| ArcBlock" }
       ,{ imgSource: require('../images/Bo Li.png'), name: "Bo Li", title: "Founder & CEO", company: "| 环in圈" }
       ,{ imgSource: require('../images/Ming Zhu.jpeg'), name: "Ming Zhu", title: "Founder & CEO", company: "| YiRental" }
       ,{ imgSource: require('../images/Yikun Zhao.png'), name: "YiKun Zhao", title: "VP, Flyhomes ", company: "| Flyhomes" }
       ,{ imgSource: require('../images/Vicky Fu.jpeg'), name: "Vicky Fu", title: "Sr Data Scientist", company: "| Microsoft" }
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
                    <Carousel>  
                        <Carousel.Item>
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
                        </Carousel.Item>
                        <Carousel.Item>
                            <Speaker
                                imgSource={speakersProps[4].imgSource}
                                name={speakersProps[4].name}
                                title={speakersProps[4].title}
                                company={speakersProps[4].company} />
                            <Speaker
                                imgSource={speakersProps[5].imgSource}
                                name={speakersProps[5].name}
                                title={speakersProps[5].title}
                                company={speakersProps[5].company} />
                            <Speaker
                                imgSource={speakersProps[6].imgSource}
                                name={speakersProps[6].name}
                                title={speakersProps[6].title}
                                company={speakersProps[6].company} />
                        </Carousel.Item>
                    </Carousel>
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
                <Carousel.Item>
                    <img className="speakers-img" src={speakersProps[4].imgSource} />
                    <SpeakersSticker title={speakersProps[4].title} company={speakersProps[4].company} />
                    <Carousel.Caption>
                        <h3>{speakersProps[4].name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="speakers-img" src={speakersProps[5].imgSource} />
                    <SpeakersSticker title={speakersProps[5].title} company={speakersProps[5].company} />
                    <Carousel.Caption>
                        <h3>{speakersProps[5].name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="speakers-img" src={speakersProps[6].imgSource} />
                    <SpeakersSticker title={speakersProps[6].title} company={speakersProps[6].company} />
                    <Carousel.Caption>
                        <h3>{speakersProps[6].name}</h3>
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