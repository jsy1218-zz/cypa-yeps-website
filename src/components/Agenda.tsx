import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './Agenda.css';
import { isBrowser } from 'react-device-detect';

export const Agenda: React.StatelessComponent<{}> = () => {
    if (isBrowser) {
        return (
            <Grid>
                <Row className="show-grid agenda-title-layout-small">
                    <Col xs={10} xsOffset={1}>
                        <h3 className="agenda-title-font-desktop">View the agenda</h3>
                    </Col>
                </Row>
    
                <VerticalTimeline layout={'2-columns'}>
                    <div className="vertical-timeline-right-area-bg"/>
                    <div className="vertical-timeline-element-content agenda-meme">
                        <span className="agenda-meme-font">start of the day</span>
                    </div>
    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="1:00 - 1:30 PM"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                <circle cx="12" cy="13" r="9" stroke="#ffa719" stroke-width="2" fill="white" />
                                <circle cx="12" cy="13" r="4" stroke="#ffa719" stroke-width="2" fill="#ffa719" />
                            </svg>} 
                    >
                        <span className="vertical-timeline-element-title">Sign In</span>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="1:35 - 2:45 PM"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                <circle cx="12" cy="13" r="9" stroke="#ffa719" stroke-width="2" fill="white" />
                                <circle cx="12" cy="13" r="4" stroke="#ffa719" stroke-width="2" fill="#ffa719" />
                            </svg>}                 
                    >
                        <span className="vertical-timeline-element-title">Main Forum</span>
                        <p className="agenda-paragraph">
                        The host to introduce the opening, and The chairman delivered the opening speech. The main venue will preside by Zhenggang Yan. With the other three guests, Ruilin Li ( former mayor of  Bellevue), Nanyan Li (vice President of amazon AWS), Zhiling Zheng (vice President of engineering at GoDaddy). They will have in-depth discussions on education, workplace, entrepreneurship and public welfare.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2:45 - 2:55 PM"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                <circle cx="12" cy="13" r="9" stroke="#ffa719" stroke-width="2" fill="white" />
                                <circle cx="12" cy="13" r="4" stroke="#ffa719" stroke-width="2" fill="#ffa719" />
                            </svg>}     
                    >
                    <span className="vertical-timeline-element-title">Society Awards</span>
                    <p className="agenda-paragraph">
                    Presentation of Seattle excellent Society. The main purpose is to let the student community understand and affirm each other with the outside world.
                    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2:55 - 3:00 PM"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                <circle cx="12" cy="13" r="9" stroke="#ffa719" stroke-width="2" fill="white" />
                                <circle cx="12" cy="13" r="4" stroke="#ffa719" stroke-width="2" fill="#ffa719" />
                            </svg>}     
                    >
                    <span className="vertical-timeline-element-title">The Break</span>
                    </VerticalTimelineElement>
    
                    <div className="vertical-timeline-element-content agenda-meme">
                        <span className="agenda-meme-font">mid day</span>
                    </div>
    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="3:00 - 4:10 PM"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                <circle cx="12" cy="13" r="9" stroke="#ffa719" stroke-width="2" fill="white" />
                                <circle cx="12" cy="13" r="4" stroke="#ffa719" stroke-width="2" fill="#ffa719" />
                            </svg>}     
                    >
                        <span className="vertical-timeline-element-title">Career Forum</span>     
                    <p className="agenda-paragraph">
                        Michielle Zhou keynote speech - tips for career growth <br/>
                        Michielle Zhou, Yikun Zhao, Bo Li, Yu Fu as Panelist
                    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="4:10 - 4:15 PM"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                <circle cx="12" cy="13" r="9" stroke="#ffa719" stroke-width="2" fill="white" />
                                <circle cx="12" cy="13" r="4" stroke="#ffa719" stroke-width="2" fill="#ffa719" />
                            </svg>}     
                    >
                    <span className="vertical-timeline-element-title">The Break</span>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="4:15 - 6:30 PM"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                <circle cx="12" cy="13" r="9" stroke="#ffa719" stroke-width="2" fill="white" />
                                <circle cx="12" cy="13" r="4" stroke="#ffa719" stroke-width="2" fill="#ffa719" />
                            </svg>}     
                    > 
                        <span className="vertical-timeline-element-title">Entrepreneur Forum</span>
                        <p className="agenda-paragraph">
                        Seesion1: Zhihong Hong (founder and CEO of ArcBlock block), Chao Zhang (chief technology officer and co-founder of Ubi Interactive Inc), Stephanie Kim and Christopher Brown. They introduce the development prospects of the relevant fields and share their entrepreneurial stories.<br/>
                        Seesion2: Nan Zi (co-founder of UniWill Ventures), Zhou Chen ( partner of OnePiece), Ming Zhu (founder and CEO of Yirental), Yuyang Fan (chief representative of YCE North America). They share the information related to youth entrepreneurship with you from the perspective of investors and incubators.
                        </p>
                    </VerticalTimelineElement>
    
                    <div className="vertical-timeline-element-content agenda-meme">
                        <span className="agenda-meme-font">end of the day</span>
                    </div>
    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="6:30 - 7:00 PM"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                <circle cx="12" cy="13" r="9" stroke="#ffa719" stroke-width="2" fill="white" />
                                <circle cx="12" cy="13" r="4" stroke="#ffa719" stroke-width="2" fill="#ffa719" />
                            </svg>}     
                    >
                        <span className="vertical-timeline-element-title">Networking</span>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Grid>
        );
    }
    return (
        <Grid>
            <Row className="show-grid agenda-title-layout-small">
                <Col xs={10} xsOffset={1}>
                    <h3><span className="agenda-title-font">— Agenda —</span></h3>
                </Col>
            </Row>

            <VerticalTimeline layout={'1-column'}>
                <div className="vertical-timeline-element-content agenda-meme">
                    <span className="agenda-meme-font">start of the day</span>
                </div>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <circle cx="12" cy="13" r="9" stroke="#ffa719" stroke-width="2" fill="white" />
                            <circle cx="12" cy="13" r="4" stroke="#ffa719" stroke-width="2" fill="#ffa719" />
                        </svg>} 
                >
                    <h3 className="vertical-timeline-element-title">1:00 - 1:30 PM</h3>
                    <h3 className="vertical-timeline-element-title">Sign In</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <circle cx="12" cy="13" r="9" stroke="#ffa719" stroke-width="2" fill="white" />
                            <circle cx="12" cy="13" r="4" stroke="#ffa719" stroke-width="2" fill="#ffa719" />
                        </svg>}                 >
                    <h3 className="vertical-timeline-element-title">1:35 - 2:45 PM</h3>
                    <h3 className="vertical-timeline-element-title">Main Forum</h3>
                    <p className="agenda-paragraph">
                    The host to introduce the opening, and The chairman delivered the opening speech. The main venue will preside by Zhenggang Yan. With the other three guests, Ruilin Li ( former mayor of  Bellevue), Nanyan Li (vice President of amazon AWS), Zhiling Zheng (vice President of engineering at GoDaddy). They will have in-depth discussions on education, workplace, entrepreneurship and public welfare.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <circle cx="12" cy="13" r="9" stroke="#ffa719" stroke-width="2" fill="white" />
                            <circle cx="12" cy="13" r="4" stroke="#ffa719" stroke-width="2" fill="#ffa719" />
                        </svg>}                 >
                    <h3 className="vertical-timeline-element-title">2:45 - 2:55 PM</h3>
                    <h3 className="vertical-timeline-element-title">Society Awards</h3>
                    <p className="agenda-paragraph">
                    Presentation of Seattle excellent Society. The main purpose is to let the student community understand and affirm each other with the outside world.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <circle cx="12" cy="13" r="9" stroke="#ffa719" stroke-width="2" fill="white" />
                            <circle cx="12" cy="13" r="4" stroke="#ffa719" stroke-width="2" fill="#ffa719" />
                        </svg>}     
                >
                    <h3 className="vertical-timeline-element-title">2:55 - 3:00 PM</h3>
                    <h3 className="vertical-timeline-element-title">The Break</h3>
                </VerticalTimelineElement>

                <div className="vertical-timeline-element-content agenda-meme">
                    <span className="agenda-meme-font">mid day</span>
                </div>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <circle cx="12" cy="13" r="9" stroke="#ffa719" stroke-width="2" fill="white" />
                            <circle cx="12" cy="13" r="4" stroke="#ffa719" stroke-width="2" fill="#ffa719" />
                        </svg>}     
                >
                    <h3 className="vertical-timeline-element-title">3:00 - 4:10 PM</h3>
                    <h3 className="vertical-timeline-element-title">Career Forum</h3>
                    <p className="agenda-paragraph">
                        Michielle Zhou keynote speech - tips for career growth <br/>
                        Michielle Zhou, Yikun Zhao, Bo Li, Yu Fu as Panelist
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <circle cx="12" cy="13" r="9" stroke="#ffa719" stroke-width="2" fill="white" />
                            <circle cx="12" cy="13" r="4" stroke="#ffa719" stroke-width="2" fill="#ffa719" />
                        </svg>}     
                >
                    <h3 className="vertical-timeline-element-title">4:10 - 4:15 PM</h3>
                    <h3 className="vertical-timeline-element-title">The Break</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <circle cx="12" cy="13" r="9" stroke="#ffa719" stroke-width="2" fill="white" />
                            <circle cx="12" cy="13" r="4" stroke="#ffa719" stroke-width="2" fill="#ffa719" />
                        </svg>}     
                >
                    <h3 className="vertical-timeline-element-title">4:15 - 6:30 PM</h3>
                    <h3 className="vertical-timeline-element-title">Entrepreneur Forum</h3>
                    <p className="agenda-paragraph">
                    Seesion1: Zhihong Hong (founder and CEO of ArcBlock block), Chao Zhang (chief technology officer and co-founder of Ubi Interactive Inc), Stephanie Kim and Christopher Brown. They introduce the development prospects of the relevant fields and share their entrepreneurial stories.<br/>
                    Seesion2: Nan Zi (co-founder of UniWill Ventures), Zhou Chen ( partner of OnePiece), Ming Zhu (founder and CEO of Yirental), Yuyang Fan (chief representative of YCE North America). They share the information related to youth entrepreneurship with you from the perspective of investors and incubators.
                    </p>
                </VerticalTimelineElement>

                <div className="vertical-timeline-element-content agenda-meme">
                    <span className="agenda-meme-font">end of the day</span>
                </div>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <circle cx="12" cy="13" r="9" stroke="#ffa719" stroke-width="2" fill="white" />
                            <circle cx="12" cy="13" r="4" stroke="#ffa719" stroke-width="2" fill="#ffa719" />
                        </svg>}     
                >
                    <h3 className="vertical-timeline-element-title">6:30 - 7:00 PM</h3>
                    <h3 className="vertical-timeline-element-title">Networking</h3>
                </VerticalTimelineElement>
            </VerticalTimeline>

        </Grid>
    );
}

export default Agenda;