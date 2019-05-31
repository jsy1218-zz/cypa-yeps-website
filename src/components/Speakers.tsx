import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';

import { SpeakersSticker } from '../constants/SpeakersSticker';
import { Speaker } from '../constants/SpeakerDesktop';

import "./Speakers.css";
import { isBrowser } from 'react-device-detect';

export const Speakers: React.StatelessComponent<{}> = () => {
    let speakersProps: { imgSource: any, name: string, title: string, company: string }[] = [
        { imgSource: require('../images/ZhengGang Yan.png'), name: "Phillip Yin", title: "2016 WA Lieutenant Governor Candidate", company: "" }
       ,{ imgSource: require('../images/NanYan Li.png'), name: "Dorothy Nicholls", title: "VP, Amazon QuickSight", company: "| Amazon" }
       ,{ imgSource: require('../images/Robert Mao.png'), name: "Robert Mao", title: "Founder & CEO ", company: "| ArcBlock" }
       ,{ imgSource: require('../images/Bo Li.png'), name: "Bo Li", title: "Founder & CEO", company: "| EnvironIn" }
       ,{ imgSource: require('../images/Ming zhu.png'), name: "Ming Zhu", title: "Founder & CEO", company: "| YiRental" }
       ,{ imgSource: require('../images/Yikun Zhao.png'), name: "YiKun Zhao", title: "VP, Flyhomes ", company: "| Flyhomes" }
       ,{ imgSource: require('../images/Vicky Fu.png'), name: "Vicky Fu", title: "Sr Data Scientist", company: "| Microsoft" }
       ,{ imgSource: require('../images/Yuyang Fan.png'), name: "Yuyang Fan", title: "Chief delegate of North America", company: "| YCE" }
       ,{ imgSource: require('../images/Zinan Chen.png'), name: "Zinan Chen", title: " co-founder", company: "| UniWill Ventures" }
       ,{ imgSource: require('../images/Michelle Zou.png'), name: "Michelle Zou", title: "Founder & CEO", company: "| PTCG" }
       ,{ imgSource: require('../images/Jeanie Zheng.png'), name: "Jeanie Zheng", title: "VP of Engineerings ", company: "| GoDaddy" }
       ,{ imgSource: require('../images/Chao Zhang.png'), name: "Chen Zhou", title: "Work Partner", company: "| OnePiece " }
       ,{ imgSource: require('../images/Yiwu He.png'), name: "Yiwu He", title: "Senior VP & Global R&D Head", company: "| BGI" }
       ,{ imgSource: require('../images/Conrad Lee.png'), name: "Conrad Lee", title: "councilman of Bellevue city", company: "" }
       ,{ imgSource: require('../images/Stephanie Kim.png'), name: "Stephanie Kim", title: "Founder", company: "| Moonlit Skincare" }
       ,{ imgSource: require('../images/ChristopherBrown.png'), name: "Christopher Brown", title: "CEO", company: "| NorthStar Law Group" }
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
                             <Speaker
                                imgSource={speakersProps[7].imgSource}
                                name={speakersProps[7].name}
                                title={speakersProps[7].title}
                                company={speakersProps[7].company} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Speaker
                                imgSource={speakersProps[8].imgSource}
                                name={speakersProps[8].name}
                                title={speakersProps[8].title}
                                company={speakersProps[8].company} />
                            <Speaker
                                imgSource={speakersProps[9].imgSource}
                                name={speakersProps[9].name}
                                title={speakersProps[9].title}
                                company={speakersProps[9].company} />
                            <Speaker
                                imgSource={speakersProps[10].imgSource}
                                name={speakersProps[10].name}
                                title={speakersProps[10].title}
                                company={speakersProps[10].company} />
                            <Speaker
                                imgSource={speakersProps[11].imgSource}
                                name={speakersProps[11].name}
                                title={speakersProps[11].title}
                                company={speakersProps[11].company} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Speaker
                                imgSource={speakersProps[12].imgSource}
                                name={speakersProps[12].name}
                                title={speakersProps[12].title}
                                company={speakersProps[12].company} />
                            <Speaker
                                imgSource={speakersProps[13].imgSource}
                                name={speakersProps[13].name}
                                title={speakersProps[13].title}
                                company={speakersProps[13].company} />
                            <Speaker
                                imgSource={speakersProps[14].imgSource}
                                name={speakersProps[14].name}
                                title={speakersProps[14].title}
                                company={speakersProps[14].company} />
                            <Speaker
                                imgSource={speakersProps[15].imgSource}
                                name={speakersProps[15].name}
                                title={speakersProps[15].title}
                                company={speakersProps[15].company} />
                        </Carousel.Item>
                    </Carousel>
                </Row>
                
                <Row className="show-grid speakers-title-layout">
                    <Col xs={10} xsOffset={1}>
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
                    <Carousel.Caption className="speakersname"> 
                        <h3>{speakersProps[0].name}</h3>
                    </Carousel.Caption>
                </Carousel.Item> 
                <Carousel.Item>
                    <img className="speakers-img" src={speakersProps[1].imgSource} />
                    <SpeakersSticker title={speakersProps[1].title} company={speakersProps[1].company} />
                    <Carousel.Caption className="speakersname">
                        <h3>{speakersProps[1].name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="speakers-img" src={speakersProps[2].imgSource} />
                    <SpeakersSticker title={speakersProps[2].title} company={speakersProps[2].company} />
                    <Carousel.Caption className="speakersname">
                        <h3>{speakersProps[2].name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="speakers-img" src={speakersProps[3].imgSource} />
                    <SpeakersSticker title={speakersProps[3].title} company={speakersProps[3].company} />
                    <Carousel.Caption className="speakersname">
                        <h3>{speakersProps[3].name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="speakers-img" src={speakersProps[4].imgSource} />
                    <SpeakersSticker title={speakersProps[4].title} company={speakersProps[4].company} />
                    <Carousel.Caption className="speakersname">
                        <h3>{speakersProps[4].name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="speakers-img" src={speakersProps[5].imgSource} />
                    <SpeakersSticker title={speakersProps[5].title} company={speakersProps[5].company} />
                    <Carousel.Caption className="speakersname"> 
                        <h3>{speakersProps[5].name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="speakers-img" src={speakersProps[6].imgSource} />
                    <SpeakersSticker title={speakersProps[6].title} company={speakersProps[6].company} />
                    <Carousel.Caption className="speakersname">
                        <h3>{speakersProps[6].name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="speakers-img" src={speakersProps[7].imgSource} />
                    <SpeakersSticker title={speakersProps[7].title} company={speakersProps[7].company} />
                    <Carousel.Caption className="speakersname">
                        <h3>{speakersProps[7].name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="speakers-img" src={speakersProps[8].imgSource} />
                    <SpeakersSticker title={speakersProps[8].title} company={speakersProps[8].company} />
                    <Carousel.Caption className="speakersname">
                        <h3>{speakersProps[8].name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="speakers-img" src={speakersProps[9].imgSource} />
                    <SpeakersSticker title={speakersProps[9].title} company={speakersProps[9].company} />
                    <Carousel.Caption className="speakersname">
                        <h3>{speakersProps[9].name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="speakers-img" src={speakersProps[10].imgSource} />
                    <SpeakersSticker title={speakersProps[10].title} company={speakersProps[10].company} />
                    <Carousel.Caption className="speakersname">
                        <h3>{speakersProps[10].name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="speakers-img" src={speakersProps[11].imgSource} />
                    <SpeakersSticker title={speakersProps[11].title} company={speakersProps[11].company} />
                    <Carousel.Caption className="speakersname">
                        <h3>{speakersProps[11].name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="speakers-img" src={speakersProps[12].imgSource} />
                    <SpeakersSticker title={speakersProps[12].title} company={speakersProps[12].company} />
                    <Carousel.Caption className="speakersname">
                        <h3>{speakersProps[12].name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="speakers-img" src={speakersProps[13].imgSource} />
                    <SpeakersSticker title={speakersProps[13].title} company={speakersProps[13].company} />
                    <Carousel.Caption className="speakersname">
                        <h3>{speakersProps[13].name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="speakers-img" src={speakersProps[14].imgSource} />
                    <SpeakersSticker title={speakersProps[14].title} company={speakersProps[14].company} />
                    <Carousel.Caption className="speakersname">
                        <h3>{speakersProps[14].name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="speakers-img" src={speakersProps[15].imgSource} />
                    <SpeakersSticker title={speakersProps[15].title} company={speakersProps[15].company} />
                    <Carousel.Caption className="speakersname">
                        <h3>{speakersProps[15].name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Row className="show-grid speakers-title-layout">
                <Col xs={10} xsOffset={1}>
                </Col>
            </Row>
        </Grid>
    );
}

export default Speakers;