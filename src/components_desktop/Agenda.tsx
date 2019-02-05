import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './Agenda.css';

export const Agenda: React.StatelessComponent<{}> = () => {
    return (
        <Grid>
            <Row className="show-grid agenda-title-layout-small">
                <Col xs={10} xsOffset={1}>
                    <h3><span className="agenda-title-font">— Agenda —</span></h3>
                </Col>
            </Row>

            <VerticalTimeline layout={'2-columns'}>
                <div className="vertical-timeline-right-area-bg"/>
                <div className="vertical-timeline-element-content agenda-meme">
                    <span className="agenda-meme-font">start of the day</span>
                </div>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="7:30 - 8:00 AM"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <circle cx="12" cy="13" r="9" stroke="#ffa719" stroke-width="2" fill="white" />
                            <circle cx="12" cy="13" r="4" stroke="#ffa719" stroke-width="2" fill="#ffa719" />
                        </svg>} 
                >
                    <span className="vertical-timeline-element-title">Registration Opens</span>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="8:00 - 8:30 AM"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <circle cx="12" cy="13" r="9" stroke="#ffa719" stroke-width="2" fill="white" />
                            <circle cx="12" cy="13" r="4" stroke="#ffa719" stroke-width="2" fill="#ffa719" />
                        </svg>}                 
                >
                    <span className="vertical-timeline-element-title">Welcome</span>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="8:30 - 9:30 AM"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <circle cx="12" cy="13" r="9" stroke="#ffa719" stroke-width="2" fill="white" />
                            <circle cx="12" cy="13" r="4" stroke="#ffa719" stroke-width="2" fill="#ffa719" />
                        </svg>}     
                >
                    <span className="vertical-timeline-element-title">Keynote: Career</span>
                    <p className="agenda-paragraph">
                    Barcoding's commitment to our customers is that we provide them with the ability to be more efficient, 
                    accurate, and connected. This year we will host two content tracks to help you do just that.
                    </p>
                </VerticalTimelineElement>

                <div className="vertical-timeline-element-content agenda-meme">
                    <span className="agenda-meme-font">mid day</span>
                </div>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="12:00 - 1:00 PM"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <circle cx="12" cy="13" r="9" stroke="#ffa719" stroke-width="2" fill="white" />
                            <circle cx="12" cy="13" r="4" stroke="#ffa719" stroke-width="2" fill="#ffa719" />
                        </svg>}     
                >
                    <span className="vertical-timeline-element-title">Lunch</span>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="1:00 - 2:00 PM"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <circle cx="12" cy="13" r="9" stroke="#ffa719" stroke-width="2" fill="white" />
                            <circle cx="12" cy="13" r="4" stroke="#ffa719" stroke-width="2" fill="#ffa719" />
                        </svg>}     
                >
                    <span className="vertical-timeline-element-title">Breakout Sessions</span>
                    <p className="agenda-paragraph">
                    Barcoding's commitment to our customers is that we provide them with the ability to be more efficient, 
                    accurate, and connected.
                    </p>
                </VerticalTimelineElement>

                <div className="vertical-timeline-element-content agenda-meme">
                    <span className="agenda-meme-font">end of the day</span>
                </div>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="4:30 - 5:00 PM"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <circle cx="12" cy="13" r="9" stroke="#ffa719" stroke-width="2" fill="white" />
                            <circle cx="12" cy="13" r="4" stroke="#ffa719" stroke-width="2" fill="#ffa719" />
                        </svg>}     
                >
                    <span className="vertical-timeline-element-title">Closing Remarks</span>
                </VerticalTimelineElement>
            </VerticalTimeline>

        </Grid>
    );
}

export default Agenda;